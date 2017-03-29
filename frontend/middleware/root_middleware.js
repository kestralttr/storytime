import {applyMiddleware} from 'redux';
import StoryMiddleware from './story_middleware';

const RootMiddleware = applyMiddleware(
  StoryMiddleware
);

export default RootMiddleware;
