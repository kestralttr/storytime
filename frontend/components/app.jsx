import React from 'react';
import {Link,withRouter} from 'react-router';


const App = ({ children }) => (
  <div>
    {children}
  </div>
);

export default withRouter(App);
