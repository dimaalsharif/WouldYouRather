import {
  SET_AUTH_USER,
  ADD_ANSWER_AUTH_USER,
  ADD_QUESTION_AUTH_USER,
  REMOVE_AUTH_USER,
} from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        ...action.authedUser,
        isAuthedUser: true,
      };

    case ADD_ANSWER_AUTH_USER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.qid]: action.answer,
        },
      };

    case ADD_QUESTION_AUTH_USER:
      return {
        ...state,
        questions: state.questions.concat([action.question.id]),
      };

    case REMOVE_AUTH_USER:
      console.log(action.authedRemoved);
      return {
        ...action.authedRemoved,
        isAuthedUser: false,
      };

    default:
      return state;
  }
}
