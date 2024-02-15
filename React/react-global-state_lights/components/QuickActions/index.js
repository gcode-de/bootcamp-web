import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ turnAllOff, turnAllOn }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          turnAllOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          turnAllOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
