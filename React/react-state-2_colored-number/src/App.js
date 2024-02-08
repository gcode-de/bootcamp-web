import React, { useState } from "react";
import "./styles.css";
import Counter from "./components/Counter";

export default function App() {
  const [counter, setCounter] = useState(0);
  return <Counter counter={counter} setCounter={setCounter} />;
}
