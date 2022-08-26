import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { reducer } from "./reducers/reducer";
import { Provider } from "react-redux";

const store = createStore(reducer)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
