import { useRef, useState } from "react";
import styled from "styled-components";

function Ex1() {
  //key
  const idRef = useRef(1);
  //커서
  const focusRef = useRef();
  // 추가된 내용들[]
  const [data, setData] = useState([]);

  // 각 내용 {id:idRef , text:txt}
  const [txt, setTxt] = useState("");

  const changeInput = (e) => {
    setTxt(e.target.value);
  };
  const onAdd = () => {
    setData([
      ...data,
      {
        id: idRef.current++,
        txt,
      },
    ]);
    setTxt("");
    focusRef.current.focus();
  };
  return (
    <div style={{ margin: 30 }}>
      <input type="text" value={txt} onChange={changeInput} ref={focusRef} />
      <button onClick={onAdd}>추가</button>
      <hr />
      <ul>
        {/* 입력한 값 li로 출력 */}
        {data.map((item) => (
          <li key={item.id}>
            {item.id} : {item.txt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ex1;
