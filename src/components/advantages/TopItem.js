import React from "react";

const TopItem = props => {
  return (
    <div
      className={`advantages__item ${props.position} ${
        props.position === "top" ? "col-lg-6" : "col-lg-4"
      }`}
    >
      {props.children}
    </div>
  );
};

export default TopItem;
