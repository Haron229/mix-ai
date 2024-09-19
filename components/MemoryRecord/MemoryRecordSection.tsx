"use client";
import { useEffect, useRef } from "react";
import {
  memoryRecordSlice,
  setContent,
} from "@/lib/redux/models/memoryRecord/memoryRecord.slice";
import { contextMenuSlice } from "@/lib/redux/models/conextMenu/contextMenu.slice";
import { memoryRecordApi } from "@/lib/redux/models/memoryRecord/api";
import { useAppDispatch, useAppSelector } from "@/lib/redux/shared/store";
import { userSlice } from "@/lib/redux/models/user/user.slice";
import { SaveMemoryRecordProps } from "@/lib/types";

import { Textarea } from "@nextui-org/react";
import MemoryRecordTitle from "@/components/MemoryRecord/MemoryRecordTitle";
import { useDebouncedCallback } from "use-debounce";

const MemoryRecordSection = ({ params }: { params: { id: string } }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isOpen = useAppSelector(contextMenuSlice.selectors.selectIsOpen);
  const userId = useAppSelector(userSlice.selectors.selectCurrentUserId);
  const activeRecordData = useAppSelector(
    memoryRecordSlice.selectors.selectRecord
  );
  const dispatch = useAppDispatch();

  const [getMemoryRecord] = memoryRecordApi.useLazyGetMemoryRecordQuery();
  const [saveMemoryRecord] = memoryRecordApi.useLazySaveMemoryRecordQuery();
  const save = useDebouncedCallback((recordData: SaveMemoryRecordProps) => {
    saveMemoryRecord(recordData);
  }, 2500);

  useEffect(() => {
    textareaRef.current?.focus();

    if (params.id.length) getMemoryRecord(params.id);
  }, []);

  return (
    <section className="relative w-full h-auto pt-[72px] text-[#C0C0C0] z-10">
      {activeRecordData && (
        <>
          <div
            className={`${isOpen && "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30 block w-full h-full fixed inset-0 z-30"}`}
          />
          <MemoryRecordTitle
            title={activeRecordData.title}
            isPinned={activeRecordData.isPinned}
          />
          <div className="p-5 h-full">
            <Textarea
              ref={textareaRef}
              maxRows={25}
              defaultValue={activeRecordData.content}
              classNames={{
                inputWrapper:
                  "bg-[#101010] group-data-[has-value=true]:bg-[#101010]",
                input:
                  "bg-[#101010] text-[15px] group-data-[has-value=true]:text-[#5D5D5D] font-medium",
              }}
              onChange={(e) => {
                dispatch(setContent(e.target.value));
                save({
                  ...activeRecordData,
                  userId,
                });
              }}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default MemoryRecordSection;
