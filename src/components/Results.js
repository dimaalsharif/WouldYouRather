import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar, Card, Image, Row, Col } from "react-bootstrap";

class Results extends Component {
  render() {
    const { question, isOptionOne } = this.props;
    const { name, optionOne, optionTwo, avatar } = question;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const optionOneRatio = (optionOne.votes.length / totalVotes) * 100;
    const optionTwoRatio = (optionTwo.votes.length / totalVotes) * 100;
    return (
      <Card>
        <Card.Body>
          <Row>
            <Col xs={4} md={4} className="resultsavatar">
              <Image thumbnail src={avatar} alt="ejre" className="image" />
            </Col>

            <Col xs={8} md={8}>
              <Card.Title> Added by {name} </Card.Title>
              <Card.Title> Results: </Card.Title>
              <div
                className="inside-viewpoll"
                id={isOptionOne ? "activeOp" : ""}
              >
                <Card.Text> Would you rather {optionOne.text}</Card.Text>
                <ProgressBar
                  now={optionOneRatio}
                  label={`${Math.round(optionOneRatio * 10) / 10}%`}
                  animated={true}
                  variant="success"
                />
                <Card.Title>
                  {optionOne.votes.length} out of {totalVotes}
                </Card.Title>
              </div>
              <div className={isOptionOne ? "op1" : "op2"}> Your vote </div>
              <div
                className="inside-viewpoll"
                id={!isOptionOne ? "activeOp" : ""}
              >
                <Card.Text> Would you rather {optionTwo.text}</Card.Text>
                <ProgressBar
                  now={optionTwoRatio}
                  label={`${Math.round(optionTwoRatio * 10) / 10}%`}
                  animated={true}
                  variant="success"
                />
                <Card.Title>
                  {optionTwo.votes.length} out of {totalVotes}
                </Card.Title>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
function mapStateToProps({ authedUser }, { question }) {
  return {
    question,
    isOptionOne: question.optionOne.votes.includes(authedUser.id),
  };
}

export default connect(mapStateToProps)(Results);
