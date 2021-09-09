import users from "./User";
import questions from "./Question";
import authedUser from "./AuthedUser";
import { combineReducers } from "redux";

export default combineReducers({
  users,
  questions,
  authedUser,
});
