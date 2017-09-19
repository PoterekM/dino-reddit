import postList from './../../src/reducers/post-list-reducer';
import constants from './../../src/constants';

describe("Post list reducer", () => {

  test('should return equivilant state if no action type is recognized', () => {
      expect(postList([], { type: null })).toEqual([]);
    });


});
