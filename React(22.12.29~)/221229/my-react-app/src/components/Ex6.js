import React from "react";

function Ex6() {
  const border = { border: "1px solid #000", padding: 10, width: 200 };
  const done1 = true;
  const done2 = false;
  const done3 = undefined;
  return (
    <div>
      <h3>삼항연산자</h3>
      <p style={border}>
        {done1 === true ? <button>참 버튼</button> : <button>거짓 버튼</button>}
      </p>
      <h3>논리연산자 &&</h3>
      <p style={border}>{done1 && <strong> A,B 조건 모두 참인 결과</strong>}</p>

      <h3>논리연산자 ||</h3>
      <h4>
        - A의 조건이 참인 경우 뒤의 조건까지 읽지 않아도 참이기 때문에 멈춤
      </h4>
      <p style={border}>{done1 || <strong> A조건이 거짓인 경우</strong>}</p>
      <p style={border}>{done2 || <strong> A조건이 거짓인 경우</strong>}</p>

      <h3>논리연산자 undefined ||</h3>
      <p style={border}>
        {done3 || <strong> 내용을 찾을 수 없습니다.</strong>}
      </p>
    </div>
  );
}

export default Ex6;
