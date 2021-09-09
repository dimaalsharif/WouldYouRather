import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { checkAnswered } from "../utils/helper";

class Home extends Component {
  render() {
    const { questions, authedUser, signedIn } = this.props;

    if (signedIn === false) {
      return <Redirect to="/signin" />;
    }
    const questionKeys = Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );
    return (
      <div className="content-home">
        {console.log(signedIn)}
        <Tabs
          defaultActiveKey="unanswered"
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="unanswered" title="Unanswered Questions">
            <ul>
              {questionKeys.map((id) =>
                !checkAnswered(questions[id], authedUser) ? (
                  <li key={id}>
                    {" "}
                    <QuestionCard id={id} />{" "}
                  </li>
                ) : null
              )}
            </ul>
          </Tab>
          <Tab eventKey="answered" title="Answered Questions">
            <ul>
              {questionKeys.map((id) =>
                checkAnswered(questions[id], authedUser) ? (
                  <li key={id}>
                    {" "}
                    <QuestionCard id={id} />{" "}
                  </li>
                ) : null
              )}
            </ul>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    signedIn: authedUser ? authedUser.isAuthedUser : false,
    questions,
    authedUser,
  };
}

export default connect(mapStateToProps)(Home);
