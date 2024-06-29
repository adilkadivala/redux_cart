import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { ItemStorage } from "./store/ProductData";    This is contextApi provider
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux"; // This is redux provider
import Store from "./store/Store";
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ItemStorage> */}
    <Provider store={Store}>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Provider>
    {/* </ItemStorage> */}
  </React.StrictMode>
);

reportWebVitals();
