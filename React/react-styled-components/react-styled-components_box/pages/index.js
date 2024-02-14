import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponent from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Wrapper $row>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponent />
      <BoxWithStyledComponent $isBlack />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ $row }) => ($row ? "row" : "column")};
`;
