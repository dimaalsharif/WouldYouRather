import React, { Component } from "react";
import { connect } from "react-redux";
import { checkAnswered, formatQuestion } from "../utils/helper";
import Submit from "./Submit";
import Results from "./Results";
import Page404 from "./Page404";

class ViewPoll extends Component {
  render() {
    const { authedUser, question } = this.props;
    if (!question) {
      return <Page404 />;
    }
    const answered = checkAnswered(question, authedUser);
    return (
      <div>
        {!answered && <Submit question={question} />}
        {answered && <Results question={question} />}
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
}

export default connect(mapStateToProps)(ViewPoll);
