import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import worker from "mocks/browser";
import store from "utils/store";

import "react-toastify/dist/ReactToastify.css";

import App from "./App";

worker.start().then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
                <ToastContainer />
            </React.StrictMode>
        </Provider>,
        document.getElementById("root")
    );
});
