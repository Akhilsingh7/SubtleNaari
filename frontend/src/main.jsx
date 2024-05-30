import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AllProductProvider } from "./context/AllProductContext.jsx";
import { CollectionProvider } from "./context/CollectionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AllProductProvider>
        <CollectionProvider>
          <App />
        </CollectionProvider>
      </AllProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
