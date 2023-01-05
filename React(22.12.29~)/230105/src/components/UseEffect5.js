import { useEffect, useState } from "react";

function UseEffect5() {
  const [count, setCount] = useState(1);
  const [txt, setTxt] = useState(5);

  const changeInput = (e) => {
    const { value } = e.target;
    setTxt(+value); // input의 반환값은 문자열
  };

  useEffect(() => {
    console.log("실행");
    const timer = setInterval(() => {
      setCount((con) => con + txt);
      return () => {
        clearInterval(timer);
      };
    }, 2000);
  }, [txt]);

  return (
    <>
      <h1>입력한 값만큼 2초마다 증가</h1>
      <p>
        숫자 간격: <input type="text" value={txt} onChang={changeInput} />
      </p>
      <h2>{count}</h2>
    </>
  );
}

export default UseEffect5;
