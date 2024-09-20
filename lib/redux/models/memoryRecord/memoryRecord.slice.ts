import { PetMemoryRecord } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SelectedMemoryRecordState {
  record: PetMemoryRecord;
  isLoading: boolean;
  error: string;
}

const initialState: SelectedMemoryRecordState = {
  record: {
    id: "",
    title: "Без названия",
    emoji: "",
    content: "",
    color: "000000",
    isPinned: false,
  },
  isLoading: false,
  error: "",
};

export const memoryRecordSlice = createSlice({
  name: "memoryRecord",
  initialState,
  selectors: {
    selectId: (state) => state.record.id,
    selectTitle: (state) => state.record.title,
    selectEmoji: (state) => state.record.emoji,
    selectContent: (state) => state.record.content,
    selectColor: (state) => state.record.color,
    selectIsPinned: (state) => state.record.isPinned,
    selectRecord: (state) => state.record,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
  },
  reducers: {
    setRecordId: (state, action: PayloadAction<string>) => {
      state.record.id = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.record.title = action.payload;
    },
    setEmoji: (state, action: PayloadAction<string>) => {
      state.record.emoji = action.payload;
    },
    setContent: (state, action: PayloadAction<string>) => {
      state.record.content = action.payload;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.record.color = action.payload;
    },
    isPinnedChange: (state) => {
      state.record.isPinned = !state.record.isPinned;
    },
    setRecord: (state, action: PayloadAction<PetMemoryRecord>) => {
      state.record = action.payload;
    },
    resetRecord: (state) => {
      state.record = initialState.record;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setRecordId,
  setTitle,
  setEmoji,
  setContent,
  setColor,
  isPinnedChange,
  setRecord,
  resetRecord,
  setIsLoading,
  setError,
} = memoryRecordSlice.actions;

export default memoryRecordSlice.reducer;
