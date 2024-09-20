"use client";
import {
  Button,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import {
  DotsVerticalIcon,
  DownloadIcon,
  DrawingPinIcon,
} from "@radix-ui/react-icons";
import { useAppDispatch } from "@/lib/redux/shared/store";
import { isOpenChange } from "@/lib/redux/models/conextMenu/contextMenu.slice";
import { isPinnedChange } from "@/lib/redux/models/memoryRecord/memoryRecord.slice";

import Image from "next/image";

import color from "@/public/colorIcon.svg";
import _delete from "@/public/deleteIcon.svg";
import { useState } from "react";

const MemoryRecordContextMenu = ({ recordId }: { recordId: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <Popover
      placement="bottom-end"
      backdrop="transparent"
      offset={20}
      classNames={{ content: "bg-[#1C1C1C] text-[#949494]" }}
      isOpen={isOpen}
      onOpenChange={() => {
        setIsOpen(!isOpen);
        dispatch(isOpenChange(recordId));
      }}
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
            onClick={() => {
              setIsOpen(!isOpen);
              dispatch(isPinnedChange()); // need to save with memory id
              dispatch(isOpenChange(""));
            }}
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
            // onClick={() => dispatch()} open color palette
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
  );
};

export default MemoryRecordContextMenu;
