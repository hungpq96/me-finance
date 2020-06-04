import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { FocusStyleManager } from "@blueprintjs/core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import initStore from "store";
import App from "App";
import * as serviceWorker from "serviceWorker";

FocusStyleManager.onlyShowFocusOnTabs();

const { store, persistor } = initStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
