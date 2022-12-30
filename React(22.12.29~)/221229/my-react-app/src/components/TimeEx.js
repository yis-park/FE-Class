import React from "react";

function TimeEx() {
  return (
    <div style={{ border: "1px solid #000", padding: 10, width: "50vw" }}>
      <h1>현재 시각</h1>
      <h2>지금 시간은 {new Date().toLocaleTimeString()}입니다.</h2>
    </div>
  );
}

export default TimeEx;
