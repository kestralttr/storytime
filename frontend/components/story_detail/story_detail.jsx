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
    this.requestStory = this.requestStory.bind(this);
    this.returnToStoryIndex = this.returnToStoryIndex.bind(this);
  }

  componentDidMount() {
    this.props.requestStory(this.props.params.storyId);
  }

  requestStory() {
    this.props.requestStory(this.props.params.storyId);
  }

  returnToStoryIndex() {
    return this.props.router.push("stories");
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
    console.log(this.props);
    return(
      <section id="story-detail-master">
        <div id="storytime-detail-nav-bar">
          <div id="storytime-detail-splash-link" onClick={this.returnToStoryIndex}>
            Stories
          </div>
          <div id="storytime-detail-stories-link" onClick={this.requestStory}>
            Refresh Story
          </div>
        </div>
        <h2>{this.renderStoryTitle()}</h2>
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
