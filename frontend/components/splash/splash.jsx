import React from 'react';
import {Link,withRouter} from 'react-router';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      backgrounds: {
        0: "/assets/bedroom1.jpg",
        1: "/assets/forest1.jpg",
        2: "/assets/walk1.jpg",
        3: "/assets/stars1.jpg",
        4: "/assets/street2.jpg",
        5: "/assets/shoreline1.jpg",
        6: "/assets/trees1.jpg"
      }
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleReload = this.handleReload.bind(this);
  }

  componentDidMount() {
    let selector = Math.floor(Math.random() * 7);

    $("#splash-background").css("background-image", `url('${this.state.backgrounds[selector]}')`);
    window.setTimeout(() => (
      $("#splash-background").fadeTo(2000,0.5,"linear")
    ),750);

    if (!document.getElementById("rvJS")) {
      let scriptTag = document.createElement("script");
      scriptTag.id = "rvJS";
      scriptTag.src = "https://code.responsivevoice.org/responsivevoice.js";
      scriptTag.async = true;

      document.head.appendChild(scriptTag);
    }
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
          Here you can create stories and bring<br></br>
            them to life with others by taking<br></br>
            turns adding words.<br></br>
          </div>
          <div id="splash-button" onClick={this.handleClick}>Enter</div>
        </div>
      </div>
    );
  }

}

export default withRouter(Splash);
