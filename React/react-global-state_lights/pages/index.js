import Link from "../components/Link";

export default function HomePage({ numberOfLightsThatAreOn }) {
  return (
    <div>
      <h1>Homer</h1>
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
