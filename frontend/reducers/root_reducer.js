import {combineReducers} from 'redux';
import StoryIndexReducer from './story_index_reducer';

const RootReducer = combineReducers({
  storyIndex: StoryIndexReducer
});
export default RootReducer;
