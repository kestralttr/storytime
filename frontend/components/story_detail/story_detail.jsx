import React from 'react';
import {Link,withRouter} from 'react-router';


class StoryDetail extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);

    this.renderStoryBody = this.renderStoryBody.bind(this);
  }

  componentDidMount() {
    console.log(this.props.params.storyId);
    this.props.requestStory(this.props.params.storyId);
  }

  renderStoryBody() {
    if(this.props.storyDetail) {
      console.log(this.props.storyDetail.body);
      return(
        <p>{this.props.storyDetail.body}</p>
      );
    }
  }

  render() {
    console.log("story body",this.renderStoryBody());
    return(
      <section id="story-detail-master">
        <h1 className="storytime-headline"><a href="#">Storytime</a></h1>
        <div id="story-detail-body">{this.renderStoryBody()}</div>
      </section>
    );
  }

}

export default withRouter(StoryDetail);
