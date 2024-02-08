import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // let code = "?";
  let [code, setCode] = useState("?");

  const validCode = "🐡🐠🐋";

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={(event) => {
            console.log("Update Code!");
            setCode((code) => code + event.target.textContent);
            console.log(code);
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={(event) => {
            console.log("Update Code!");
            setCode((code) => code + event.target.textContent);
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={(event) => {
            console.log("Update Code!");
            setCode((code) => code + event.target.textContent);
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          console.log("Reset Code!");
          setCode("");
        }}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
