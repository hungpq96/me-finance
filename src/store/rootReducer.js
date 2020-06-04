import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import transactionReducer from "apps/transactions/reducers";

const persistTransactionConfig = {
  key: "transaction",
  storage,
  blacklist: ["weekDays"],
};

const rootReducer = combineReducers({
  transaction: persistReducer(persistTransactionConfig, transactionReducer),
});

export default rootReducer;
