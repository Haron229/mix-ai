import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatMessage } from "../types";

export interface ChatState {
  isOpen: boolean;
  inputText: string;
  messages: ChatMessage[];
}

const initialState: ChatState = {
  isOpen: false,
  inputText: "",
  messages: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  selectors: {
    selectIsOpen: (state) => state.isOpen,
    selectInputText: (state) => state.inputText,
    selectMessages: (state) => state.messages,
  },
  reducers: {
    isOpenChange: (state) => {
      state.isOpen = !state.isOpen;
    },
    inputTextChange: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { isOpenChange, inputTextChange, addMessage } = chatSlice.actions;

export default chatSlice.reducer;
