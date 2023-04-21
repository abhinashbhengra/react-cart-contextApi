import { useState } from "react";
import { usePersistentState } from "react-persistent-state";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount, unpersist] = usePersistentState(0);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={unpersist}>Clear Count</button>
    </div>
  );
}

export default App;
