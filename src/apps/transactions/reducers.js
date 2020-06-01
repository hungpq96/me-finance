import { createReducer } from "@reduxjs/toolkit";

import {
  setWeekDays,
  toggleItemEditor,
  addTransaction,
  editTransaction,
  removeTransactrion,
} from "./actions";
import { getCurrentWeekDays } from "utils";

export const initState = {
  weekDays: getCurrentWeekDays() || [],
  isItemEditorOpen: false,
  transactions: [],
};

export default createReducer(initState, {
  [setWeekDays.type]: (state, action) => {
    const { weekDays } = action.payload;
    state.weekDays = weekDays;
  },
  [toggleItemEditor.type]: (state) => {
    state.isItemEditorOpen = !state.isItemEditorOpen;
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
  [removeTransactrion.type]: (state, action) => {
    const { name, timestamp } = action.payload;

    const currentTransactionIdx = state.transactions.findIndex(
      (trans) => trans.name === name && trans.timestamp === timestamp
    );

    if (currentTransactionIdx !== -1) {
      state.transactions.splice(currentTransactionIdx, 1);
    }
  },
});
