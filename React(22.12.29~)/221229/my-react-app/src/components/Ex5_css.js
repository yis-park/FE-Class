import React from "react";
import "./Ex5.css";

function Ex5_css() {
  return (
    // class는 js 문법이기 때문에 JSX에서는 className으로 작성함 여기까진 js 영역
    <div className="container">
      {/* div등 뭔가로 감싸놓은 이 부분은 JSX 영역임 */}
      <article className="orange">box1</article>
      <article className="teal">box2</article>
      <article className="lightcoral">box3</article>
      <article className="lightseagreen">box4</article>
    </div>
  );
}

export default Ex5_css;
