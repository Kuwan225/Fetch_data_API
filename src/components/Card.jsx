import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        padding: "10px",
        margin: "10px",
        backgroundColor: "pink",
        borderRadius: "10px",
        boxShadow: "2px 2px 5px black",
      }}
    >
      <img style={{ width: "100px" }} src={props.image} />
    </div>
  );
};

export default Card;
