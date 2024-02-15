import Link from "../components/Link";
import { useLightsStore } from "@/store";

export default function HomePage() {
  const numberOfLightsThatAreOn = useLightsStore((state) => state.lights).filter((light) => light.isOn).length;
  return (
    <div>
      <h1>Home</h1>
      <p>{numberOfLightsThatAreOn} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
