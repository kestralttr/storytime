import {REQUEST_STORIES, receiveStories, REQUEST_STORY, receiveStory} from '../actions/story_actions';
import {fetchStories, fetchStory} from '../util/story_api_util';

const StoryMiddleware = ({getState,dispatch}) => next => action => {
  const storiesSuccess = stories => dispatch(receiveStories(stories));
  const storySuccess = story => dispatch(receiveStory(story));

  switch(action.type) {
    case REQUEST_STORIES:
      fetchStories(storiesSuccess);
      return next(action);
    case REQUEST_STORY:
      fetchStory(storySuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default StoryMiddleware;
