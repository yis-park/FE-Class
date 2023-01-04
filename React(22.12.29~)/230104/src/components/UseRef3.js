import React, { useState, useRef } from "react";

function UseRef3(props) {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  // 가상 돔을 참조할 빈 객체로 생성
  const idRef = useRef(null);

  function getId(e) {
    const { value } = e.target;
    setUserId(value);
  }
  function getPw(e) {
    const { value } = e.target;
    setUserPw(value);
  }
  function onReset() {
    setUserId("");
    setUserPw("");

    // 렌더링이 되더라도 값을 기억하기 때문에 초기화시 지정 위치에서 커서 깜빡임
    idRef.current.focus();
  }

  return (
    <>
      <label>ID: </label>
      <input type="text" value={userId} onChange={getId} ref={idRef} />
      <br />
      <label>PW: </label>
      <input type="password" value={userPw} onChange={getPw} />
      <br />
      <button onClick={onReset}>reset</button>
      <hr />
      <h3>id: {userId}</h3>
      <h3>pw: {userPw}</h3>
    </>
  );
}

export default UseRef3;
