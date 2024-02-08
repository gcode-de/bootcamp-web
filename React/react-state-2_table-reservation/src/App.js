import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  function handleIncrement() {
    setPeople(people + 1);
  }
  function handleDecrement() {
    setPeople(people - 1);
  }
  const [people, setPeople] = useState(0);
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
