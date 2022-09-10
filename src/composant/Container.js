import React from "react";
import Box from "./Box";
import "./container.css";

const Container = ({ container, onClick }) => {
  return (
    <div className="container">
      {container.map((value, index) => {
        return (
          <Box
            value={value}
            onClick={() => {
              !value && onClick(index);
            }}
          />
        );
      })}
    </div>
  );
};
export default Container;
