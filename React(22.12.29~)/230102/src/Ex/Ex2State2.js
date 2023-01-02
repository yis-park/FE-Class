import React, { useState } from "react";

function Ex2State2() {
  const [data, setData] = useState([]);
  const [txt, setTxt] = useState("");

  function itemList(e) {
    let val = e.target.value;
    // console.log(val);
    setTxt(val);
  }

  function addItem() {
    // txt === "" && alert("ddd");
    if (txt === "") {
      alert("내용을 작성해 주세요.");
      return; // 더이상 진행시키지 않고 빠져나옴.(빈 txt가 li에 입력되지 않음)
    }
    setData((prevItem) => {
      let idx = prevItem.length;
      return [...prevItem, { id: idx++, name: txt }];
    });

    setTxt(""); // 빈 텍스트 필드
  }

  return (
    <>
      {/* onChange 변결될때마다 인식 */}
      <input type="text" value={txt} onChange={itemList} />
      <button onClick={addItem}>추가</button>
      <hr />
      {/* 입력 내용을 리스트로 출력 */}
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Ex2State2;
