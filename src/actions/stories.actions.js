import {
  FETCH_COMMENTS,
  FETCH_TOP_STORIES
} from './actionTypes';

export const fetchTopStoriesAction = stories => {
  return {
    type: FETCH_TOP_STORIES,
    stories
  };
};

export const fetchCommentsAction = stories => {
  return {
    type: FETCH_COMMENTS,
    stories
  };
};
