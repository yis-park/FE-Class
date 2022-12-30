/* 
  (props)
  컴포넌트에 전달할 정보를 담고 있는 자바스크립트 객체이자
  리액트 컴포넌트 속성
  부모 컴포넌트 -> 자식 컴포넌트로 단방향 데이터 바인딩(컴포넌트 전달)
  
  <자식 컴포넌트 props = 전달값 />
  전달값: {숫자}, '문자', {논리연산}, {state}, {function} ...


  
  특징
  읽기 전용
  컴포넌트의 속성을 지정해 주면 각 속성이 하나의 객체로 모여 컴포넌트를 정의한 함수의 첫 번째 파라미터로 전달
  상위 컴포넌트에서 하위 컴포넌트로 데이터(props)가 흐름
  컴포넌트에서는 props 바꿀 수 없음
  같은 props에 대해 항상 같은 결과를 리턴.

*/

// 컴포넌트 생성
// props = { name: '아메리카노'} 객체 형태로 받아오기 때문에 객체 방식으로 읽음
const Coffee = (props) => {
  return (
    <>
      <h3>{props.name} 컴포넌트</h3>
    </>
  );
};

// 구조 분해, 비구조할당
const Tea = (props) => {
  const { name } = props;
  return (
    <>
      <h3>{name} 컴포넌트</h3>
    </>
  );
};

// 실제 가장 많이 사용하는 방법 (구조분해)
const Drink = ({ name }) => {
  return (
    <>
      <h3>{name} 컴포넌트</h3>
    </>
  );
};

const Ex7_props = () => {
  return (
    <div>
      {/* 컴포넌트: Coffee, Tea, Drink */}

      {/* <자식 컴포넌트 속성=값 /> */}
      <Coffee name="아메리카노" />

      <Tea name="페퍼민트차" />
      <Drink name="자몽에이드" />
    </div>
  );
};

export default Ex7_props;
