import { createGlobalStyle } from "styled-components";
// npm i styled-reset, yarn add styled-reset 설치 필요 ${reset}
// import reset form 'styled-reset';

const GlobalStyle = createGlobalStyle`


/* 외부 서체 링크 */
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700&display=swap');

body, input{
  font-family: 'Nanum Myeongjo', '바탕체', 돋움, serif;
  line-height:1.6;
}
body *{
  box-sizing: border-box;
}

a{
  color: inherit;
}
`;

export default GlobalStyle;
