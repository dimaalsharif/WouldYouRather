import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddVote } from "../actions/questions";
import Results from "./Results";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Image, Row, Col } from "react-bootstrap";

class Submit extends Component {
  state = {
    option: "",
  };

  handleSubmit = (id, option) => {
    this.props.dispatch(handleAddVote(id, option));
    return <Results question={this.props.question} />;
  };

  updateState = (option) => {
    this.setState({ option: option });
  };

  render() {
    const { question } = this.props;
    const { name, id, optionOne, optionTwo, avatar } = question;
    const { option } = this.state;

    return (
      <Card>
        <Card.Header className="card-title-signin"> {name} Asks: </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={4} md={4}>
              <Image thumbnail src={avatar} alt="ejre" className="image" />
            </Col>
            <Col xs={8} md={8}>
              <Card.Title> Would You Rather... </Card.Title>
              <input
                type="radio"
                value="optionOne"
                name="options"
                onClick={(event) => this.updateState(event.target.value)}
              />{" "}
              {optionOne.text}
              <br />
              <input
                type="radio"
                value="optionTwo"
                name="options"
                onClick={(event) => this.updateState(event.target.value)}
              />{" "}
              {optionTwo.text}
              <Button
                onClick={() => this.handleSubmit(id, option)}
                className="btn-submit"
                disabled={option ? false : true}
              >
                Submit
              </Button>
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
  };
}

export default connect(mapStateToProps)(Submit);
