import styled from "styled-components";
import Light from "../Light";
import { useLightsStore } from "@/store";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights() {
  const lights = useLightsStore((state) => state.lights);
  return (
    <StyledLights>
      {lights.map((light) => (
        <li key={light.id}>
          <Light name={light.room} isOn={light.isOn} id={light.id} />
        </li>
      ))}
    </StyledLights>
  );
}
