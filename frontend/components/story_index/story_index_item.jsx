import React from 'react';
import {withRouter} from 'react-router';

class StoryIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.renderBodyIntro = this.renderBodyIntro.bind(this);
  }

  handleClick(url) {
    return e => {
      this.props.router.push(url);
    };
  }

  renderBodyIntro() {
  }

  render() {
    return(
      <li className="story-index-item"
        onClick={this.handleClick(`story/${this.props.story.id}`)}>
        <span className="story-index-item-title">{this.props.story.title}</span><br></br>
        <span className="story-index-item-body">{this.props.story.body.slice(0,50) + "..."}</span>
      </li>
    );
  }

}

export default withRouter(StoryIndexItem);
