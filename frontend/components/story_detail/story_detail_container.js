import {connect} from 'react-redux';
import StoryDetail from './story_detail';


const mapStateToProps = state => ({
  storyDetail: state
});

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(
  mapStateToProps
)(StoryDetail);
