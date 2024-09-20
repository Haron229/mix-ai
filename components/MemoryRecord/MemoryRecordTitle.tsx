"use client";
import { Button, Input } from "@nextui-org/react";
import MemoryRecordContextMenu from "./MemoryRecordContextMenu";
import {
  isPinnedChange,
  memoryRecordSlice,
  setTitle,
} from "@/lib/redux/models/memoryRecord/memoryRecord.slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/shared/store";

import { DrawingPinFilledIcon } from "@radix-ui/react-icons";

const MemoryRecordTitle = () => {
  const title = useAppSelector(memoryRecordSlice.selectors.selectTitle);
  const isPinned = useAppSelector(memoryRecordSlice.selectors.selectIsPinned);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-row justify-between items-center bg-black w-full px-8 py-3">
      <div className="flex items-center gap-4">
        <Button isIconOnly size="sm" radius="md" className="bg-[#232323]" />
        <Input
          value={title ? title : "Без названия"}
          classNames={{
            inputWrapper: "bg-black group-data-[focus=true]:bg-black",
            input:
              "bg-black group-data-[has-value=true]:text-[18px] group-data-[has-value=true]:text-[#C0C0C0] group-data-[has-value=true]:font-semibold",
          }}
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
      </div>
      <div className="flex">
        {isPinned && (
          <Button
            isIconOnly
            radius="full"
            className="bg-transparent text-[#949494] w-fit"
            onPress={() => dispatch(isPinnedChange())}
          >
            <DrawingPinFilledIcon className="scale-125" />
          </Button>
        )}
        <MemoryRecordContextMenu />
      </div>
    </div>
  );
};

export default MemoryRecordTitle;
