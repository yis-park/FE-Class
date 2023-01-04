import styled, { keyframes } from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  margin: 50px auto;
  height: 20vh;
  width: ${(props) => (props.size ? props.size : "80vw")};
  border: 1px solid #000;
  overflow: hidden;
  h2 {
    font-family: "나눔고딕", sans-serif;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
  }
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  margin: 10px 5px 0;
  float: left;
  padding: 20px;
  text-align: center;
  font-size: 3rem;
  color: tomato;
  &:hover {
    background-color: tomato;
  }
  &.plus::after {
    content: "👍";
  }
  &.minus::after {
    content: "👎";
  }
  &:disabled {
    background-color: #333;
    cursor: not-allowed;
    opacity: 0.4;
    filter: grayscale(50%);
  }
`;

function Ex1Styled(props) {
  const [count, setCount] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);

  const increment = () => {
    setCount(count <= max ? max : count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    // 0 이하, 10 이상으로 커지면 버튼 비활성화
    <>
      {/* 카운터 1씩 증가, 1씩 감소 */}
      <Container>
        <h2>count: {count}</h2>
        <Button
          className="plus"
          onClick={increment}
          disabled={count === max}
        ></Button>
        <Button
          className="minus"
          onClick={decrement}
          disabled={count === min}
        ></Button>
      </Container>
    </>
  );
}
/* 인터넷 보고 한거
function Ex1Styled(props) {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      {/* 카운터 1씩 증가, 1씩 감소 
      <Container>
        <h2>count: {count}</h2>
        <Button onClick={onIncrease}>▲</Button>
        <Button onClick={onDecrease}>▼</Button>
      </Container>
    </>
  );
} */

export default Ex1Styled;
