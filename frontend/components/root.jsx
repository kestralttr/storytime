import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, IndexRoute} from 'react-router-dom';
import App from './app';
import StoryIndexContainer from './story_index/story_index_container';
import StoryDetailContainer from './story_detail/story_detail_container';

const Root = ({ store }) => {

  console.log(StoryDetailContainer);
  return (
    <Provider store={store}>
      <Router>
        <App>
          <Route exact={true} path="/" component={StoryIndexContainer}></Route>
          <Route path="stories/:storyId" component={StoryDetailContainer}></Route>
        </App>
      </Router>
    </Provider>
  );
};

export default Root;
