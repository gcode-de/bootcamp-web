import Card from "../Card/Card";
import "./CardContainer.css";

export default function CardContainer({ children, questions, setQuestions }) {
  return (
    <div className="card-container">
      <h2>{children}</h2>
      {questions.map((question) => (
        <Card
          key={question.id}
          id={question.id}
          question={question.question}
          answer={question.answer}
          link={question.link}
          tags={question.tags}
          isBookmarked={question.bookmarked}
          setQuestions={setQuestions}
        />
      ))}
    </div>
  );
}
