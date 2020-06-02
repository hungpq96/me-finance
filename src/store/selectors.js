import { createSelector } from "reselect";

import { toDate, isWithinWeek } from "utils";

const getTransaction = (state) => state.transaction;

export const getWeekDays = createSelector(getTransaction, (state) => ({
  weekDays: state.weekDays.map(date => toDate(date, "YYYYMMDD")),
}));

export const getItemEditorState = createSelector(
  getTransaction,
  (state) => ({
    isOpening: state.itemEditor.isOpening,
    openingDay: state.itemEditor.openingDay,
  }),
);

export const getTransactions = createSelector(getTransaction, (state) => ({
  transactions: state.transactions,
}));

export const getWeeklyTransactions = createSelector(
  getTransaction,
  (state) => ({
    transactions:
      state.transactions.filter((trans) => isWithinWeek(trans.timestamp)) || [],
  })
);
