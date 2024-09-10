import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatMessage } from "../types";

export interface ChatState {
  inputText: string;
  messages: ChatMessage[];
}

const initialState: ChatState = {
  inputText: "",
  messages: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  selectors: {
    selectInputText: (state) => state.inputText,
    selectMessages: (state) => state.messages,
  },
  reducers: {
    inputTextChange: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { inputTextChange, addMessage } = chatSlice.actions;

export default chatSlice.reducer;
