import * as types from './actionTypes';
import authApi from '../../services/AuthApi';

export function loginSuccess(username) {
  return {
      type: types.LOG_IN_SUCCESS,
      username: username
  };
};

export function loginFail(error) {
  return {
      type: types.LOG_IN_FAIL,
      resultMsg: error
  };
};

export function loading() {
  return {
    type: types.LOADING,
  };
}

export function login(username, password) {
  return async (dispatch) => {
    return authApi.login(username, password).then(response => {
      if (response.status == '200') {
        dispatch(loginSuccess(username));
      } else {
        dispatch(loginFail());
      }
    }).catch(error => {
      throw(error);
      dispatch(loginFail(error));
    });
  };
};

export function logout() {
  return {
    type: types.LOG_OUT,
  };
};
