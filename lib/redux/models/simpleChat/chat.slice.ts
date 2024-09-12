import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatMessage } from "@/lib/types";

export interface ChatState {
  isOpen: boolean;
  inputText: string;
  messages: ChatMessage[];
  isMessageLoading: boolean;
}

const initialState: ChatState = {
  isOpen: false,
  inputText: "",
  messages: [],
  isMessageLoading: false,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  selectors: {
    selectIsOpen: (state) => state.isOpen,
    selectInputText: (state) => state.inputText,
    selectMessages: (state) => state.messages,
    selectIsMessageLoading: (state) => state.isMessageLoading,
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
    setIsMessageLoading: (state, action: PayloadAction<boolean>) => {
      state.isMessageLoading = action.payload;
    },
  },
});

export const { isOpenChange, inputTextChange, addMessage, setIsMessageLoading } = chatSlice.actions;

export default chatSlice.reducer;
