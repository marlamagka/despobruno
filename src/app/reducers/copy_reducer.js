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

export default function (state = copyInLang('EN'), action) {
  switch (action.type) {
    case SWITCH_LANG:
      return copyInLang(action.payload);
    default:
      return state;
  }
}
