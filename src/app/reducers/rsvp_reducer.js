import {
  UPDATE_RSVP,
  FETCH_RSVP,
  INIT_RSVP
} from '../actions/types';

export default function (state = {loaded: false}, action) {
  switch (action.type) {
    case INIT_RSVP:
      return {loaded: true};
    case UPDATE_RSVP:
      return {...action.payload, loaded: true};
    case FETCH_RSVP:
      return {...action.payload, loaded: true};
    default:
      return state;
  }
}
