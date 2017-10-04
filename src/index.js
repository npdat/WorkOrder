import React from 'react';
import { connect, Provider } from 'react-redux';
import rootReducer from './redux';
import { createStore, applyMiddleware } from 'redux';
import { login } from './redux/user/actions';
import thunk from 'redux-thunk';
import { Router } from 'react-native-router-flux';
import AppRoutes from './navigation';
import Database from './services/Database/DatabaseManager';

const store = createStore(rootReducer, applyMiddleware(thunk));

const RouteWithRedux = connect()(Router);

const AppContainer = () => {
  Database.createTable();
  return (
    <Provider store={store}>
      <RouteWithRedux scenes={AppRoutes} />
    </Provider>
  );
}

export default AppContainer;
