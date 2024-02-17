import styled from "styled-components";

export default function Headline({ children }) {
  return <StyledHeadline>{children}</StyledHeadline>;
}

const StyledHeadline = styled.h1``;
