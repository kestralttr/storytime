import {connect} from 'react-redux';
import StoryIndex from './story_index';
import {requestStories, requestStory} from '../../actions/story_actions';

const mapStateToProps = state => ({
  storyIndex: state.storyIndex.stories,
  state: state
});

const mapDispatchToProps = dispatch => ({
  requestStories: () => dispatch(requestStories()),
  requestStory: (id) => dispatch(requestStory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex);
