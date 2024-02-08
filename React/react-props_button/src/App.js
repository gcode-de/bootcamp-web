import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Button color="red" disabled text="don't click me!" />
      <br />
      <Button color="green" text="click me!" />
      <br />
      <Button color="grey" text="whatever, man!" />
    </>
  );
}

function Button({ color, disabled, text }) {
  const handleClick = (event) => {
    console.log(event.target.textContent);
  };

  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
