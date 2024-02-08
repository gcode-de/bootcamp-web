import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Niklas" />
      <Greeting name="Samuel" />
    </>
  );
}

const coaches = ["Niklas", "Roland", "Dominik", "Diego"];

function Greeting({ name }) {
  return <h1>Hello, {coaches.includes(name) ? "Coach" : name}</h1>;
}
