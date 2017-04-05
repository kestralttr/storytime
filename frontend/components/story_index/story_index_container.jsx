import {connect} from 'react-redux';
import StoryIndex from './story_index';
import {requestStories, requestStory, clearStory, createStory} from '../../actions/story_actions';

const mapStateToProps = state => ({
  storyIndex: state.storyIndex.stories,
  storyDetail: state.storyDetail.story,
  state: state
});

const mapDispatchToProps = dispatch => ({
  requestStories: () => dispatch(requestStories()),
  requestStory: (id) => dispatch(requestStory(id)),
  clearStory: () => dispatch(clearStory()),
  createStory: (story) => dispatch(createStory(story))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex);
