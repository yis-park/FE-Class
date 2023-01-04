import React from "react";
import Ex3Com from "./Ex3Com";
import Ex3Name from "./Ex3Name";

function Ex3Like({ name, companion }) {
  return (
    <div>
      <p>
        {name}이/가 좋아하는 동물은 {companion}입니다.
      </p>
    </div>
  );
}

export default Ex3Like;
