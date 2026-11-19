
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LanguageProvider } from "./contexts/LanguageContext";
//import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
