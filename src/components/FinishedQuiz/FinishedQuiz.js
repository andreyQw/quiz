import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = props => {
  return (
    <div className={classes.FinishedQuiz}>
      Questionnaire is Finished
      <ul>
        <li>
          <strong>1.</strong>
          answer
          <i className={""} />
        </li>
      </ul>
      <p>Right 2 from 2</p>
      <div>
        <button>Repeat</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
