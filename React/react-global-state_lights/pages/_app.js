import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const defaultLights = [
  {
    id: 1,
    room: "Living Room",
    isOn: false,
  },
  {
    id: 2,
    room: "Kitchen",
    isOn: false,
  },
  {
    id: 3,
    room: "Bedroom",
    isOn: false,
  },
  {
    id: 4,
    room: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    room: "Garage",
    isOn: false,
  },
  {
    id: 6,
    room: "Porch",
    isOn: false,
  },
  {
    id: 7,
    room: "Garden",
    isOn: false,
  },
  {
    id: 8,
    room: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(defaultLights);

  function toggleLight(roomId) {
    setLights(lights.map((light) => (light.id === roomId ? { ...light, isOn: !light.isOn } : light)));
  }

  function turnAllOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  function turnAllOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  const numberOfLightsThatAreOn = lights.filter((light) => light.isOn).length;
  const allLightsAreOff = lights.every((light) => !light.isOn);

  return (
    <Layout isDimmed={allLightsAreOff}>
      <GlobalStyle />
      <Component
        {...pageProps}
        setLights={setLights}
        lights={lights}
        toggleLight={toggleLight}
        turnAllOff={turnAllOff}
        turnAllOn={turnAllOn}
        numberOfLightsThatAreOn={numberOfLightsThatAreOn}
      />
    </Layout>
  );
}
