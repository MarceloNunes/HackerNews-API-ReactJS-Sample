import axios from 'axios';
import config from '../config/config';
import { fetchTopStoriesAction } from '../actions/stories.actions';

export const fetchTopStories = (data) =>
  (dispatch) => axios({
    method: 'get',
    url: config.baseUrl + '/topstories.json',
    data
  })
  .then(response => {
    dispatch(fetchTopStoriesAction(response.data && response.data.slice(0, 10)));
  })
  .catch(error => {
    throw (error);
  });