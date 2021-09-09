import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };

  handlUpdateState = (e) => {
    const text = e.target.value;
    e.target.id === "one"
      ? this.setState({ optionOne: text })
      : this.setState({ optionTwo: text });
  };

  handleSubmit = (optionOne, optionTwo, e) => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
      toHome: true,
    }));
  };

  render() {
    const { optionOne, optionTwo, toHome } = this.state;
    const { signedIn } = this.props;
    if (toHome === true) {
      return <Redirect to="/" />;
    }

    if (signedIn === false) {
      return <Redirect to="/signin" />;
    }
    return (
      <div>
        <Card>
          <Card.Header className="card-title-signin">
            {" "}
            Create New Question{" "}
          </Card.Header>
          <Card.Title className="new-question">
            {" "}
            Complete the question:{" "}
          </Card.Title>
          <Card.Title className="new-question">
            {" "}
            <strong> Would you rather... </strong>{" "}
          </Card.Title>
          <div className="form">
            <form onSubmit={(e) => this.handleSubmit(optionOne, optionTwo, e)}>
              <input
                id="one"
                placeholder="Enter option one text here"
                type="text"
                value={optionOne}
                onChange={this.handlUpdateState}
              />
              <h2 className="line">
                <span>OR</span>
              </h2>

              <input
                placeholder="Enter option two text here"
                id="two"
                type="text"
                value={optionTwo}
                onChange={this.handlUpdateState}
              />

              <Button
                className="btn"
                type="submit"
                disabled={optionOne === "" || optionTwo === ""}
              >
                {" "}
                Submit{" "}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    signedIn: authedUser.isAuthedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
