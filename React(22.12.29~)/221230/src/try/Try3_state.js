import { useState } from "react";

const Try3_state = () => {
  const [bgcolor, setBgcolor] = useState("orange");

  const onColor = () => {
    // setBgcolor("tomato");
    setBgcolor(bgcolor === "orange" ? "tomato" : "orange");
  };
  return (
    <div>
      <h1>state ex1</h1>
      <p>
        박스를 클릭할때마다 첫번째 오렌지 색 두번째 토마토색이 번갈아 나옴
        (토글역할)
      </p>
      <div
        style={{
          border: "1px solid #000",
          padding: 20,
          margin: 5,
          cursor: "pointer",
          fontWeight: "bold",
          backgroundColor: bgcolor,
        }}
        onClick={onColor}
      >
        backgroundColor : {bgcolor}
      </div>
    </div>
  );
};

export default Try3_state;
