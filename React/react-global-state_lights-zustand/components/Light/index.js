import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { useLightsStore } from "@/store";

export default function Light({ name, isOn, id }) {
  const toggleLight = useLightsStore((state) => state.toggleLight);

  return (
    <LightButton type="button" onClick={() => toggleLight(id)} $isOn={isOn}>
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
