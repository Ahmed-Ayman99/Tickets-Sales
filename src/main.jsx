import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";

import "./index.css";

import App from "./App.jsx";
import i18n from "./i18n.js";
import { DirectionProvider } from "./context/DirectionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <DirectionProvider>
        <App />
      </DirectionProvider>
    </I18nextProvider>
  </React.StrictMode>
);
