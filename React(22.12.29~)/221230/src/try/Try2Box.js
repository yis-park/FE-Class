import React from "react";

function Try2Box({ width, heigth, bgcolor }) {
  return (
    <div
      style={{
        border: "1px solid #000",
        width: "50vw",
        height: "150px",
        backgroundColor: bgcolor,
      }}
    >
      <h2>
        {width}, {heigth}, {bgcolor}
      </h2>
    </div>
  );
}

export default Try2Box;
