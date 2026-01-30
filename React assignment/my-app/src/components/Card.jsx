import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
