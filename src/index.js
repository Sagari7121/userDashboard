import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={1}
      autoHideDuration={5000}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
