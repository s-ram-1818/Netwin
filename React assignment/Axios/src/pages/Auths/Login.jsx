import React from "react";
import axiosInstance from "../../services/axios.instance";
import { useState, useContext } from "react";
import { AuthContext } from "./Auth.context.jsx";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const usersInfo = React.useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.elements.text.value;
    const password = e.target.elements.password.value;
    try {
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
      });

      usersInfo.setCustom(response.data);
      console.log("Login successful:", response.data);
      navigate("/login/info");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div>
      <h2 className="text-center my-5">Check User</h2>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <Outlet />
    </div>
  );
};

export default Login;
