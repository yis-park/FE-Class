import React, { useLayoutEffect, useRef, useState } from "react";

function UseEffect1(props) {
  const [count, setCount] = useState(0);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  function onColor() {
    setCount(count + 1);
    ref1.current.style.backgroundColor = "orange";
    ref2.current.style.backgroundColor = "tomato";
    ref3.current.style.backgroundColor = "hotpink";
  }

  /* 
  화면이 랜더링(새로고침 등) 될 때마다 실행
  useEffect(() => {
    console.log("useEffect");
    ref1.current.style.backgroundColor = "orange";
    ref2.current.style.backgroundColor = "tomato";
    ref3.current.style.backgroundColor = "hotpink";
  }); 
  */

  // 화면에 그려지기 전
  useLayoutEffect(() => {
    console.log("useEffect");
    ref1.current.style.backgroundColor = "orange";
    ref2.current.style.backgroundColor = "tomato";
    ref3.current.style.backgroundColor = "hotpink";
  });

  return (
    <div style={{ margin: 30 }}>
      <h1>useEffect</h1>
      <h2>count : {count}</h2>
      <p ref={ref1}>useEffect</p>
      <p ref={ref2}>useLayoutEffect</p>
      <p ref={ref3}>{count}결과</p>
      <button onClick={onColor}>카운트 + 컬러</button>
    </div>
  );
}

export default UseEffect1;
/* 
  useEffect
    주로 side effect(부수적인 일들)를 수행
    ㄴ 비동기 통신 요청 및 응답,  DOM 조작, props를 받아서 갱신할 때, 외부 라이브러리 등..
    화면에 그려진 후 실행

    class 새명 주기
    Mount: 컴포넌트 생성. 시작시
    Update: 컴포넌트 갱신. state값 변경
    Unmount : 컴포넌트 소멸. 종료시
    이 3개를 합친 것 -> useEffect

    useEffect( ()=>{ 실행문 }); 랜더링될 때마다 실행됨. 일반적으로 사용하지 않음

    useEffect( ()=>{ 실행문 }, [ ]); mount 한 번만 실행 [빈배열]

    useEffect( ()=>{ 실행문 }, [ state(props)]); 특정 props가 변경 될때 실행

    useEffect( ()=>{ 
      실행문 
      return () =>{ clean-up }
    }, [ state(props)]); mount 한 번만 실행 후 정리. 메모리 누수가 발생하지 않도록 정리(clean-up) 필요
*/
