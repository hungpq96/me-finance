import { createReducer } from "@reduxjs/toolkit";

import {
  setWeekDays,
  toggleItemEditor,
  addTransaction,
  editTransaction,
  removeTransaction,
} from "./actions";
import { getCurrentWeekDays, toMinimalDate } from "utils";

export const initState = {
  weekDays: getCurrentWeekDays().map(toMinimalDate),
  itemEditorOpeningWithDay: null,
  itemEditor: {
    isOpening: false,
    openingDay: null,
  },
  transactions: [],
};

export default createReducer(initState, {
  [setWeekDays.type]: (state, action) => {
    const { weekDays } = action.payload;
    state.weekDays = weekDays;
  },
  [toggleItemEditor.type]: (state, action) => {
    const { day } = action.payload || {};
    state.itemEditor.isOpening = !state.itemEditor.isOpening;
    state.itemEditor.openingDay = day;
  },
  [addTransaction.type]: (state, action) => {
    state.transactions.push(action.payload);
  },
  [editTransaction.type]: (state, action) => {
    const { name, price, note, id } = action.payload;
    const currentTransactionIdx = state.transactions.findIndex(
      (trans) => trans.id === id
    );

    if (currentTransactionIdx !== -1) {
      const currentTransaction = state.transactions[currentTransactionIdx];
      state.transactions[currentTransactionIdx].name =
        name || currentTransaction.name;
      state.transactions[currentTransactionIdx].price =
        price || currentTransaction.price;
      state.transactions[currentTransactionIdx].note =
        note || currentTransaction.note;
    }
  },
  [removeTransaction.type]: (state, action) => {
    const { id } = action.payload;

    const currentTransactionIdx = state.transactions.findIndex(
      (trans) => trans.id === id
    );

    if (currentTransactionIdx !== -1) {
      state.transactions.splice(currentTransactionIdx, 1);
    }
  },
});
