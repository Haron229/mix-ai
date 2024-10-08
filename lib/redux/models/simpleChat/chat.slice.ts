import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatMessage } from "@/lib/types";

export interface ChatState {
  isInputFocused: boolean;
  inputText: string;
  messages: ChatMessage[];
  isMessageLoading: boolean;
}

const initialState: ChatState = {
  isInputFocused: false,
  inputText: "",
  messages: [],
  isMessageLoading: false,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  selectors: {
    selectIsInputFocused: (state) => state.isInputFocused,
    selectInputText: (state) => state.inputText,
    selectMessages: (state) => state.messages,
    selectIsMessageLoading: (state) => state.isMessageLoading,
  },
  reducers: {
    setIsInputFocused: (state, action: PayloadAction<boolean>) => {
      state.isInputFocused = action.payload;
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

export const {
  setIsInputFocused,
  inputTextChange,
  addMessage,
  setIsMessageLoading,
} = chatSlice.actions;

export default chatSlice.reducer;
