import {connect} from 'react-redux';
import StoryIndex from './story_index';
import {requestStories} from '../../actions/story_actions';

const mapStateToProps = state => ({
  storyIndex: state.storyIndex.stories
});

const mapDispatchToProps = dispatch => ({
  requestStories: () => dispatch(requestStories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex);
