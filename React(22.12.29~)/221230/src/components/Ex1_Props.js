// rsf(선언함수) rsc(표현식)

/* 
const Coffee = (props) => {
  return (
    <>
      <h3>
        주문한 커피는 {props.name}, 가격은 {props.price} 입니다.
      </h3>
    </>
  );
};

const Coffee = (props) => {
  // 구조분해할당
  const { name, price } = props;
  return (
    <>
      <h3>
        주문한 커피는 {name}, 가격은 {price} 입니다.
      </h3>
    </>
  );
}; 
*/

const Coffee = ({ name, price }) => {
  return (
    <>
      <h3>
        주문한 커피는 {name}, 가격은 {price} 입니다.
      </h3>
    </>
  );
};

function Ex1_Props() {
  return (
    <div style={{ border: "1px solid #000", width: "70vw" }}>
      <h1>props</h1>
      {/* 자식 컴포넌트 생성 후 각 속성(props) 할당 -> 아메리카노, 4000원 출력 / 카페라떼, 4500원 / 바닐라라떼, 5000원 출력 */}
      <Coffee name="아메리카노" price="4000원" />
      <Coffee name="카페라떼" price="4500원" />
      <Coffee name="바닐라라떼" price="5000원" />
    </div>
  );
}

export default Ex1_Props;
