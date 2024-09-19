"use client";
import DefaultHeader from "@/components/Home/DefaultHeader";
import MemoryRecordSection from "@/components/MemoryRecord/MemoryRecordSection";
import { memoryRecordSlice } from "@/lib/redux/models/memoryRecord/memoryRecord.slice";
import { useAppSelector } from "@/lib/redux/shared/store";

const MemoryRecord = () => {
  const id = useAppSelector(memoryRecordSlice.selectors.selectId);

  return (
    <>
      <DefaultHeader lable="Без названия" />
      <MemoryRecordSection params={{ id: id }} />
    </>
  );
};

export default MemoryRecord;
