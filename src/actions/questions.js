import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { ADD_ANSWER } from "./users";
import { ADD_ANSWER_AUTH_USER } from "./authedUser";
import { ADD_QUESTION_USER } from "./users";
import { ADD_QUESTION_AUTH_USER } from "./authedUser";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_VOTE = "ADD_VOTE";

// Recive question from the database
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTION,
    questions,
  };
}

//Modify Question state
function addVote({ qid, authedUser, answer }) {
  return {
    type: ADD_VOTE,
    qid,
    authedUser,
    answer,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

//Modifiy Users State
function addAnswer({ qid, authedUser, answer }) {
  return {
    type: ADD_ANSWER,
    qid,
    authedUser,
    answer,
  };
}

function addQuestionUser(question) {
  return {
    type: ADD_QUESTION_USER,
    question,
  };
}

//Modify AuthedUser State
function addAnswerAuthUser({ qid, answer }) {
  return {
    type: ADD_ANSWER_AUTH_USER,
    qid,
    answer,
  };
}

function addQuestionAuthedUser(question) {
  return {
    type: ADD_QUESTION_AUTH_USER,
    question,
  };
}

export function handleAddVote(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(addVote({ qid, authedUser, answer }));
    dispatch(addAnswer({ qid, authedUser, answer }));
    dispatch(addAnswerAuthUser({ qid, answer }));
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).catch((e) => {
      console.warn("Error in addVote: ", e);
      alert("The was an error adding the vote. Try again.");
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const author = authedUser.id;
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionAuthedUser(question));
      dispatch(addQuestionUser(question));
    });
  };
}
