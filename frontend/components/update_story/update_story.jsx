import React from 'react';
import {Link, withRouter} from 'react-router';
import * as Cookies from "js-cookie";

class UpdateStory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      storyDetail: this.props.storyDetail
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTrackerKeyMatch = this.handleTrackerKeyMatch.bind(this);
    this.hideErrorMessage = this.hideErrorMessage.bind(this);
    this.toggleReading = this.toggleReading.bind(this);
  }

  componentDidMount() {
    if (!document.getElementById("rvJS")) {
      let scriptTag = document.createElement("script");
      scriptTag.id = "rvJS";
      scriptTag.src = "https://code.responsivevoice.org/responsivevoice.js";
      scriptTag.async = true;

      document.head.appendChild(scriptTag);
    }
  }

  componentWillUnmount() {
    responsiveVoice.cancel();
  }

  handleTrackerKeyMatch() {
    // let errorMessage = document.getElementById("error-message");
    // errorMessage.innerHTML = "Apologies.  Someone else must contribute before you can add another word.";
    $("#update-story-error-container").css("display", "block");
    $("#update-story-error-container").fadeTo(500,1,"linear");
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!Cookies.get('storytimeTrackerKey')) {
      let milliseconds = Math.round(new Date().getTime());
      Cookies.set('storytimeTrackerKey', milliseconds,{expires: 1/96});
    }
    let userTrackerKey = Cookies.get('storytimeTrackerKey');
    if(userTrackerKey === this.props.storyDetail.tracker_key) {
      this.handleTrackerKeyMatch();
      return;
    }
    if(!this.state.body) {
      return;
    }
    let arr = this.state.body.split("");
    let idx = 0;
    let containsSpace = false;
    while(idx < arr.length) {
      if(arr[idx] === " ") {
        containsSpace = true;
      }
      idx++;
    }
    if(containsSpace === true) {
      return;
    } else {
      let first = arr[0];
      let rest = arr.slice(1,arr.length).join("").toLowerCase();
      let submission = first + rest;

      const story = {
        body: submission,
        tracker_key: userTrackerKey
      };
      let id = this.props.params.storyId;
      this.props.updateStory(id,{story});
      let inputBox = document.getElementById("add-word-input");
      inputBox.value = "";
      this.state.body = "";
    }
  }

  hideErrorMessage() {
    $("#update-story-error-container").fadeTo(500,0,"linear");
    window.setTimeout(() => (
      $("#update-story-error-container").css("display", "none")
    ),500);
  }

  toggleReading() {
    let playPauseButton = document.getElementById("play-pause-button");

    if(!responsiveVoice.isPlaying() && this.props.storyDetail) {
      let body = this.props.storyDetail.body;
      playPauseButton.innerHTML = "&#9724;";
      let switchBack = function() {
        playPauseButton.innerHTML = "&#9658;";
      }
      responsiveVoice.speak(body, "UK English Male", {onend: switchBack});
    } else if(responsiveVoice.isPlaying() && this.props.storyDetail) {
      playPauseButton.innerHTML = "&#9658;";
      responsiveVoice.cancel();
    }
  }

  updateTitle(e) {
    this.setState({body: e.target.value});
  }

  render() {
    return(
      <div id="update-story-master">
        <div id="update-story-error-container" onClick={this.hideErrorMessage}>
          <p>
            As the most recent contributor to this story, you'll have to wait either 15 minutes, or until another person contributes before you can add another word.  Keep checking back!
          </p>
        </div>
        <form>
          <span>Next word: </span><input id="add-word-input" type="text"maxLength="50" autoComplete="off" onChange={this.updateTitle} /><input type="submit" value="Create" onClick={this.handleSubmit}></input><br></br>
          <p id="error-message"></p>
        </form>
        <div id="play-pause-button" onClick={this.toggleReading}>&#9658;</div>

      </div>
    );
  }
}

export default withRouter(UpdateStory);
