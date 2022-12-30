import React from "react";

function Ex3() {
  const title = {
    backgroundColor: "lightskyblue",
    fontSize: 30,
    fontWeight: "nomal",
    color: "#333",
  };
  return (
    <>
      <h2>Ex3.js 문서</h2>
      <h3 style={{ color: "tomato", fontSize: "16px" }}>스타일 직접 적용</h3>
      <h4 style={title}>스타일 변수로 적용</h4>
    </>
  );
}

export default Ex3;
