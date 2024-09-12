import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Sections {
  Main,
  Chat,
  Memory,
  Profile,
  Settings,
  NewMemoryRecord,
}

export interface RunningAppState {
  currentSection: Sections;
  previousSection: Sections;
}

const initialState: RunningAppState = {
  currentSection: Sections.Main,
  previousSection: Sections.Main,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  selectors: {
    selectCurrentSection: (state) => state.currentSection,
    selectPreviousSection: (state) => state.previousSection,
  },
  reducers: {
    setCurrentSection: (state, action: PayloadAction<Sections>) => {
      state.previousSection = state.currentSection;
      state.currentSection = action.payload;
    },
  },
});

export const { setCurrentSection } = appSlice.actions;

export default appSlice.reducer;
