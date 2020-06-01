import { createAction } from "@reduxjs/toolkit";

import { SET_WEEKDAYS, TOGGLE_ITEM_EDITOR } from "./constants";

export const setWeekDays = createAction(SET_WEEKDAYS);
export const toggleItemEditor = createAction(TOGGLE_ITEM_EDITOR);
