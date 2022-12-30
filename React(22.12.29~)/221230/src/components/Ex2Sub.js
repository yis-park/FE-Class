// import React from "react";
function Ex2Sub({ name, price }) {
  // 부모 컴포넌트에 있는 속성을 받아오겠다.
  // const { name, price } = props;
  return (
    <>
      <h2>Ex2Sub 자식 컴포넌트</h2>
      <p>
        커피: {name} ({typeof name})
      </p>
      <p>
        가격: {price} ({typeof price})
      </p>
    </>
  );
}

export default Ex2Sub;
