export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
    const { userName, title, content, timeOpened, id } = action;
    return [
      ...state,
      {
        userName : userName,
        title : title,
        content : content,
        timeOpened : timeOpened,
        id: id
      }
    ]
    default:
    return state
  }
}
