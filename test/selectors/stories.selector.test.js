import storiesData from '../fixtures/stories';
import {fetchTopStories} from '../../src/selectors/stories.selector';

test('should fetch to stories', () => {
  const dispatch = (result) => {
    expect(result).toEqual({
      type: 'FETCH_TOP_STORIES',
      stories: storiesData
    });
  };

  fetchTopStories()(dispatch);
});
