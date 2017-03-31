import React from 'react';
import {Link,withRouter} from 'react-router';

class CreateStory extends React.Component{

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div id="create-story-master">
        <form>
          <span>Title: </span><input /><br></br>
          <span>Every Word: </span><input name="every_word" type="radio" defaultChecked/>
          <span>Every Sentence: </span><input name="every_word" type="radio"/><br></br>
          <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
        </form>


      </div>
    );
  }

}

export default withRouter(CreateStory);
