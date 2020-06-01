import { createReducer } from "@reduxjs/toolkit";

import { setWeekDays, toggleItemEditor } from "./actions";
import { getCurrentWeekDays } from "utils";

export const initState = {
  weekDays: getCurrentWeekDays() || [],
  isItemEditorOpen: false,
};

export default createReducer(initState, {
  [setWeekDays.type]: (state, action) => action.payload,
  [toggleItemEditor.type]: (state) => {
    state.isItemEditorOpen = !state.isItemEditorOpen;
    return state;
    // ({
    //   ...state,
    //   isItemEditorOpen: !state.isItemEditorOpen,
    // })
  },
});
