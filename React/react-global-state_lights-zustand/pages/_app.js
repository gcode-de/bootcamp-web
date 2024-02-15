import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useLightsStore } from "@/store";

export default function App({ Component, pageProps }) {
  const lights = useLightsStore((state) => state.lights);
  const allLightsAreOff = lights.every((light) => !light.isOn);

  return (
    <Layout isDimmed={allLightsAreOff}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
