import {REQUEST_STORIES, receiveStories} from '../actions/story_actions';
import {fetchStories} from '../util/story_api_util';

const StoryMiddleware = ({getState,dispatch}) => next => action => {
  const storiesSuccess = stories => dispatch(receiveStories(stories));

    console.log("middleware accessed");

  switch(action.type) {
    case REQUEST_STORIES:
      fetchStories(storiesSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default StoryMiddleware;
