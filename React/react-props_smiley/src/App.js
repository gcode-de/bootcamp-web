import React from "react";
import "./styles.css";

export default function App() {
  return (
    <h1>
      <Smiley isHappy />
      <Smiley isCrappy />
    </h1>
  );
}

function Smiley({ isHappy }) {
  return (
    <>
      <div aria-label={isHappy ? "happy smiley" : "sad smiley"} role="img">
        {isHappy ? "😀" : "😢"}
      </div>
    </>
  );
}
