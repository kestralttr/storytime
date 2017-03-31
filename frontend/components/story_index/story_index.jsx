import React from 'react';
import {Link,withRouter} from 'react-router';
import StoryIndexItem from './story_index_item';
import CreateStory from '../create_story/create_story';

class StoryIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
    };
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
    return(
      <section id="story-index-master">
        <h1 className="storytime-headline"><a href="#">Storytime</a></h1>
        <h2 id="story-index-subheadline">Story List</h2>
        <ul>
          {this.props.storyIndex.map((story,idx) => (
            <StoryIndexItem key={story.id}
              story={story} />
          ))}
          <li>Placeholder for pagination</li>
        </ul>
        <CreateStory
          storyIndex={this.props.storyIndex}
          createStory={this.props.createStory}
          requestStories={this.props.requestStories} />
      </section>
    );
  }

}

export default withRouter(StoryIndex);
