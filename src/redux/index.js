import { combineReducers } from 'redux';
import user from './user/reducer';
import sideMenu from './sidemenu/reducer';

const rootReducer = combineReducers({
  user,
  sideMenu,
});

export default rootReducer;
