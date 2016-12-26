import {
  ANSWER_STORY_QUIZ,
  RETRY_STORY_QUIZ
} from '../actions/types';


export default function (state = {answers: []}, action) {
  switch (action.type) {
    case ANSWER_STORY_QUIZ:
      return {...state, answers: [...state.answers, action.payload]}
    case RETRY_STORY_QUIZ:
      return {...state, answers: []}
    default:
      return state;
  }
}
