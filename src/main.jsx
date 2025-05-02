import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/global.css";
import App from "./App.jsx";
import ErrorBoundary from "./assets/ErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorBoundary>
);
