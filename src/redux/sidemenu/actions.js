import * as types from './actionTypes';

export function toggle() {
  return {
    type: types.SIDEMENU_TOGGLE,
  };
}

export function open() {
  return {
    type: types.SIDEMENU_OPEN,
  };
}

export function close() {
  return {
    type: types.SIDEMENU_CLOSE,
  };
}
