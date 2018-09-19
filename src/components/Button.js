import React from "react";

const Button = props => {
  return <button className={props.className}>{props.caption}</button>;
};

export default Button;
