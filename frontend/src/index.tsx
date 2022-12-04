import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./context/auth";
import App from "./Router";
import "./styles/base.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
