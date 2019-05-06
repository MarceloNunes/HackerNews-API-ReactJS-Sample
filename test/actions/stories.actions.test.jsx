import {fetchTopStoriesAction} from '../../src/actions/stories.actions';

test('should set up fetchTopStoriesAction action object with provided values', () => {
  const storiesData = [{
    id: 1,
    title: 'Title 1'
  }, {
    id: 2,
    title: 'Title 2'
  }];

  const action = fetchTopStoriesAction(storiesData);

  expect(action).toEqual({
    type: 'FETCH_TOP_STORIES',
    stories: [{
      id: 1,
      title: 'Title 1'
    }, {
      id: 2,
      title: 'Title 2'
    }]
  });
});
