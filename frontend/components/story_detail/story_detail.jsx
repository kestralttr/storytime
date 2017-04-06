import React from 'react';
import {Link,withRouter} from 'react-router';
import UpdateStory from '../update_story/update_story';


class StoryDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.renderStoryTitle = this.renderStoryTitle.bind(this);
    this.renderStoryBody = this.renderStoryBody.bind(this);
  }

  componentDidMount() {
    this.props.requestStory(this.props.params.storyId);
  }

  renderStoryTitle() {
    if(this.props.storyDetail) {
      return(
        <p>{this.props.storyDetail.title}</p>
      );
    }
  }

  renderStoryBody() {
    if(!this.props.storyDetail || !this.props.storyDetail.body) {
      return(
        <p><em>Choose the first word!</em></p>
      );
    } else {
      return(
        <p>{this.props.storyDetail.body}</p>
      );
    }
  }

  render() {
    return(
      <section id="story-detail-master">
        <h1 className="storytime-headline"><a href="#">Storytime</a></h1>
        <h2 id="story-index-subheadline">{this.renderStoryTitle()}</h2>
        <div id="story-detail-body">{this.renderStoryBody()}</div>
        <UpdateStory
          storyDetail={this.props.storyDetail}
          updateStory={this.props.updateStory}
          requestStory={this.props.requestStory}/>
      </section>
    );
  }

}

export default withRouter(StoryDetail);
