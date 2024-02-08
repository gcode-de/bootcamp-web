import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookmark,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function Profile({ questions }) {
  return (
    <>
      <h2>Your Profile</h2>
      <div>
        <FontAwesomeIcon className="user-icon" icon={faUser} />{" "}
        <span className="user-name">Nick Lass</span>
      </div>
      <p>
        <strong>About me</strong>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere
        odit eveniet officia unde nam, facilis, labore iure nihil, cupiditate
        autem at cum beatae adipisci culpa est repellat. Excepturi, at.
      </p>
      <div className="counters">
        <div className="counter" js-data="counter-added-questions">
          <FontAwesomeIcon icon={faBookmark} />
          <div js-data="added-questions-number" style={{ display: "inline" }}>
            {" "}
            {questions.filter((q) => q.addedByUser).length}
          </div>
        </div>
        <div className="counter" js-data="counter-bookmarked-questions">
          <FontAwesomeIcon icon={faCircleQuestion} />
          <div
            js-data="bookmarked-questions-number"
            style={{ display: "inline" }}
          >
            {" "}
            {questions.filter((q) => q.bookmarked).length}
          </div>
        </div>
      </div>
      <div className="settings">
        <p>
          <strong>Settings</strong>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere
          odit eveniet officia unde nam, facilis, labore iure nihil,
        </p>
      </div>
    </>
  );
}
