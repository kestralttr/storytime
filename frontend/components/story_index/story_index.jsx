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
    this.requestStories = this.requestStories.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.storyDetail && newProps.storyDetail.story) {
      this.props.clearStory();
      console.log(this.props);
    }
  }

  componentDidMount() {
    this.props.requestStories();

    if (!document.getElementById("rvJS")) {
      let scriptTag = document.createElement("script");
      scriptTag.id = "rvJS";
      scriptTag.src = "http://code.responsivevoice.org/responsivevoice.js";
      scriptTag.async = true;

      document.head.appendChild(scriptTag);
    }
  }

  requestStories() {
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
        <div id="storytime-index-nav-bar">
          <div id="storytime-index-splash-link">
            <a href="#">Storytime</a>
          </div>
          <div id="storytime-index-stories-link" onClick={this.requestStories}>
            Refresh Stories
          </div>
        </div>
        <h1 className="storytime-headline">Stories</h1>
        <ul>
          {this.props.storyIndex.map((story,idx) => (
            <StoryIndexItem key={story.id}
              story={story} />
          ))}
          {/* <li>Placeholder for pagination</li> */ }
        </ul>
        <CreateStory
          storyIndex={this.props.storyIndex}
          storyDetail={this.props.storyDetail}
          createStory={this.props.createStory}
          requestStories={this.props.requestStories} />
      </section>
    );
  }

}

export default withRouter(StoryIndex);
