import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { menuName } = useParams();
  return (
    <div>
      <h1>Menu: {menuName}</h1>
    </div>
  );
};

export default Menu;
