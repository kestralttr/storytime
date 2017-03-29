import {RECEIVE_STORY} from '../actions/story_actions';
import {merge} from 'lodash';

const _defaultState = {
  story: null,
  errors: []
};

const StoryDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({},state);
  switch (action.type) {
    case RECEIVE_STORY:
      newState["story"] = action.story;
      newState["errors"] = [];
      return newState;
    default:
      return state;
  }
};

export default StoryDetailReducer;
