import React from 'react';
import {Link,withRouter} from 'react-router';


class StoryDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.renderStoryBody = this.renderStoryBody.bind(this);
  }

  componentDidMount() {
    this.props.requestStory(this.props.params.storyId);
  }

  renderStoryBody() {
    if(this.props.storyDetail) {
      return(
        <p>{this.props.storyDetail.body}</p>
      );
    }
  }

  render() {
    return(
      <section id="story-detail-master">
        <h1 className="storytime-headline"><a href="#">Storytime</a></h1>
        <div id="story-detail-body">{this.renderStoryBody()}</div>
      </section>
    );
  }

}

export default withRouter(StoryDetail);
