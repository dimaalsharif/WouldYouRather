import { RECEIVE_QUESTION, ADD_QUESTION, ADD_VOTE } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_VOTE:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser.id,
            ]),
          },
        },
      };

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    default:
      return state;
  }
}
