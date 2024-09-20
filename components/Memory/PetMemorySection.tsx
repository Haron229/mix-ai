"use client";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { DrawingPinFilledIcon, PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import emoji from "@/public/emoji.svg";
import create from "@/public/createIcon.svg";
import upload from "@/public/uploadIcon.svg";

import MemoryRecordContextMenu from "@/components/MemoryRecord/MemoryRecordContextMenu";
import { useAppDispatch, useAppSelector } from "@/lib/redux/shared/store";
import { setRecordId } from "@/lib/redux/models/memoryRecord/memoryRecord.slice";
import { Sections } from "@/lib/redux/models/app/app.slice";
import { memoryRecordApi } from "@/lib/redux/models/memoryRecord/api";
import { contextMenuSlice } from "@/lib/redux/models/conextMenu/contextMenu.slice";
import { userSlice } from "@/lib/redux/models/user/user.slice";
import { changeSection } from "@/lib/redux/models/app/changeSection";

const PetMemorySection = () => {
  const userId = useAppSelector(userSlice.selectors.selectCurrentUserId);
  const isOpen = useAppSelector(contextMenuSlice.selectors.selectIsOpen);
  const contextId = useAppSelector(contextMenuSlice.selectors.selectId);
  const { data, isLoading } = memoryRecordApi.useGetMemoryRecordsQuery(userId, {
    refetchOnMountOrArgChange: true,
  });
  const dispatch = useAppDispatch();

  const [isAddBlockMenuOpen, setIsAddBlockMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-auto px-8 py-5 pt-24 text-[#C0C0C0] z-10">
      <div
        className={`${(isOpen || isAddBlockMenuOpen) && "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30 block w-full h-full fixed inset-0 z-30"}`}
      />
      <div className="flex flex-col gap-5">
        <Card
          classNames={{
            base: "bg-[#1C1C1C] text-[#C0C0C0] rounded-[10px] shadow-none outline-0",
            header: "text-[16px] bg-black px-5 py-4 rounded-t-[10px]",
            body: "py-4",
          }}
        >
          <CardHeader>
            <p>Данные из диалога</p>
          </CardHeader>
          <CardBody>
            <p className="px-7 whitespace-pre-line text-[15px] text-[#5D5D5D] font-medium leading-7">
              Пока пусто
            </p>
          </CardBody>
        </Card>
        <div
          className={`flex justify-between items-center text-[18px] font-semibold ${isAddBlockMenuOpen && "z-30"}`}
        >
          <p className="whitespace-pre-line">
            {`Создать новый блок данных
			      для памяти AI-питомца`}
          </p>
          <Popover
            placement="bottom-end"
            backdrop="transparent"
            offset={20}
            classNames={{ content: "bg-[#1C1C1C] text-[#949494]" }}
            isOpen={isAddBlockMenuOpen}
            onOpenChange={(open) => setIsAddBlockMenuOpen(open)}
          >
            <PopoverTrigger>
              <Button
                isIconOnly
                radius="full"
                variant="bordered"
                className="text-white"
              >
                <PlusIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Listbox
                disabledKeys={["upload"]}
                variant="light"
                classNames={{ base: "bg-[#1C1C1C]" }}
              >
                <ListboxItem
                  key="create"
                  endContent={<Image alt="" src={create} />}
                  classNames={{ title: "text-[13px] font-medium" }}
                  onClick={() => dispatch(changeSection(Sections.MemoryRecord))}
                >
                  Создать
                </ListboxItem>
                <ListboxItem
                  key="upload"
                  endContent={<Image alt="" src={upload} />}
                  classNames={{ title: "text-[13px] font-medium" }}
                >
                  Загрузить
                </ListboxItem>
              </Listbox>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col-reverse gap-4">
          {/* add skeleton interface state */}
          {!isLoading &&
            data?.records?.map((memoryRecord) => (
              <Card
                key={memoryRecord.id}
                className={`${isOpen && contextId === memoryRecord.id && "z-30"}`}
                classNames={{
                  base: "bg-black flex-row shadow-none",
                  body: "bg-black flex-row items-center rounded-l-[10px] p-0",
                  footer:
                    "bg-black w-[120px] rounded-r-[10px] rounded-l-none justify-end",
                }}
              >
                <CardBody>
                  <Button
                    className="bg-transparent h-full w-full px-5 justify-start text-[#949494]"
                    onClick={() => {
                      dispatch(setRecordId(memoryRecord.id));
                      memoryRecordApi.endpoints.getMemoryRecord.initiate(
                        memoryRecord.id
                      );
                      dispatch(changeSection(Sections.MemoryRecord));
                    }}
                  >
                    <div className="flex justify-center items-center h-full gap-4">
                      <Image alt="" src={emoji} />
                      <div className="flex flex-col justify-start">
                        <p className="text-[10px] font-semibold text-start">
                          {memoryRecord.title}
                        </p>
                        <p className="text-[10px] font-medium">
                          <span>Блок знаний </span>
                          {/* calculate updatedAt time */}
                          <span className="text-[#4C4C4C]">(2 дня назад)</span>
                        </p>
                      </div>
                    </div>
                  </Button>
                </CardBody>
                <CardFooter>
                  {memoryRecord.isPinned && (
                    <DrawingPinFilledIcon className="scale-125 text-[#949494]" />
                  )}
                  <MemoryRecordContextMenu recordId={memoryRecord.id} />
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PetMemorySection;
