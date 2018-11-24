import { FETCH_COMMENT, FETCH_STORY, FETCH_TOP_STORIES } from './actionTypes';

export const fetchTopStoriesAction = stories => ({
    type: FETCH_TOP_STORIES,
    stories
});

export const fetchStoryAction = story => ({
    type: FETCH_STORY,
    story
});

export const fetchCommentAction = comment => ({
    type: FETCH_COMMENT,
    comment
});
