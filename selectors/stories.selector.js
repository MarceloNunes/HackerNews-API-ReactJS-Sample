import axios from 'axios';
import config from '../config/config';
import { fetchTopStoriesAction } from '../actions/stories.actions';

export const fetchTopStories = () => async dispatch => {
  const response = await axios.get(config.baseUrl + '/topstories.json');
  const stories = await addStories(response.data);

  dispatch(fetchTopStoriesAction(stories));
};

const addStories = async topStoriesIds => {
  const stories = [];

  while (topStoriesIds.length > 0 && stories.length < 10) {
    const story = await fetchItem(topStoriesIds.shift());

    if (!story.deleted && !story.dead) {
      addComments(story);
      stories.push(story);
    }
  }

  return stories;
};

const fetchItem = async id => {
  const response = await axios.get(config.baseUrl + '/item/' + id + '.json');
  return response.data;
};

const addComments = async story => {
  let count = 0;

  const addSubComments = async item => {
    item.comments = [];

    while (count < 20 && item.kids && item.kids.length > 0) {
      const subItem = await fetchItem(item.kids.shift());

      if (!subItem.deleted && !subItem.dead) {
        item.comments.push(subItem);
        count++;

        if (subItem.kids && subItem.kids.length > 0) {
          addSubComments(subItem);
        }
      }
    }
  }

  return addSubComments(story);
};

