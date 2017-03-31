import React from 'react';
import {Link,withRouter} from 'react-router';

class CreateStory extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      storyIndex: this.props.storyIndex
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  componentWillReceiveProps(nextProps) {

  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.title) {
      return;
    } else {
      const story = {
        title: this.state.title,
        every_word: true
      };
      this.props.createStory({story});
      window.location.reload();
    }
  }

  updateTitle(e) {
    this.setState({title: e.target.value});
  }

  render() {
    console.log(this.props);
    return(
      <div id="create-story-master">
        <form>
          <span>Title: </span><input type="text"maxLength="50" onChange={this.updateTitle} /><br></br>
          <span>Every Word: </span><input className="radio" name="every_word" type="radio" defaultChecked/><br></br>
          <span>Every Sentence: </span><input className="radio" name="every_word" type="radio"/><br></br>
          <input type="submit" value="Create" onClick={this.handleSubmit}></input>
        </form>


      </div>
    );
  }

}

export default withRouter(CreateStory);
