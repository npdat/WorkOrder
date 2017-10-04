const defaultState = {
  isLoggedIn: false,
  username: '',
  time: '',
  isLoading: false,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      return Object.assign({}, state, {
        isLoggedIn: true,
        username: action.username,
        resultMsg: 'Log in success',
        isLoading: false,
      });
      break;
    case 'LOG_IN_FAIL':
      return Object.assign({}, state, {
        isLoggedIn: false,
        username: action.username,
        resultMsg: 'Log in fail',
        isLoading: false,
      });
      break;
    case 'LOG_OUT':
      return Object.assign({}, state, {
        isLoggedIn: false,
        username: '',
        resultMsg: ''
      });
      break;
    case 'LOADING':
    return Object.assign({}, state, {
      isLoggedIn: false,
      username: '',
      resultMsg: '',
      isLoading: true,
    });
    break;
    break;
    default:
      return state;
  }
}
