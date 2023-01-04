import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: teal;
  display: grid;
  place-items: center;
`;

// 사전 설정 필요. 실행 컴포넌트 앞에 설정
const mov = keyframes`
0%, 100% { transform: translateY(0)}
25% { transform: translateY(-20px) rotate(20deg)}
50% { transform: translateY(10px)}
75% { transform: translateY(-20px) rotate(-20deg)}
`;

const Rabbit = styled.div`
  font-size: 5rem;
  animation: ${mov} 2s infinite ease-in-out;
`;

function StyledAnimation(props) {
  return (
    <Container>
      <Rabbit>🐰🐇</Rabbit>
    </Container>
  );
}

export default StyledAnimation;
