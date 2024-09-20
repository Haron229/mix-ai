import {
  reducePreviousSection,
  Sections,
  setCurrentSection,
} from "@/lib/redux/models/app/app.slice";
import { AppThunk } from "@/lib/redux/shared/store";
import { memoryRecordApi } from "../memoryRecord/api";
import { resetRecord } from "../memoryRecord/memoryRecord.slice";

export const changeSection =
  (section: Sections): AppThunk<void> =>
  (dispatch) => {
    if (section === Sections.MemoryRecord) {
      resetRecord();
    }

    dispatch(setCurrentSection(section));
  };

export const previousSection =
  (): AppThunk<void> => async (dispatch, getState) => {
    const state = getState();
    const currentSection = state.app.currentSection;

    if (currentSection === Sections.MemoryRecord) {
      const record = state.memoryRecord.record;
      const userId = state.currentUser.currentUser?.id;

      if (userId)
        await dispatch(
          memoryRecordApi.endpoints.saveMemoryRecord.initiate({
            ...record,
            userId,
          })
        )
          .unwrap()
          .then(() => {
            dispatch(resetRecord());
            dispatch(reducePreviousSection());
          });

      return;
    }

    dispatch(reducePreviousSection());
  };
