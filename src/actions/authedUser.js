export const SET_AUTH_USER = "SET_AUTH_USER";
export const ADD_ANSWER_AUTH_USER = "ADD_ANSWER_AUTH_USER";
export const ADD_QUESTION_AUTH_USER = "ADD_QUESTION_AUTH_USER";
export const REMOVE_AUTH_USER = "REMOVE_AUTH_USER";
export function setAuthedUser(authedUser) {
  return {
    type: SET_AUTH_USER,
    authedUser,
  };
}
export function removeAuthedUser() {
  return {
    type: REMOVE_AUTH_USER,
    authedRemoved: null,
  };
}

export function handleRemoveAuthedUser() {
  return (dispatch) => {
    return dispatch(removeAuthedUser());
  };
}

export function handleSetAuthedUser(authedUser) {
  return (dispatch) => {
    return dispatch(setAuthedUser(authedUser));
  };
}
