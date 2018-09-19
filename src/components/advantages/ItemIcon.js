import React from "react";

const ItemIcon = props => {
  return (
    <img src={props.path} alt={props.descr} className="advantages__item-icon" />
  );
};

export default ItemIcon;
