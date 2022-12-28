import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, discrease } from "./index.js";

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const plusNum = () => {
    dispatch(increase());
  };

  const minusNum = () => {
    dispatch(discrease());
  };

  return (
    <div className="container">
      <h1>{`Count: ${state}`}</h1>
      <div>
        <button className="plusBtn" onClick={plusNum}>
          +
        </button>
        <button className="minusBtn" onClick={minusNum}>
          -
        </button>
      </div>
    </div>
  );
}
