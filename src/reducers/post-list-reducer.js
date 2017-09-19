export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
    const { userName, title, content, date, id } = action;
    return [
      ...state,
      {
        userName : userName,
        title : title,
        content : content,
        date : date,
        id: id
      }
    ]
    default:
    return state
  }
}
