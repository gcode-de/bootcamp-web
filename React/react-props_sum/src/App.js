import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Sum valueA={1} valueB={3} />
      <Sum valueA={2} valueB={17} />
    </>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <>
      {valueA + " + " + valueB + " = " + (valueA + valueB)}
      <br />
    </>
  );
}
