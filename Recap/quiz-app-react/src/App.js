import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main.js";
import Header from "./Components/Header/Header.js";
import CardContainer from "./Components/CardContainer/CardContainer.js";
import Form from "./Components/Form/Form.js";
import Profile from "./Components/Profile/Profile.js";
import Footer from "./Components/Footer/Footer.js";
import DATA from "./DATA.js";

function App() {
  const [questions, setQuestions] = useState(DATA);

  return (
    <Router>
      <div className="App">
        <Main>
          <Header>Quiz App</Header>
          <Routes>
            <Route
              path="/"
              element={
                <CardContainer questions={questions} setQuestions={setQuestions}>
                  {" "}
                  Alle Fragen{" "}
                </CardContainer>
              }
            />
            <Route
              path="/favorites"
              element={
                <CardContainer questions={questions.filter((question) => question.bookmarked)} setQuestions={setQuestions}>
                  Favoriten
                </CardContainer>
              }
            />
            <Route path="/form" element={<Form questions={questions} setQuestions={setQuestions} />} />
            <Route path="/profile" element={<Profile questions={questions} setQuestions={setQuestions} />} />
          </Routes>
          <Footer />
        </Main>
      </div>
    </Router>
  );
}

export default App;
