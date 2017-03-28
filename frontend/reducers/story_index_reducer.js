
import {merge} from "lodash";

const _defaultState = {

};

const StoryIndexReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  return state;
};

export default StoryIndexReducer;
