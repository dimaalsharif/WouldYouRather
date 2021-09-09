export function formatQuestion(question, userObj, authedUser) {
  const { id, optionOne, optionTwo } = question;
  const { name, avatarURL } = userObj;
  return {
    name,
    id,
    optionOne: optionOne,
    optionTwo: optionTwo,
    avatar: avatarURL,
    hasAnswerd: Object.keys(authedUser.answers).includes(id),
  };
}

export function checkAnswered(question, authedUser) {
  const { id } = question;
  return Object.keys(authedUser.answers).includes(id);
}
