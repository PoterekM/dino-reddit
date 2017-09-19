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
      userName : state.userName,
      title : state.title,
      content : state.content,
      date : state.date,
      voteTotal : state.voteTotal + 1,
      id : state.id
    }
    console.log(voteTotal);
    return newState
    default:
    return state

  }
}
