import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  setInterval(currentTime, 1000);

  function currentTime() {
    const newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>

      <button onClick={decrease}>-</button>

      <div>
        <h2>{time}</h2>
        <button onClick={currentTime}>Get Time</button>
      </div>
    </div>
  );
}

export default App;
