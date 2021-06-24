import React, { useState } from "react";
import CounterClassComponent from "./CounterClassComponent";
import CounterFunctionalComponent from "./CounterFunctionalComponent";
import Ex1style from "./components/ex1_style";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        ADD
      </button>
      <CounterClassComponent />
      <CounterFunctionalComponent />
      <Ex1style />
    </div>
  );
};

export default App;
