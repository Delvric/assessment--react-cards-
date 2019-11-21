import React from "react";
import "./CardGroup.css";

const CardGroup = function(props){ 
    return <div className="cardGroup">{props.children}</div>;
};
export default CardGroup;