import styled from "styled-components";
import Button from "../Button";
import { useLightsStore } from "@/store";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const turnAllOff = useLightsStore((state) => state.turnAllOff);
  const turnAllOn = useLightsStore((state) => state.turnAllOn);
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
