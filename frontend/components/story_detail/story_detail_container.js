import {connect} from 'react-redux';
import StoryDetail from './story_detail';
import {requestStory,updateStory} from '../../actions/story_actions';


const mapStateToProps = state => ({
  storyDetail: state.storyDetail.story
});

const mapDispatchToProps = dispatch => ({
  requestStory: (id) => dispatch(requestStory(id)),
  updateStory: (id,story) => dispatch(updateStory(id,story))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryDetail);
