import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "../components/Home.jsx";
import About from "../components/AboutUs.jsx";
import Contact from "../components/Contact.jsx";
import Careers from "../components/Careers.jsx";

import AppDev from "../components/Services/AppDev.jsx";
import Intelligence from "../components/Services/Intelligence.jsx";
import DigitalTransformation from "../components/Services/DigitalTransformation.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/services/appdev" element={<AppDev />} />
      <Route path="/services/intelligence" element={<Intelligence />} />
      <Route
        path="/services/digitaltransformation"
        element={<DigitalTransformation />}
      />
    </Routes>
  );
};

export default AppRoutes;
