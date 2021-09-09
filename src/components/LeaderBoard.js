import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileCard from "./ProfileCard";
import { Redirect } from "react-router-dom";
class LeaderBoard extends Component {
  render() {
    const { users, signedIn } = this.props;

    if (signedIn === false) {
      return <Redirect to="/signin" />;
    }

    function sum(a, b) {
      return a + b;
    }
    console.log(signedIn);
    const usersId = Object.keys(users).sort(
      (a, b) =>
        sum(Object.keys(users[b].answers).length, users[b].questions.length) -
        sum(Object.keys(users[a].answers).length, users[a].questions.length)
    );
    return (
      <div className="container-leaderboard">
        <ul>
          {usersId.map((id) => (
            <li key={id}>
              <ProfileCard id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    signedIn: authedUser.isAuthedUser,
    users,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
