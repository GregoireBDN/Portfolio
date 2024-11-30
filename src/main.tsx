import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { validateEmailConfig } from "./utils/validateEnv";

// Validez les variables d'environnement au démarrage
validateEmailConfig();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
