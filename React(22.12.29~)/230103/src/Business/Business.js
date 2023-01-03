import { useState } from "react";
import BusinessData from "../assets/data/BusinessData";
import BusinessList from "./BusinessList";
import "./businessStyle.css";

// 최상위 컴포넌트
function Business() {
  const [data, setData] = useState(BusinessData);
  return (
    <article>
      <h2>business</h2>
      <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>

      {/* 불러 올 컴포넌트명 작성
      data={data} -> 자식 컴포넌트에 BusinessData 전달(이게 프롭스props) 
      data={data} 동일하게 이름을 부여하는 것은 props라는 것을 헷갈리지 않게 하기 위해 약속*/}
      <BusinessList data={data} />

      <p className="more">
        <a href="#">view more</a>
      </p>
    </article>
  );
}

export default Business;
