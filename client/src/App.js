import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store';

import InfoContainer from './containers/InfoContainer';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import MainContainer from './containers/MainContainer';
import PageNotFound from './containers/PageNotFound';

import socketGlobalEvents from './io/socketGlobalEvents';

export const store = configureStore();

socketGlobalEvents();

export const browserHistory = createHistory();

export default class App extends Component {

  requireAuth = (component) => {
    const state = store.getState();
    
    if(!state.authReducer.token) return <Redirect to="/login" />;

    return component;
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Switch>
            <Route path="/info" exact render={() => this.requireAuth(<InfoContainer />)} />
            <Route path="/login" exact component={LoginContainer} />
            <Route path="/register" exact component={RegisterContainer} />
            <Route path="/" exact component={MainContainer} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}