export const REQUEST_STORIES = "REQUEST_STORIES";
export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const REQUEST_STORY = "REQUEST_STORY";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const CREATE_STORY = "CREATE_STORY";
export const UPDATE_STORY = "UPDATE_STORY";

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

export const createStory = (story) => ({
  type: CREATE_STORY,
  story: story
});

export const updateStory = (id,story) => ({
  type: UPDATE_STORY,
  id: id,
  story: story
});
