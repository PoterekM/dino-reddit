export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
    const { userName, title, content, date, voteTotal, id } = action;
    return [
      ...state,
      {
        userName : userName,
        title : title,
        content : content,
        date : date,
        voteTotal : 0,
        id: id
      }
    ];
    case 'UP_VOTE':
    let newState = state.slice();
    newState = {
      userName : newState.userName,
      title : newState.title,
      content : newState.content,
      date : newState.date,
      voteTotal : newState.voteTotal + 1,
      id : newState.id
    }
    return newState
    default:
    return state

  }
}
