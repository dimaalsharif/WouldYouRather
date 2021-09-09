import { RECEIVE_USERS, ADD_ANSWER, ADD_QUESTION_USER } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER:
      return {
        ...state,
        [action.authedUser.id]: {
          ...state[action.authedUser.id],
          answers: {
            ...state[action.authedUser.id].answers,
            [action.qid]: action.answer,
          },
        },
      };

    case ADD_QUESTION_USER:
      const question = action.question;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id]),
        },
      };
    default:
      return state;
  }
}
