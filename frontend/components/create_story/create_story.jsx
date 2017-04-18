import React from 'react';
import {Link,withRouter} from 'react-router';

class CreateStory extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      storyIndex: this.props.storyIndex,
      title: "",
      watchForNewStory: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.storyDetail && this.state.watchForNewStory) {
      this.setState({watchForNewStory: false});
      this.props.router.push(`story/${nextProps.storyDetail.id}`);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.title) {
      return;
    } else if(this.state.title.length > 50) {
      return;
    } else {
      const story = {
        title: this.state.title,
        every_word: true,
        body: ""
      };
      this.props.createStory({story});
      this.setState({watchForNewStory: true});

    }
  }

  updateTitle(e) {
    this.setState({title: e.target.value});
  }

  render() {
    return(
      <div id="create-story-master">
        <form>
          <span>Title: </span><input type="text"maxLength="50" onChange={this.updateTitle} /><input type="submit" value="Create" onClick={this.handleSubmit}></input><br></br>
          {/*
          <span>Every Word: </span><input className="radio" name="every_word" type="radio" defaultChecked/><br></br>
          <span>Every Sentence: </span><input className="radio" name="every_word" type="radio"/><br></br>
          */}
        </form>


      </div>
    );
  }

}

export default withRouter(CreateStory);
