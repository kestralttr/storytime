import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import StoryIndexContainer from './story_index/story_index_container';
import StoryDetailContainer from './story_detail/story_detail_container';

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={StoryIndexContainer} />
          <Route path="story/:storyId" component={StoryDetailContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
