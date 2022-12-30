import Try1Sub from "./Try1Sub";

function Try1() {
  return (
    <>
      <h1>연습 1</h1>
      <Try1Sub />
      <Try1Sub
        name="이젠"
        email="ezen@email.com"
        tell="031-123-456"
        color="teal"
        bgcolor="hotpink"
        done={true}
      />

      <Try1Sub
        name="이젠1"
        email="ezen1@naver.com"
        color="orange"
        done={true}
      />
    </>
  );
}

export default Try1;
