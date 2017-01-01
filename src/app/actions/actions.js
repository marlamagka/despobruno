import FireBaseTools from '../utils/firebase';
import {
  LOGIN_WITH_PROVIDER_FIREBASE,
  REGISTER_FIREBASE_USER,
  LOGIN_FIREBASE_USER,
  FETCH_FIREBASE_USER,
  UPDATE_FIREBASE_USER,
  INIT_RSVP,
  UPDATE_RSVP,
  FETCH_RSVP,
  CHANGE_FIREBASE_USER_PASSWORD,
  FIREBASE_PASSWORD_RESET_EMAIL,
  LOGOUT_FIREBASE_USER,
  SWITCH_LANG,
  ANSWER_STORY_QUIZ,
  RETRY_STORY_QUIZ
} from './types';


export function loginWithProvider(provider) {
    const request = FireBaseTools.loginWithProvider(provider);
    return {
        type: LOGIN_WITH_PROVIDER_FIREBASE,
        payload: request,
    };
}

export function registerUser(user) {
    const request = FireBaseTools.registerUser(user);
    return {
        type: REGISTER_FIREBASE_USER,
        payload: request,
    };
}

export function loginUser(user) {
    const request = FireBaseTools.loginUser(user);
    return {
        type: LOGIN_FIREBASE_USER,
        payload: request,
    };
}

export function fetchUser() {
    const request = FireBaseTools.fetchUser();
    return {
        type: FETCH_FIREBASE_USER,
        payload: request,
    };
}

export function fetchRsvp() {
    const request = FireBaseTools.fetchRsvp();
    return {
        type: FETCH_RSVP,
        payload: request,
    };
}


export function updateUser(user) {
    const request = FireBaseTools.updateUserProfile(user);
    return {
        type: UPDATE_FIREBASE_USER,
        payload: request,
    };
}

export function initRsvp() {
  return {
    type: INIT_RSVP
  };
}


export function updateRsvp(data) {
    const request = FireBaseTools.updateRsvp(data);
    return {
        type: UPDATE_RSVP,
        payload: request,
    };
}


export function changePassword(newPassword) {
    const request = FireBaseTools.changePassword(newPassword);
    return {
        type: CHANGE_FIREBASE_USER_PASSWORD,
        payload: request,
    };
}

export function resetPasswordEmail(email) {
    const request = FireBaseTools.resetPasswordEmail(email);
    return {
        type: FIREBASE_PASSWORD_RESET_EMAIL,
        payload: request,
    };
}

export function logoutUser(user) {
    const request = FireBaseTools.logoutUser(user);
    return {
        type: LOGOUT_FIREBASE_USER,
        payload: request,
    };
}

export function switchLang(lang) {
    return {
        type: SWITCH_LANG,
        payload: lang,
    };
}

export function answerStoryQuiz(answer) {
  return {
    type: ANSWER_STORY_QUIZ,
    payload: answer
  }
}

export function retryStoryQuiz() {
  return {
    type: RETRY_STORY_QUIZ,
  }
}
