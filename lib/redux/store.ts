import { configureStore } from "@reduxjs/toolkit";
import { memoryRecordSlice } from "./memoryRecord.slice";
import { contextMenuSlice } from "./contextMenu.slice";
import { chatSlice } from "./chat.slice";

export const store = configureStore({
  reducer: {
    [memoryRecordSlice.name]: memoryRecordSlice.reducer,
    [contextMenuSlice.name]: contextMenuSlice.reducer,
    [chatSlice.name]: chatSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
