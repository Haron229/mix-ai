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
import { useAppDispatch, useAppSelector } from "@/lib/redux/shared/store";
import {
  contextMenuSlice,
  isOpenChange,
} from "@/lib/redux/models/conextMenu/contextMenu.slice";
import { isPinnedChange } from "@/lib/redux/models/memoryRecord/memoryRecord.slice";

import Image from "next/image";

import color from "@/public/colorIcon.svg";
import _delete from "@/public/deleteIcon.svg";

const MemoryRecordContextMenu = () => {
  const isOpen = useAppSelector(contextMenuSlice.selectors.selectIsOpen);
  const dispatch = useAppDispatch();

  return (
    <Popover
      placement="bottom-end"
      backdrop="transparent"
      offset={20}
      classNames={{ content: "bg-[#1C1C1C] text-[#949494]" }}
      isOpen={isOpen}
      onOpenChange={() => dispatch(isOpenChange())}
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
            onClick={() => dispatch(isPinnedChange())}
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
