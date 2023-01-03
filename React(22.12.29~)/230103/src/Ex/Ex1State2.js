import React, { useState } from "react";

function Ex1State2() {
  const [isChk, setIsChk] = useState(false);
  const onCheck = (e) => {
    const { checked } = e.target;
    setIsChk(checked);
  };
  return (
    <>
      <p
        style={{
          fontWeight: "bold",
        }}
      >
        <input type="checkbox" onChange={onCheck} checked={isChk} />
        {isChk ? "보임" : "숨김"}
        {/* 체크를 하면 보임 글자 출력 해제하면 숨김 글자 출력 */}
      </p>
      <hr />
      {/* 체크를 하면 박스박스 컬러 변경 */}
      {/* {isChk ? (
        <div
          style={{
            width: 300,
            height: 100,
            backgroundColor: "tomato",
          }}
        ></div>
      ) : null} */}
      {isChk && (
        <div
          style={{
            width: 300,
            height: 100,
            backgroundColor: "tomato",
          }}
        ></div>
      )}
    </>
  );
}

export default Ex1State2;
