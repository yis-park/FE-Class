import StyledAnimation from "./components/StyledAnimation";
import StyledCom2 from "./components/StyledCom2";
import { createGlobalStyle } from "styled-components";
import { reset, Reset } from "styled-reset";
import Ex1Styled from "./Ex/Ex1Styled";
import StyleModule from "./components/StyleModule";
import Ex2State from "./Ex/Ex2State";
import Ex3props from "./Ex/Ex3props";
import UseRef1 from "./components/UseRef1";
import UseRef2 from "./components/UseRef2";
import Ex4Ref from "./Ex/Ex4Ref";
import UseRef3 from "./components/UseRef3";
import UseRef4 from "./components/UseRef4";
import Ex5ref from "./Ex/Ex5ref";

// 모든 컴포넌트에 적용 createGlobalStyle``;
const GlobalStyle = createGlobalStyle`
${reset};

body{
font-family: '돋움', sans-serif;
};

body * {
  box-sizing: border-box;
}
`;

function App() {
  return (
    <>
      {/* <StyledCom2 /> */}
      {/* <Reset /> */}
      <GlobalStyle />
      {/* <StyledAnimation /> */}
      {/* <Ex1Styled /> */}
      {/* <StyleModule /> */}
      {/* <Ex2State /> */}
      {/* <Ex3props /> */}
      {/* <UseRef1 /> */}
      {/* <UseRef2 /> */}
      {/* <Ex4Ref /> */}
      {/* <UseRef3 /> */}
      {/* <UseRef4 /> */}
      <Ex5ref />
    </>
  );
}

export default App;
