import {
  SWITCH_LANG,
  ANSWER_STORY_QUIZ,
  RETRY_STORY_QUIZ,
} from './types';


export function switchLang(lang) {
  return {
    type: SWITCH_LANG,
    payload: lang,
  };
}

export function answerStoryQuiz(answer) {
  return {
    type: ANSWER_STORY_QUIZ,
    payload: answer,
  };
}

export function retryStoryQuiz() {
  return {
    type: RETRY_STORY_QUIZ,
  };
}
