import React, { useState } from "react";
import "./Card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function Card({
  id,
  question,
  answer,
  link,
  tags,
  isBookmarked,
  setQuestions,
}) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [isBookmarkedState, setIsBookmarkedState] = useState(isBookmarked);

  const handleBookmark = () => {
    setIsBookmarkedState(!isBookmarkedState);

    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === id ? { ...q, isBookmarked: !q.isBookmarked } : q
      )
    );
  };

  return (
    <article
      q-id={id}
      className={`article ${isBookmarkedState ? "article-fav" : ""}`}
    >
      <div className="bookmark" aria-label="bookmark" onClick={handleBookmark}>
        <FontAwesomeIcon icon={faBookmark} />
      </div>
      <div className="question">{question}</div>
      <button
        onClick={() => {
          setIsAnswerVisible(!isAnswerVisible);
        }}
      >
        show answer
      </button>
      <div
        className="answer"
        style={{ display: isAnswerVisible ? "block" : "none" }}
      >
        {answer}
      </div>
      <a href="{link}" className="answer-link">
        {link}
      </a>
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
