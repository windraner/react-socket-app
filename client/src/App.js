import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import { Provider } from 'react-redux';
import configureStore from './store';
import { setSocket, setGameList } from './action/socketAction';
import MainContainer from './containers/MainContainer';

export const store = configureStore();

export const socket = openSocket('http://localhost:5000/');

store.dispatch(setSocket(socket));

socket.on('gameList', data => {
    store.dispatch(setGameList(data));
});

socket.emit('getGameList'); //fetching game list for initital state

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer/>
      </Provider>
    );
  }
}