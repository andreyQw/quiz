import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    isFinished: true,
    activeQuestion: 0,
    answerState: null, // {[id]: 'success' or 'error'}
    quiz: [
      {
        id: 1,
        question: "What language do you use to write now?",
        answers: [
          { id: 1, text: "JavaScript" },
          { id: 2, text: "Python" },
          { id: 3, text: "PHP" },
          { id: 4, text: "Ruby" }
        ],
        rightAnswerId: 4
      },
      {
        id: 2,
        question: "What languages ​​are you going to learn?",
        answers: [
          { id: 1, text: "JavaScript" },
          { id: 2, text: "Python" },
          { id: 3, text: "PHP" },
          { id: 4, text: "Ruby" },
          { id: 5, text: "C#" }
        ],
        rightAnswerId: 1
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }
    console.log("Answer id: ", answerId);
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: "success" }
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log("Finished");
          this.setState({
            isFinished: true
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout);
      }, 500);
    } else {
      this.setState({
        answerState: { [answerId]: "error" }
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Please answer questions</h1>

          {this.state.isFinished ? (
            <FinishedQuiz />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
