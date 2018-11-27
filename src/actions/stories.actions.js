import {
  FETCH_TOP_STORIES
} from './actionTypes';

export const fetchTopStoriesAction = stories => {
  return {
    type: FETCH_TOP_STORIES,
    stories
  }
};