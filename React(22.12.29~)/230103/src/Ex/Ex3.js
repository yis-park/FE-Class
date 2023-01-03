import React, { useState } from "react";

function Ex3() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  function changeId(e) {
    const { value } = e.target;
    setId(value);
  }
  function changePw(e) {
    const { value } = e.target;
    setPw(value);
  }
  return (
    <div>
      <p>비밀번호의 수가 8자리 이하면 버튼 비활성화, 9자리 이상부터 활성화</p>
      <input type="text" value={id} onChange={changeId} />
      <input type="password" value={pw} onChange={changePw} />
      {/* 방법 1
      {pw.length >= 9 ? (
        <button>로그인</button>
      ) : (
        <button disabled>로그인</button>
      )} */}
      <button disabled={pw.length < 9}>로그인</button>
    </div>
  );
}

export default Ex3;
