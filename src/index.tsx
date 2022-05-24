import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ScopedCssBaseline } from "@mui/material";

import store from "./store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <App />
    </ScopedCssBaseline>
  </React.StrictMode>
);
// expose store when run in Cypress
// @ts-ignore
if (window.Cypress) {
  // @ts-ignore
  window.store = store;
}
