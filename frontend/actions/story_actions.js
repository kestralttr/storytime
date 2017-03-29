export const REQUEST_STORIES = "REQUEST_STORIES";
export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const REQUEST_STORY = "REQUEST_STORY";
export const RECEIVE_STORY = "RECEIVE_STORY";

export const requestStories = () => ({
  type: REQUEST_STORIES
});

export const receiveStories = (stories) => ({
  type: RECEIVE_STORIES,
  stories: stories
});

export const requestStory = (id) => ({
  type: REQUEST_STORY,
  id: id
});

export const receiveStory = (story) => ({
  type: RECEIVE_STORY,
  story: story
});
