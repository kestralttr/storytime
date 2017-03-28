import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, IndexRoute} from 'react-router-dom';
import App from './app';
import StoryIndexContainer from './story_index/story_index_container';

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router>
        <App>
          <Route exact={true} path="/" component={StoryIndexContainer}></Route>
        </App>
      </Router>
    </Provider>
  );
};

export default Root;
