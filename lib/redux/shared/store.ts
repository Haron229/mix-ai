import { configureStore } from "@reduxjs/toolkit";
import { memoryRecordSlice } from "../models/memoryRecord/memoryRecord.slice";
import { contextMenuSlice } from "../models/conextMenu/contextMenu.slice";
import { chatSlice } from "../models/simpleChat/chat.slice";
import { baseApi } from "./api";
import { useDispatch, useSelector, useStore } from "react-redux";

export const store = () =>
  configureStore({
    reducer: {
      [memoryRecordSlice.name]: memoryRecordSlice.reducer,
      [contextMenuSlice.name]: contextMenuSlice.reducer,
      [chatSlice.name]: chatSlice.reducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppStore = useStore.withTypes<AppStore>();
