import React, { Component } from "react";
import { handleRemoveAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav, Navbar, Image } from "react-bootstrap";

class NavPage extends Component {
  removeAuthedUser = () => {
    this.props.dispatch(handleRemoveAuthedUser());
  };

  className = (eventKey) => {
    switch (eventKey) {
      default:
        return "active";
    }
  };
  render() {
    return (
      <Navbar>
        <div className="Nav-center">
          <Nav variant="pills" defaultActiveKey={window.location.pathname}>
            <Nav.Link eventKey="/" to="/" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link eventKey="/add" to="/add" as={Link}>
              New Question
            </Nav.Link>
            <Nav.Link eventKey="/leaderboard" to="/leaderboard" as={Link}>
              Leader Board
            </Nav.Link>
            <Navbar.Text className="menu-user">
              {" "}
              Hello {this.props.authedUser.name}{" "}
            </Navbar.Text>
            <Image
              thumbnail
              roundedCircle
              src={this.props.authedUser.avatarURL}
              alt="ejre"
              className="avater"
            />
            <Nav.Link onClick={this.removeAuthedUser} to="/signin" as={Link}>
              Log Out
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NavPage);
