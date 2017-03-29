import React from 'react';
import {Link,withRouter} from 'react-router';
import StoryIndexItem from './story_index_item';

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
        <h1 id="story-index-headline">Storytime</h1>
        <h2 id="story-index-subheadline">Story List</h2>
        {this.props.storyIndex.map((story,idx) => (
          <StoryIndexItem key={story.id}
            story={story} />
        ))}
      </section>
    );
  }

}

export default withRouter(StoryIndex);
