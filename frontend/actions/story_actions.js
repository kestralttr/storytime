export const REQUEST_STORIES = "REQUEST_STORIES";
export const RECEIVE_STORIES = "RECEIVE_STORIES";

export const requestStories = () => ({
  type: REQUEST_STORIES
});

export const receiveStories = (stories) => ({
  type: RECEIVE_STORIES,
  stories: stories
});
