import { combineReducers } from 'redux';
import FireBaseUserReducer from './firebase_user_reducer';
import RsvpReducer from './rsvp_reducer';
import CopyReducer from './copy_reducer';
import StoryReducer from './story_reducer';

const rootReducer = combineReducers({
    currentUser: FireBaseUserReducer,
    rsvp: RsvpReducer,
    copy: CopyReducer,
    story: StoryReducer,
});

export default rootReducer;
