import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MemoryRecordState {
  title: string;
  emoji: string;
  content: string;
  isPinned: boolean;
}

const initialState: MemoryRecordState = {
  title: "Без названия",
  emoji: "",
  content: "",
  isPinned: false,
};

export const memoryRecordSlice = createSlice({
  name: "memoryRecord",
  initialState,
  selectors: {
    selectTitle: (state) => state.title,
    selectEmoji: (state) => state.emoji,
    selectContent: (state) => state.content,
    selectIsPinned: (state) => state.isPinned,
  },
  reducers: {
    titleChange: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    emojiChange: (state, action: PayloadAction<string>) => {
      state.emoji = action.payload;
    },
    contentChange: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    isPinnedChange: (state) => {
      state.isPinned = !state.isPinned;
    },
  },
});

export const { titleChange, emojiChange, contentChange, isPinnedChange } =
  memoryRecordSlice.actions;

export default memoryRecordSlice.reducer;
