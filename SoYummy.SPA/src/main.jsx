import React from "react";
import { createRoot } from "react-dom/client"; // Zmiana tutaj
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container); // Zmiana tutaj

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/SoYummy">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { store, persistor } from "./redux/store";
// import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import { App } from "./components/App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <BrowserRouter basename={"SoYummy"}>
//           <App />
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
