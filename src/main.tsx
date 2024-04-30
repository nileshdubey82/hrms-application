import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Store from "./Redux/Store.tsx";
import { Provider } from "react-redux";
import { router } from "./Router/Router.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={Store}>
      {/* <RouterProvider router={router} /> */}
      <App />
    </Provider>
  </React.StrictMode>
);
