import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";
import ViewPoll from "./ViewPoll";
import NavPage from "./NavPage";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Page404 from "./Page404";

class App extends Component {
  render() {
    const { signedIn } = this.props;

    return (
      <Router>
        {signedIn === false ? null : <NavPage />}
        <div>
          <Switch>
            <Route path="/signin" exact component={SignIn} />
            <Route path="/" exact component={Home} />
            <Route
              path="/question/:id/"
              render={(props) => <ViewPoll id={props.match.params.id} />}
            />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/add" component={NewQuestion} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    signedIn: authedUser ? authedUser.isAuthedUser : false,
  };
}

export default connect(mapStateToProps)(App);
