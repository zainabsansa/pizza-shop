import React from "react";

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.img} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <span>${props.price}</span>
      </div>
    </div>
  );
}

export default Pizza;
