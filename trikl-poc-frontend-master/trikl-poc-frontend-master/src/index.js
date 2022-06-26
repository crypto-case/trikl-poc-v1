import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl={process.env.REACT_APP_SERVER_URL}
      appId={process.env.REACT_APP_APP_ID}
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>
);
