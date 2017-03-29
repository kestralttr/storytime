import React from 'react';
import {Link,withRouter} from 'react-router';


class StoryDetail extends React.Component {

  constructor(props) {
    super(props);
    console.log("in constructor");
  }

  componentDidMount() {
    console.log(this.props);
    console.log("hello");
  }

  render() {
    return(
      <div style={"background-color:purple;"}>
        <p>You have reached a new component!</p>
      </div>
    );
  }

}

export default withRouter(StoryDetail);
