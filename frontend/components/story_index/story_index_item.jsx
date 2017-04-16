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

  renderBodyIntro(body) {
    if(!body) {
      return <em>new</em>;
    } else {
      return body.slice(0,45) + "...";
    }
  }

  render() {
    return(
      <li className="story-index-item"
        onClick={this.handleClick(`story/${this.props.story.id}`)}>
        <div className="story-index-icon"></div>
        <span className="story-index-item-title">
          {this.props.story.title}
        </span><br></br>
        <span className="story-index-item-body">
          {this.renderBodyIntro(this.props.story.body)}
        </span>
      </li>
    );
  }

}

export default withRouter(StoryIndexItem);
