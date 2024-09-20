import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContextMenuState {
  isOpen: boolean;
  id: string;
}

const initialState: ContextMenuState = {
  isOpen: false,
  id: "",
};

export const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState,
  selectors: {
    selectIsOpen: (state) => state.isOpen,
    selectId: (state) => state.id,
  },
  reducers: {
    isOpenChange: (state, action: PayloadAction<string>) => {
      state.isOpen = !state.isOpen;
      state.id = action.payload;
    },
  },
});

export const { isOpenChange } = contextMenuSlice.actions;

export default contextMenuSlice.reducer;
