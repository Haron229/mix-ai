import { createSlice } from "@reduxjs/toolkit";

export interface ContextMenuState {
  isOpen: boolean;
}

const initialState: ContextMenuState = {
  isOpen: false,
};

export const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState,
  selectors: {
    selectIsOpen: (state) => state.isOpen,
  },
  reducers: {
    isOpenChange: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { isOpenChange } = contextMenuSlice.actions;

export default contextMenuSlice.reducer;
