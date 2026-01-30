import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Comp1 from "./components/comp1.jsx";
import { CounterContext } from "./context/context.js";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterContext.Provider value={{ count }}>
        <Comp1 />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </CounterContext.Provider>
    </>
  );
}

export default App;
