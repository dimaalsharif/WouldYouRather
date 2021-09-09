import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Image, Row, Col } from "react-bootstrap";
import { formatQuestion } from "../utils/helper";
class QuestionCard extends Component {
  render() {
    const { question } = this.props;
    const { name, id, optionOne, avatar } = question;

    return (
      <Card>
        <Card.Header>{name} Asks:</Card.Header>
        <Card.Body>
          <Row>
            <Col xs={4} md={4}>
              <Image thumbnail src={avatar} alt="ejre" className="image" />
            </Col>
            <Col xs={8} md={8}>
              <Card.Title> Would You Rather </Card.Title>
              <Card.Text>...{optionOne.text}...</Card.Text>
              <Link to={`/question/${id}`} className="view">
                <Button variant="primary" className="btn-Question">
                  View Poll
                </Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id];
  return {
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
}

export default connect(mapStateToProps)(QuestionCard);
