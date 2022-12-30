import React from "react";
import Ex2Sub from "../components/Ex2Sub";

function Try1Sub({ name, email, tell, color, bgcolor, done }) {
  return (
    <div
      style={{
        border: `3px solid ${color}`,
        marginBottom: 10,
        padding: 10,
        backgroundColor: bgcolor,
        color: "#333",
      }}
    >
      <h2>{name}</h2>
      <ul>
        <li>이메일 :{email}</li>
        <li>전화 :{tell}</li>
        <li>색상 :{color}</li>
        <li>배경색 :{bgcolor}</li>
        <li>확인 : {done ? "확인" : "취소"}</li>
      </ul>
    </div>
  );
}

// 초기값 설정. 선택사항(작성해도, 안해도 됨)
// 자식컴포넌트.defaultProps = { props명 : 초기값 }
Try1Sub.defaultProps = {
  name: "이름",
  email: "이메일",
  tell: "연락처",
  color: "#999",
  bgcolor: "#efefef",
  done: false,
};
export default Try1Sub;
