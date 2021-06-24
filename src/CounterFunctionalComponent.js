import React, { useState } from "react";

const CounterFunctionalComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>Counter Functional Counter</h1>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>ADD</button>
    </div>
  );
};

export default CounterFunctionalComponent;
