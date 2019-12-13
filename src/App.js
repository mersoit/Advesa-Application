import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";
import { Transitioner } from "./components/Transitioner";

class App extends React.Component {
  render() {
    return (
      <Counter>
        {state => (
          <div>
            <h1>The count is: {state.count}</h1>
          </div>
        )}
      </Counter>
    );
  }
}

export default App;
