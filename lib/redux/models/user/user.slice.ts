import { ITelegramUser } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  currentUser: ITelegramUser | null;
}

const initialState: UserState = {
  currentUser: null,
  // currentUser: {
  //   id: 469503095,
  //   first_name: "Тест",
  //   last_name: "Тестов",
  //   username: "test",
  //   language_code: "ru",
  //   is_premium: false,
  //   photo_url: "https://telegram.org/img/t_logo.png",
  // }
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  selectors: {
    selectCurrentUser: (state) => state.currentUser,
    selectCurrentUserId: (state) => state.currentUser?.id ?? 0,
  },
  reducers: {
    setCurrentUser: (state, action: PayloadAction<ITelegramUser>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
