import React, { useState } from "react";
import "./styles.css";
import Form from "./components/Form.js";

export default function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("hohn@doe.com");
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form name={name} setName={setName} email={email} setEmail={setEmail} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
