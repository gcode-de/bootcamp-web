import React, { useState } from "react";
import { useRef } from "react";
import "./Form.css";

export default function Form({ questions, setQuestions }) {
  const maxLength = 150;
  const [questionCharsLeft, setQuestionCharsLeft] = useState(maxLength);
  const [answerCharsLeft, setAnswerCharsLeft] = useState(maxLength);

  const questionRef = useRef(null);
  const answerRef = useRef(null);
  const linkRef = useRef(null);
  const tagsRef = useRef(null);

  const handleQuestionInput = (event) => {
    setQuestionCharsLeft(maxLength - event.target.value.length);
  };

  const handleAnswerInput = (event) => {
    setAnswerCharsLeft(maxLength - event.target.value.length);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let newQuestion = {};
    newQuestion.question = questionRef.current.value;
    newQuestion.answer = answerRef.current.value;
    newQuestion.link = linkRef.current.value;
    newQuestion.tags = tagsRef.current.value;

    //set additional properties
    newQuestion.id = questions.length;
    console.log(questions.length);
    newQuestion.bookmarked = false;
    newQuestion.addedByUser = true;

    //separate tags
    newQuestion.tags = newQuestion.tags.trim()
      ? newQuestion.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 2)
      : "";

    //save question
    console.log("Add question:", newQuestion);
    setQuestions((questions) => [...questions, newQuestion]);

    event.target.reset();
  };

  return (
    <div className="card-container">
      <h2>Add a Question</h2>
      <section>
        <form action="" id="addQuestion" onSubmit={handleFormSubmit}>
          <label htmlFor="question">
            Your question*:
            <textarea
              id="question"
              ref={questionRef}
              className="question max150"
              cols="30"
              rows="4"
              placeholder="Type your question"
              maxLength="150"
              required
              onInput={handleQuestionInput}
            ></textarea>
            <span>{questionCharsLeft} characters left</span>
          </label>
          <label htmlFor="answer">
            Your answer*:
            <textarea
              ref={answerRef}
              id="answer"
              className="answer max150"
              cols="30"
              rows="4"
              placeholder="Type your answer"
              maxLength="150"
              required
              onInput={handleAnswerInput}
            ></textarea>
            <span>{answerCharsLeft} characters left</span>
          </label>
          <label htmlFor="link">
            Link:
            <input ref={linkRef} id="link" className="link" type="url" placeholder="Provide a link (optional)"></input>
          </label>
          <label htmlFor="tags">
            Tags:
            <input ref={tagsRef} id="tags" type="text" className="tags" placeholder="Type tags separated by comma"></input>
          </label>
          <button name="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
