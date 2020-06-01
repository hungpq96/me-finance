import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { FocusStyleManager } from "@blueprintjs/core";
import { Provider } from "react-redux";

import store from "store";
import App from "App";
import * as serviceWorker from "serviceWorker";

FocusStyleManager.onlyShowFocusOnTabs();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
