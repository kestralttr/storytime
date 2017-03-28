import React from 'react';
import {Link,withRouter} from 'react-router';

class StoryIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="story-index-master">
        <h1>Component is online!!!</h1>
      </div>
    );
  }

}

export default withRouter(StoryIndex);
