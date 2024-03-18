import React from "react";

const Button = (props) => {
  return (
    <button>
      <div className="button-content">
        <img src={props.item && props.item.img}></img>
      </div>
    </button>
  );
};

export default Button;
