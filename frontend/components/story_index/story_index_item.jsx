import React from 'react';
import {withRouter} from 'react-router';

class StoryIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return e => {
      alert("Click has been made");
    };
  }

  render() {
    return(
      <li className="story-index-item"
        onClick={this.handleClick()}>
        <span className="story-index-item-title">{this.props.story.title}</span><br></br>
        <span className="story-index-item-body">{this.props.story.body}</span>
      </li>
    );
  }

}

export default withRouter(StoryIndexItem);
