import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { smurfsReducer } from "./reducers/index";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
    smurfsReducer,
    applyMiddleware(thunk, logger)
  );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);
