import { useState, useRef } from "react";
/* 
useRef();
  특정 값을 저장하기 위해 사용.
  특정 값이 변경되어도 렌더링이 일어나지 않음.
  .current 안에 값을 저장하기 때문에 
*/
function UseRef1() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("렌더링 +1");

  function incrementState() {
    setCount(count + 1);
  }
  function incrementRef() {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }

  return (
    <>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={incrementState}>useState</button>
      <button onClick={incrementRef}>useRef</button>
    </>
  );
}

export default UseRef1;
