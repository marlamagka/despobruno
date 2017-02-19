import {
  SWITCH_LANG,
} from '../actions/types';

import copy from '../../copy';

function copyInLang(lang) {
  const res = { _lang: lang };
  Object.keys(copy).forEach((k) => {
    res[k] = copy[k][lang];
  });
  return res;
}

/* global window */
let navLang = window.navigator.userLanguage || window.navigator.language;
if (navLang === 'el') {
  navLang = 'GR';
} else if (navLang === 'fr') {
  navLang = 'FR';
} else {
  navLang = 'EN';
}

const defaultLang = localStorage._lang || navLang;

export default function (state = copyInLang(defaultLang), action) {
  switch (action.type) {
  case SWITCH_LANG:
    localStorage._lang = action.payload;
    return copyInLang(action.payload);
  default:
    return state;
  }
}
