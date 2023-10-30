import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename={"SoYummy"}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
o;
