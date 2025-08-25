import React from "react";

const Line = ({
  color = "#6a6a6a",
  width = "90%", // responsive width
  maxWidth = "1280px", // limit on large screens
  height = "1px",
  margin = "20px auto",
}) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: width,
        maxWidth: maxWidth,
        height: height,
        margin: margin,
      }}
    />
  );
};

export default Line;
