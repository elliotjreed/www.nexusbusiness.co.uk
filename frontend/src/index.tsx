import * as React from "react";
import { render } from "react-dom";

import { App } from "./components/App";
import "./assets/scss/app.scss";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", (): void => {
    navigator.serviceWorker.register("/service-worker.js").catch();
  });
}

const rootEl: Element = document.getElementById("root");

render(<App />, rootEl);
