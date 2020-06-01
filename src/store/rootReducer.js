import { combineReducers } from "@reduxjs/toolkit";

import transactionReducer from "apps/transactions/reducers";

const rootReducer = combineReducers({
  transaction: transactionReducer,
});

export default rootReducer;
