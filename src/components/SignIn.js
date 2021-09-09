import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import reactImage from "../icons/reactImage.jpg";
import { handleSetAuthedUser } from "../actions/authedUser";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
class SignIn extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  state = {
    selectedValue: "",
  };

  handleChange = (choice) => {
    this.setState({ selectedValue: choice });
  };

  findUser = (username) => {
    if (username) {
      const info = this.props.usersName.filter(
        (user) => user.id === username.value.name
      );
      this.props.handleSetAuthedUser(info[0]);
    }
  };

  render() {
    const options = [];
    const { usersName, signedIn } = this.props;
    const { selectedValue } = this.state;

    if (signedIn === true) {
      return <Redirect to="/" />;
    }
    usersName.map((user) => {
      const name = user.id;
      const avatar = user.avatarURL;
      return options.push({
        value: { name },
        label: (
          <div className="left">
            {" "}
            <img className="avater" alt="pic" src={avatar} /> {user.name}{" "}
          </div>
        ),
      });
    });

    return (
      <div>
        <Card>
          <Card.Header className="card-title-signin">
            {" "}
            Welcome to the would you rather App!{" "}
          </Card.Header>
          <Card.Title className="card-title-signin">
            {" "}
            Please Sign In to continue{" "}
          </Card.Title>
          <Card.Img className="react-image" src={reactImage} />
          <Card.Title className="card-title-signin"> Sign In </Card.Title>

          <div className="list-users">
            <Select
              value={selectedValue}
              onChange={this.handleChange}
              className="options-list"
              options={options}
              classNamePrefix="mySelect"
            />
            <Link
              to="/"
              className={selectedValue ? "active" : "disabled"}
              onClick={() => this.findUser(selectedValue)}
            >
              {" "}
              <Button
                className="signin"
                disabled={selectedValue ? false : true}
              >
                {" "}
                Sign In{" "}
              </Button>{" "}
            </Link>
          </div>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    signedIn: authedUser ? authedUser.isAuthedUser : false,
    usersName: Object.values(users),
  };
}

export default connect(mapStateToProps, {
  handleSetAuthedUser,
  handleInitialData,
})(SignIn);
