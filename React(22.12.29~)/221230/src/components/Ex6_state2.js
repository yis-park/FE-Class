import React, { useState } from "react";

const Ex6_state2 = () => {
  const [isShow, setIsShow] = useState(false);
  const onShow = () => {
    setIsShow(true);
  };
  const onHide = () => {
    setIsShow(false);
  };
  const onToggle = () => {
    setIsShow(!isShow);
    // !:not, !true:false, !false:true
  };
  return (
    // 1. 버튼을 클릭하면 onShow 함수 호출
    // 2. 함수실행(isShow 상태 값이 setIsShow의 값으로 변경)
    // 3. 변경된 상태 값을 비교
    <>
      <h1>state2</h1>
      <p>
        <button onClick={onShow}>show</button>
        <button onClick={onHide}>hide</button>
        <button onClick={onToggle}>{isShow ? "hide숨기기" : "show보기"}</button>
      </p>
      <hr />
      {isShow === true ? (
        <div
          style={{
            width: 300,
            height: 100,
            marginBottom: 10,
            backgroundColor: "tomato",
          }}
        >
          box1
        </div>
      ) : null}
      <hr />
      {isShow && (
        <div
          style={{
            width: 300,
            height: 100,
            marginBottom: 10,
            backgroundColor: "orange",
          }}
        >
          box2
        </div>
      )}
      <hr />
      {/* isShow의 값이 true면 B조건까지 읽지 않아도 참으로 반환됨. 뒤의 내용 나오지 않음 */}
      {isShow || (
        <div
          style={{
            width: 300,
            height: 100,
            marginBottom: 10,
            backgroundColor: "teal",
          }}
        >
          box3 box1,2와 반대
        </div>
      )}
    </>
  );
};

export default Ex6_state2;
