import { createReducer } from "@reduxjs/toolkit";

import { setWeekDays } from "./actions";
import { getCurrentWeekDays } from "utils";

export const initState = {
  weekDays: getCurrentWeekDays() || [],
};

export default createReducer(initState, {
  [setWeekDays.type]: (state, action) => action.payload, 
});
