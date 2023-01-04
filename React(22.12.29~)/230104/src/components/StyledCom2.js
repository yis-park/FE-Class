import styled, { css } from "styled-components";

function StyledCom2() {
  // ${props => props.props명}
  const Container = styled.div`
    width: ${(props) => props.wt};
    border: 1px solid #000;
    margin: 10px auto;
    background-color: ${(props) => (props.bg ? props.bg : "tomato")};
  `;
  const Box = styled.button`
    background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#6fa")};
    border: none;
    margin: 10px;
    padding: 5px 10px;
    width: ${(props) => (props.width ? props.width : "80px")};
    ${(props) =>
      props.primary &&
      css`
        background-color: #000;
        color: #fff;
        width: 80%;
        transition: 0.3s;
        display: block;
        &:hover {
          background-color: maroon;
        }
      `}
  `;
  return (
    // 사용자 정의 props이름-> wt, bg
    <Container wt="70vw">
      <Box width="120px" bgcolor="salmon">
        box1
      </Box>
      <Box width="200px" bgcolor="tamato">
        box2
      </Box>
      <Box>box3</Box>
      <Box>box4</Box>
      <Box primary>box5</Box>
    </Container>
  );
}

export default StyledCom2;
