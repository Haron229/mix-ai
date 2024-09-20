import { configureStore, ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { memoryRecordSlice } from "../models/memoryRecord/memoryRecord.slice";
import { contextMenuSlice } from "../models/conextMenu/contextMenu.slice";
import { chatSlice } from "../models/simpleChat/chat.slice";
import { baseApi } from "./api";
import { useDispatch, useSelector, useStore } from "react-redux";
import { appSlice } from "../models/app/app.slice";
import { userSlice } from "../models/user/user.slice";

export const store = () =>
  configureStore({
    reducer: {
      [appSlice.name]: appSlice.reducer,
      [userSlice.name]: userSlice.reducer,
      [memoryRecordSlice.name]: memoryRecordSlice.reducer,
      [contextMenuSlice.name]: contextMenuSlice.reducer,
      [chatSlice.name]: chatSlice.reducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: true }).concat(baseApi.middleware), // thunk?
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  UnknownAction
>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppStore = useStore.withTypes<AppStore>();
