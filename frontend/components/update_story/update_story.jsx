import React from 'react';
import {Link, withRouter} from 'react-router';

class UpdateStory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      storyDetail: this.props.storyDetail
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let str = this.state.body;
    if(str.includes(" ")) {
      return;
    } else {
      const story = {
        body: this.state.body
      };
      let id = this.props.params.storyId;
      this.props.updateStory(id,{story});
      let inputBox = document.getElementById("add-word-input");
      inputBox.value = "";
      this.state.body = "";
    }
  }

  updateTitle(e) {
    this.setState({body: e.target.value});
  }

  render() {
    return(
      <div id="update-story-master">
        <form>
          <span>Title: </span><input id="add-word-input" type="text"maxLength="50" onChange={this.updateTitle} /><br></br>
          <input type="submit" value="Create" onClick={this.handleSubmit}></input>
        </form>

      </div>
    );
  }
}

export default withRouter(UpdateStory);
