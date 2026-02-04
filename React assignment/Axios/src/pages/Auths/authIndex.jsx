import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Info from "./Info";

const AuthIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="info" element={<Info />} />
    </Routes>
  );
};

export default AuthIndex;
