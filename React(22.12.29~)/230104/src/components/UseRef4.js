import { useRef, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  margin: 30px;
  transition: 0.5s;
  text-align: center;
`;
function UseRef4() {
  let [num, setNum] = useState(0); // 연산할 때 const 상수는 쓸 수 없음. let 으로 변수설정 해주기
  // 가상돔을 참조할 빈 객체 생성
  const boxRef = useRef(null);

  function prevRotate() {
    setNum(--num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  }
  function nextRotate() {
    setNum(++num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  }

  return (
    <>
      <button onClick={prevRotate}>&lt;-</button>
      <button onClick={nextRotate}>-&gt;</button>

      <Box ref={boxRef}>box</Box>
    </>
  );
}

export default UseRef4;
