import React from "react";
import { Link } from "react-router-dom";

const Detail = (props) => {
  const { image, title, desc } = props;
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "pink",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "2px 2px 5px black",
      }}
    >
      <Link to={"/"}>
        <h4
          className="back"
          style={{
            position: "absolute",
            backgroundColor: "aqua",
            padding: "5px 10px",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px black",
          }}
        >
          Back
        </h4>
      </Link>

      <img src={image} alt="" style={{ width: "300px", marginTop: "50px" }} />
      <div className="text" style={{ margin: "0 30px" }}>
        <h1 style={{ textAlign: "center", fontSize: "44px" }}>{title}</h1>
        <hr />
        <p style={{ fontSize: "20px" }}>{desc}</p>
      </div>
    </div>
  );
};

export default Detail;
