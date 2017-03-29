import {RECEIVE_STORIES} from "../actions/story_actions";
import {merge} from "lodash";

const _defaultState = {
  stories: [],
  errors: []
};

const StoryIndexReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({},state);
  switch (action.type) {
    case RECEIVE_STORIES:
      newState["stories"] = action.stories;
      newState["erros"] = [];
      return newState;
    default:
      return state;
  }
};

export default StoryIndexReducer;
