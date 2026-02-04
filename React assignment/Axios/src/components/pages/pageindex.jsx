import { Route, Routes } from "react-router-dom";

import { Suspense } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
const PageIndex = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default PageIndex;
