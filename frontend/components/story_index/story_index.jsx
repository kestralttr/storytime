import React from 'react';
import {Link,withRouter} from 'react-router';

class StoryIndex extends React.Component {

  constructor(props) {
    super(props);

    this.renderOutStories = this.renderOutStories.bind(this);
  }

  componentDidMount() {
    this.props.requestStories();
  }

  renderOutStories(storyList) {
    storyList.forEach(function(story) {
      return(
        <p>{story.title}</p>
      );
    });
  }

  render() {
    console.log(this.props);
    return(
      <section id="story-index-master">
        <h1>Storytime</h1>
        {this.props.storyIndex.map(story => (
          <p key={story.id}>{story.title}</p>
        ))}
      </section>
    );
  }

}

export default withRouter(StoryIndex);
