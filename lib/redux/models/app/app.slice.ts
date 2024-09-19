import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Sections {
  Main,
  Chat,
  Memory,
  Profile,
  Settings,
  MemoryRecord,
}

export interface RunningAppState {
  platform: string;
  currentSection: Sections;
  previousSection: Sections[];
}

const initialState: RunningAppState = {
  platform: "",
  currentSection: Sections.Main,
  previousSection: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  selectors: {
    selectPlatform: (state) => state.platform,
    selectCurrentSection: (state) => state.currentSection,
    selectPreviousSection: (state) => state.previousSection,
  },
  reducers: {
    setPlatform: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
    },
    setCurrentSection: (state, action: PayloadAction<Sections>) => {
      action.payload === Sections.Main
        ? (state.previousSection = [])
        : state.previousSection.push(state.currentSection);
      state.currentSection = action.payload;
    },
    reducePreviousSection: (state) => {
      state.currentSection = state.previousSection.pop() ?? Sections.Main;
    },
  },
});

export const { setCurrentSection, reducePreviousSection, setPlatform } =
  appSlice.actions;

export default appSlice.reducer;
