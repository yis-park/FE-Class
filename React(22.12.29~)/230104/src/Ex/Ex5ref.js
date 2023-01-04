import React, { useState } from "react";

function Ex5ref({ changeInput }) {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userEmail, setEmail] = useState("");

  function onChange(e) {
    const { value } = e.target;
    setId(value);
  }

  return (
    <>
      {/* 취소 후 커서 id에 두기 */}
      id : <input type="text" value="" name="id" onChange={changeInput} />
      <br />
      pw : <input type="password" name="pw" onChange={changeInput} />
      <br />
      email : <input type="text" name="email" onChange={changeInput} />
      <br />
      <button>취소</button>
      <hr />
      <h3>
        id: {userId} / pw: {userPw} / email: {userEmail}
      </h3>
    </>
  );
}

export default Ex5ref;
