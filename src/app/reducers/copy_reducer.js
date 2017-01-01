import {
  SWITCH_LANG,
} from '../actions/types';

import copy from '../../copy.js'

function copyInLang(lang) {
  const res = {_lang: lang}
  Object.keys(copy).forEach(k => {
    res[k] = copy[k][lang]
  })
  return res
}

var navLang = window.navigator.userLanguage || window.navigator.language
if (navLang.startsWith('en')) {
  navLang = 'EN'
}
if (navLang === 'el') {
  navLang = 'GR'
}
if (navLang === 'fr') {
  navLang = 'FR'
}

var defaultLang = localStorage._lang || navLang

export default function (state = copyInLang(defaultLang), action) {
  switch (action.type) {
    case SWITCH_LANG:
      localStorage._lang = action.payload
      return copyInLang(action.payload);
    default:
      return state;
  }
}
