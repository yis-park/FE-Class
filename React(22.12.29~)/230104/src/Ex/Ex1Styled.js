import styled, { keyframes } from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  margin: 50px auto;
  height: 20vh;
  width: ${(props) => (props.size ? props.size : "80vw")};
  border: 1px solid #000;
  overflow: hidden;
  h2 {
    font-family: "๋๋๊ณ ๋", sans-serif;
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
    content: "๐";
  }
  &.minus::after {
    content: "๐";
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
    // 0 ์ดํ, 10 ์ด์์ผ๋ก ์ปค์ง๋ฉด ๋ฒํผ ๋นํ์ฑํ
    <>
      {/* ์นด์ดํฐ 1์ฉ ์ฆ๊ฐ, 1์ฉ ๊ฐ์ */}
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
/* ์ธํฐ๋ท ๋ณด๊ณ  ํ๊ฑฐ
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
      {/* ์นด์ดํฐ 1์ฉ ์ฆ๊ฐ, 1์ฉ ๊ฐ์ 
      <Container>
        <h2>count: {count}</h2>
        <Button onClick={onIncrease}>โฒ</Button>
        <Button onClick={onDecrease}>โผ</Button>
      </Container>
    </>
  );
} */

export default Ex1Styled;
