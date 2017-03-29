import React from 'react';
import {withRouter} from 'react-router';

class StoryIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(url) {
    return e => {
      this.props.history.push(url);
    };
  }

  render() {
    return(
      <li className="story-index-item"
        onClick={this.handleClick(`story/${this.props.story.id}`)}>
        <span className="story-index-item-title">{this.props.story.title}</span><br></br>
        <span className="story-index-item-body">{this.props.story.body}</span>
      </li>
    );
  }

}

export default withRouter(StoryIndexItem);
