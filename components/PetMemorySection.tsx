"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
import {
  DotsVerticalIcon,
  DownloadIcon,
  DrawingPinFilledIcon,
  DrawingPinIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

import emoji from "@/public/emoji.svg";
import color from "@/public/colorIcon.svg";
import _delete from "@/public/deleteIcon.svg";
import create from "@/public/createIcon.svg";
import upload from "@/public/uploadIcon.svg";

const PetMemorySection = () => {
  const router = useRouter();

  const [isPinned, setIsPinned] = useState(true);
  const [isBlockMenuOpen, setIsBlockMenuOpen] = useState(false);
  const [isAddBlockMenuOpen, setIsAddBlockMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-auto px-8 py-5 text-[#C0C0C0] z-10">
      <div
        className={`${(isBlockMenuOpen || isAddBlockMenuOpen) && "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30 block w-full h-full fixed inset-0 z-30"}`}
      />
      <div className="flex flex-col gap-5">
        <Card
          classNames={{
            base: "bg-[#1C1C1C] text-[#C0C0C0] rounded-[10px] shadow-none outline-0",
            header: "text-[16px] bg-[#060606] px-5 py-4 rounded-t-[10px]",
            body: "py-4",
          }}
        >
          <CardHeader>
            <p>Данные из диалога</p>
          </CardHeader>
          <CardBody>
            <p className="px-7 whitespace-pre-line text-[15px] text-[#5D5D5D] font-medium leading-7">
              {`Майдан IT-специалист
			  Проект MixAI является высоко ... 
			  какая-то инфа
			  какая-то инфа
			  .......`}
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
        <Card
          className={`${isBlockMenuOpen && "z-30"}`}
          classNames={{
            base: "bg-black flex-row shadow-none",
            body: "bg-black flex-row items-center rounded-l-[10px] p-0",
            footer:
              "bg-black w-[120px] rounded-r-[10px] rounded-l-none justify-end",
          }}
        >
          <CardBody>
            <Button className="bg-transparent h-full w-full px-5 justify-start text-[#949494]">
              {/* onPress={() => router.push(`/memoryBlock/${blockId}`)} */}
              <div className="flex justify-center items-center h-full gap-4">
                <Image alt="" src={emoji} />
                <div className="flex flex-col justify-start">
                  <p className="text-[10px] font-semibold text-start">
                    Проект MixAi
                  </p>
                  <p className="text-[10px] font-medium">
                    <span>Блок знаний </span>
                    <span className="text-[#4C4C4C]">(2 дня назад)</span>
                  </p>
                </div>
              </div>
            </Button>
          </CardBody>
          <CardFooter>
            {isPinned && (
              <Button
                isIconOnly
                radius="full"
                className="bg-transparent text-[#949494] w-fit"
                onPress={() => setIsPinned(false)} // TODO: edit
              >
                <DrawingPinFilledIcon className="scale-125" />
              </Button>
            )}
            <Popover
              placement="bottom-end"
              backdrop="transparent"
              offset={20}
              classNames={{ content: "bg-[#1C1C1C] text-[#949494]" }}
              isOpen={isBlockMenuOpen}
              onOpenChange={(open) => setIsBlockMenuOpen(open)}
            >
              <PopoverTrigger>
                <Button
                  isIconOnly
                  radius="full"
                  className="bg-transparent text-[#949494] self-end"
                >
                  <DotsVerticalIcon className="scale-150" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Listbox
                  disabledKeys={["download"]}
                  variant="light"
                  classNames={{ base: "bg-[#1C1C1C]" }}
                >
                  <ListboxItem
                    key="pin"
                    endContent={<DrawingPinIcon />}
                    classNames={{ title: "text-[13px] font-medium" }}
                  >
                    Закрепить
                  </ListboxItem>
                  <ListboxItem
                    key="download"
                    endContent={<DownloadIcon />}
                    classNames={{ title: "text-[13px] font-medium" }}
                  >
                    Скачать
                  </ListboxItem>
                  <ListboxItem
                    key="color"
                    endContent={<Image alt="" src={color} />}
                    classNames={{ title: "text-[13px] font-medium" }}
                  >
                    Цвет
                  </ListboxItem>
                  <ListboxItem
                    key="delete"
                    color="danger"
                    endContent={<Image alt="" src={_delete} />}
                    classNames={{
                      base: "text-[#AB0505]",
                      title: "text-[13px] font-medium",
                    }}
                  >
                    Удалить
                  </ListboxItem>
                </Listbox>
              </PopoverContent>
            </Popover>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default PetMemorySection;
