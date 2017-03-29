import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, IndexRoute} from 'react-router-dom';
import App from './app';
import StoryIndexContainer from './story_index/story_index_container';
import StoryDetailContainer from './story_detail/story_detail_container';

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router>
        <App>
          <Route path="/" component={StoryIndexContainer} />
          <Route path="stories/:storyId" component={StoryDetailContainer} />
        </App>
      </Router>
    </Provider>
  );
};

export default Root;
