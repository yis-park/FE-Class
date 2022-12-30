import Try1Sub from "./Try1Sub";
import Try2Box from "./Try2Box";

// 자식컴포넌트
function Box({ width, height, bgcolor, border }) {
  const borderStyle = border || ["3px", "solid", "#000"];
  const boxStyle = {
    width: width || 120,
    height: height || 50,
    backgroundColor: bgcolor || "#eee",
    margin: "20px auto",
    textAlign: "center",
    fontWeight: "bold",
    borderWidth: borderStyle[0],
    borderStyle: borderStyle[1],
    borderColor: borderStyle[2],
  };

  return <div style={boxStyle}>box</div>;
}

function Try2(props) {
  return (
    <div>
      <h1>연습2</h1>
      {/* style props: width, heigth, bgcolor .. */}
      <Box width={100} height={100} bgcolor={"orange"} />
      <Box border={[6, "solid", "red"]} />
      {/* <Try2Box width={50} heigth={150} bgcolor={"pink"} /> */}
    </div>
  );
}

export default Try2;
