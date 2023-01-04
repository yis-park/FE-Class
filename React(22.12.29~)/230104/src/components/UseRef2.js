import { useRef } from "react";

function UseRef2(props) {
  const ref1 = useRef(null);
  const ref2 = useRef();

  const onColor = () => {
    ref1.current.style.backgroundColor = "orange";
    ref1.current.style.padding = "20px";
    ref1.current.style.color = "teal";

    ref2.current.style.backgroundColor = "tomato";
  };
  return (
    <>
      {/* DOM 연결 ref={} */}
      <p ref={ref1}>usdRef 연습</p>
      <p ref={ref2}>usdRef 연습</p>
      <button onClick={onColor}>확인</button>
    </>
  );
}

export default UseRef2;
