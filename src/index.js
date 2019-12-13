import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Transitioner from "./components/Transitioner";
import * as serviceWorker from "./serviceWorker";
import { reducer } from "./reducers/reducer.js";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <Transitioner />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
