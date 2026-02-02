import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routers/routes";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;
