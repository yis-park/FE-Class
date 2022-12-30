// import React from "react";
import Ex2Sub from "./Ex2Sub";

function Ex2() {
  const latte = { name: "카페라떼", price: 4500 };
  const mocha = { name: "카페모카", price: 5000 };
  return (
    <div>
      <h1>props</h1>
      {/* Ex2Sub 컴포넌트에 속성(props) 전달 */}
      <Ex2Sub name="아메리카노" price="4000원" />
      <Ex2Sub name="아메리카노" price={4000} />
      <Ex2Sub name={latte.name} price={latte.price} />
      <Ex2Sub name={mocha.name} price={mocha.price} />
      <Ex2Sub {...latte} />
      <Ex2Sub {...mocha} />
    </div>
  );
}

export default Ex2;
