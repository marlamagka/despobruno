import { combineReducers } from 'redux';
import CopyReducer from './copy_reducer';
import StoryReducer from './story_reducer';

const rootReducer = combineReducers({
  copy: CopyReducer,
  story: StoryReducer,
});

export default rootReducer;
