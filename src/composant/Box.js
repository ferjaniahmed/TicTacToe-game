import React from "react";
import "./box.css";

const Box = ({ value, onClick }) => {
  const style = value === "x" ? "btn x" : "btn o";
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Box;
