import styled from "styled-components";
import { useRef, useState } from "react";

const Container = styled.div`
  margin: 30;
  border: 1px solid #000;
  width: ${(props) => (props.width ? props.width : "80vw")};
`;
const Button = styled.button`
  border: 1px solid #000;
  border-radius: 20px;
  background-color: pink;
  padding: 4px 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

function UseRef1() {
  const idNum = useRef(1);
  const [data, setData] = useState([]);

  // 문자열->배열 반환
  const coffee =
    "아메리카노, 카페라떼, 바닐라라떼, 에스프레소, 카페모카, 디카페인, 아인슈페너, 콜드브루, 플랫화이트, 드립커피".split(
      ","
    );

  function onPrint() {
    const ran = Math.trunc(Math.random() * coffee.length);
    setData([
      ...data,
      {
        id: idNum.current++,
        name: coffee[ran],
      },
    ]);
    // id: idNum.current++;
  }
  return (
    <Container>
      <Button onClick={onPrint}>출력</Button>
      <hr />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} : {item.name}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default UseRef1;
