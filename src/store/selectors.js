import { createSelector } from "reselect";

import { toDate } from "utils";

const getTransaction = state => state.transaction;

export const getWeekDays = createSelector(
  getTransaction,
  state => ({
    weekDays: (state.weekDays || []).map(day => toDate(day)),
  }),
);

export const getItemEditorOpenStatus = createSelector(
  getTransaction,
  state => ({
    isItemEditorOpen: state.isItemEditorOpen,
  }),
)
