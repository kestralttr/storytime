import {combineReducers} from 'redux';
import StoryIndexReducer from './story_index_reducer';
import StoryDetailReducer from './story_detail_reducer';

const RootReducer = combineReducers({
  storyIndex: StoryIndexReducer,
  storyDetail: StoryDetailReducer
});
export default RootReducer;
