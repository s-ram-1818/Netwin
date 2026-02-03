import { use, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMemo } from "react";

const nums = new Array(10000000).fill(0).map((_, i) => {
  return { index: i, ismagical: i === 9999999 };
});

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);
  const [magicalNumber, setMagicalNumber] = useState(nums[0]);

  // expensive computation
  // const magicalNumber = numbers.find((num) => num.ismagical);

  // memoized computation
  // const magicalNumber = useMemo(
  //   () => numbers.find((num) => num.ismagical === true),
  //   [],
  // );

  // using useEffect to perform the computation after initial render
  useEffect(() => {
    console.log("Finding magical number...");
    const found = numbers.find((num) => num.ismagical === true);
    setMagicalNumber(found);
    console.log("Magical number found:", found);
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">magical number is {magicalNumber.index}</p>
    </>
  );
}

export default App;
