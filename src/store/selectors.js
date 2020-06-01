import { createSelector } from "reselect";

import { toDate, isWithinWeek } from "utils";

const getTransaction = (state) => state.transaction;

export const getWeekDays = createSelector(getTransaction, (state) => ({
  weekDays: (state.weekDays || []).map((day) => toDate(day)),
}));

export const getItemEditorOpenStatus = createSelector(
  getTransaction,
  (state) => ({
    isItemEditorOpen: state.isItemEditorOpen,
  })
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
