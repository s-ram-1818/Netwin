import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/context.js";

const Comp2 = () => {
  const counter = useContext(CounterContext);
  return (
    <div>
      <h5>Here count is in comp2: {counter.count}</h5>
    </div>
  );
};

export default Comp2;
