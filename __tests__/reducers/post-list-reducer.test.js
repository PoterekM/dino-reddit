import postList from './../../src/reducers/post-list-reducer';
import c from './../../src/constants';

describe("Post list reducer", () => {
  let action;
  const postInfo = {
    userName: 'userName'
    title : "I love dino blogz",
    content : "Jest is being a diva and won't work well with webpack",
    timeOpened : 1500000000000,
    id: 0
  };


  test('should return equivalent state if no action type is recognized', () => {
    action = { type: null };
    expect(postList([], action)).toEqual([]);
  });

  test('should add post to list array', () => {
    const { userName, title, content, timeOpened, id } = postInfo;
    action = {
      type: c.ADD_POST,
      userName: userName,
      title: title,
      content: content,
      timeOpened: timeOpened,
      id: id
    };
    const futureState = [ postInfo ];
    expect(postList([], action)).toEqual([ postInfo ]);
  });

});
