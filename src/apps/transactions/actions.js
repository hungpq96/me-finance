import { createAction } from "@reduxjs/toolkit";

import {
  SET_WEEKDAYS,
  TOGGLE_ITEM_EDITOR,
  ADD_TRANSACTION,
  EDIT_TRANSACTION,
  REMOVE_TRANSACTION,
} from "./constants";

export const setWeekDays = createAction(SET_WEEKDAYS);
export const toggleItemEditor = createAction(TOGGLE_ITEM_EDITOR);
export const addTransaction = createAction(ADD_TRANSACTION);
export const editTransaction = createAction(EDIT_TRANSACTION);
export const removeTransaction = createAction(REMOVE_TRANSACTION);
