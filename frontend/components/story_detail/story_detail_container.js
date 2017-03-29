import {connect} from 'react-redux';
import StoryDetail from './story_detail';
import {requestStory} from '../../actions/story_actions';


const mapStateToProps = state => ({
  storyDetail: state.storyDetail.story
});

const mapDispatchToProps = dispatch => ({
  requestStory: (id) => dispatch(requestStory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryDetail);
