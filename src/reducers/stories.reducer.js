import {FETCH_TOP_STORIES} from '../actions/actionTypes';

export const StoriesReducer = (state = [], action) => {
  if (action.type === FETCH_TOP_STORIES) {
    return action.stories;
  }

  return state;
};
