import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "../components/Home.jsx";
import About from "../components/AboutUs.jsx";
import Contact from "../components/Contact.jsx";
import Careers from "../components/Careers.jsx";
import Menu from "../components/Menu.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu/:menuName" element={<Menu />} />
    </Routes>
  );
};

export default AppRoutes;
