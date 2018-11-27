import {
  StoriesReducer
} from '../../src/reducers/stories.reducer';

test('should reduce stories on FETCH_TOP_STORIES action', () => {
  const initialState = {
    foo: 'bar'
  };

  const action = {
    type: 'FETCH_TOP_STORIES',
    stories: [{
      id: 1,
      title: 'Title 1'
    }, {
      id: 2,
      title: 'Title 2'
    }]
  };

  const reducer = StoriesReducer(initialState, action);

  expect(reducer).toEqual(action.stories);
});

test('should keep initial state on default action', () => {
  const initialState = {
    foo: 'bar'
  };

  const action = {
    type: 'ANYTHING',
    stories: [{
      id: 1,
      title: 'Title 1'
    }, {
      id: 2,
      title: 'Title 2'
    }]
  };

  const reducer = StoriesReducer(initialState, action);

  expect(reducer).toEqual(initialState);
});