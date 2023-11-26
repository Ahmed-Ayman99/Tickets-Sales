import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";

import "./index.css";

import App from "./App.jsx";
import i18n from "./i18n.js";
import { DirectionProvider } from "./context/DirectionContext.jsx";
import { DarkModeProvider } from "./context/DarkmodeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <DirectionProvider>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </DirectionProvider>
    </I18nextProvider>
  </React.StrictMode>
);
