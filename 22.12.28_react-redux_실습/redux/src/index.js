import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// action
export const increase = () => {
  return { type: "INCREASE" };
};
export const discrease = () => {
  return { type: "DECREASE" };
};
// reducers
const count = 1;
const counterReducer = (state = count, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "SET_NUMBER":
      return action.payload;
    default:
      return state;
  }
};
// store
const store = createStore(counterReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
