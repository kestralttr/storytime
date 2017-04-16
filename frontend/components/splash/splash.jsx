import React from 'react';
import {Link,withRouter} from 'react-router';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      backgrounds: {
        0: "/assets/bedroom1.jpg",
        1: "/assets/forest1.jpg",
        2: "/assets/hallway1.jpg",
        3: "/assets/stars1.jpg",
        4: "/assets/street2.jpg"
      }
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleReload = this.handleReload.bind(this);
  }

  componentDidMount() {
    let selector = Math.floor(Math.random() * 5);

    $("#splash-background").css("background-image", `url('${this.state.backgrounds[selector]}')`);
    window.setTimeout(() => (
      $("#splash-background").fadeTo(2000,0.5,"linear")
    ),750);
  }

  handleReload() {
    location.reload();
  }

  handleClick(e) {
    return this.props.router.push("stories");
  }

  render() {
    return(
      <div id="splash-master-container">
        <div id="splash-background"></div>
        <div id="splash-content-container">
          <div id="splash-h1-spacer"></div>
          <h1 onClick={this.handleReload}>Storytime</h1>
          <div id="splash-instructions-container">
            Tell your story, one word at a time.<br></br><br></br>
            Here you can bring stories to life<br></br>
            with others by taking turns<br></br>
            adding words.<br></br>
          </div>
          <div id="splash-button" onClick={this.handleClick}>Enter</div>
        </div>
      </div>
    );
  }

}

export default withRouter(Splash);