import React, { useState } from "react";

function Ex1State1() {
  const [isChk, setIsChk] = useState(false);
  const onCheck = (e) => {
    const { checked } = e.target;
    setIsChk(checked);
  };
  return (
    <>
      <h2>오늘 할 일</h2>
      <div
        style={{
          fontWeight: "bold",
          color: isChk ? "tomato" : "maroon",
          textDecoration: isChk ? "line-thruough" : "none",
        }}
      >
        <input type="checkbox" onChange={onCheck} checked={isChk} />
        리액트 공부하기
      </div>
    </>
  );
}

export default Ex1State1;
