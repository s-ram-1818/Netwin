import React from "react";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import AppDev from "./AppDev.jsx";
import Intelligence from "./Intelligence.jsx";
import DigitalTransformation from "./DigitalTransformation.jsx";

const index = () => {
  return (
    <Routes>
      <Route path="/services/appdev" element={<AppDev />} />
      <Route path="/services/intelligence" element={<Intelligence />} />
      <Route
        path="/services/digitaltransformation"
        element={<DigitalTransformation />}
      />
    </Routes>
  );
};

export default index;
