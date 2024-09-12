import { ITelegramUser } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  currentUser: ITelegramUser | null;
}

const initialState: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  selectors: {
    selectCurrentUser: (state) => state.currentUser,
  },
  reducers: {
    setCurrentUser: (state, action: PayloadAction<ITelegramUser>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
