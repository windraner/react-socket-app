import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import MainContainer from './containers/MainContainer';

import socketGlobalEvents from './io/socketGlobalEvents';

export const store = configureStore();

socketGlobalEvents();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer/>
      </Provider>
    );
  }
}