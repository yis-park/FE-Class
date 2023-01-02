function Target() {
  const border = {
    border: "1px solid #000",
    padding: 10,
    display: "block",
    width: "50%",
  };

  const onCheck = (e) => {
    // 사용자가 실제 가리킨(클릭) 대상
    console.log("target: ", e.target);

    // 이벤트가 바인딩된 대상(이벤트 함수가 있는 버튼)
    console.log("currentTarget:", e.currentTarget);
    console.log("-------------");
  };

  return (
    <>
      <h1>e.target, e.currentTarget</h1>
      <div
        style={{
          border: "1px solid #000",
          width: 200,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
        }}
        onClick={onCheck}
      >
        <span style={border}>span</span>
        <br />
        <strong style={border}>click</strong>
      </div>
    </>
  );
}

export default Target;
