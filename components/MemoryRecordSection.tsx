"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  contentChange,
  memoryRecordSlice,
} from "@/lib/redux/models/memoryRecord/memoryRecord.slice";

import MemoryRecordTitle from "./MemoryRecordTitle";
import { Textarea } from "@nextui-org/react";
import { contextMenuSlice } from "@/lib/redux/models/conextMenu/contextMenu.slice";

const MemoryRecordSection = () => {
  const isOpen = useSelector(contextMenuSlice.selectors.selectIsOpen);
  const text = useSelector(memoryRecordSlice.selectors.selectContent);
  const title = useSelector(memoryRecordSlice.selectors.selectTitle);
  const isPinned = useSelector(memoryRecordSlice.selectors.selectIsPinned);
  const dispatch = useDispatch();

  return (
    <section className="relative w-full h-auto pt-[72px] text-[#C0C0C0] z-10">
      <div
        className={`${isOpen && "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30 block w-full h-full fixed inset-0 z-30"}`}
      />
      <MemoryRecordTitle title={title} isPinned={isPinned} />
      <div className="p-5">
        <Textarea
          maxRows={25}
          defaultValue={text}
          classNames={{
            inputWrapper:
              "bg-[#101010] group-data-[has-value=true]:bg-[#101010]",
            input:
              "bg-[#101010] text-[15px] group-data-[has-value=true]:text-[#5D5D5D] font-medium",
          }}
          onChange={(e) => dispatch(contentChange(e.target.value))}
        />
      </div>
    </section>
  );
};

export default MemoryRecordSection;
