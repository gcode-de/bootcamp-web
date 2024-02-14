import styled from "styled-components";

export default function BoxWithStyledComponent({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack}></StyledBox>;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};

  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;
