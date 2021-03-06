import {REQUEST_STORIES, receiveStories, CREATE_STORY, UPDATE_STORY, REQUEST_STORY, receiveStory} from '../actions/story_actions';
import {fetchStories, fetchStory, createStory, updateStory} from '../util/story_api_util';

const StoryMiddleware = ({getState,dispatch}) => next => action => {
  const storiesSuccess = stories => dispatch(receiveStories(stories));
  const storySuccess = story => dispatch(receiveStory(story));
  const createStorySuccess = story => dispatch(receiveStory(story));
  const updateStorySuccess = story => dispatch(receiveStory(story));

  switch(action.type) {
    case REQUEST_STORIES:
      fetchStories(storiesSuccess);
      return next(action);
    case REQUEST_STORY:
      fetchStory(action.id,storySuccess);
      return next(action);
    case CREATE_STORY:
      createStory(action.story,createStorySuccess);
      return next(action);
    case UPDATE_STORY:
      updateStory(action.id,action.story,updateStorySuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default StoryMiddleware;
