import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./components/App";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "./components/App";
import './main.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter basename={"SoYummy"}>
        <App />
      </BrowserRouter>

      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={"SoYummy"}>
          <App />
        </BrowserRouter>
      </PersistGate>

    </Provider>
  </React.StrictMode>
);
