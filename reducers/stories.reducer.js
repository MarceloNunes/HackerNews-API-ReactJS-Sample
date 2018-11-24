import { FETCH_TOP_STORIES } from '../actions/actionTypes';

export const StoriesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TOP_STORIES:
      return action.stories;
    default:
      return state;
  }
};

export default StoriesReducer;