import React, { Component } from 'react';
import io from 'socket.io-client';
//import openSocket from 'socket.io-client';
import { Provider } from 'react-redux';
import configureStore from './store';
import { setSocket, setGameList } from './action/socketAction';
import { setPlayerJoinRoom } from './action/playerAction';
import MainContainer from './containers/MainContainer';

export const store = configureStore();

export const socket = io.connect('https://localhost:8080/');

store.dispatch(setSocket(socket));

socket.on('gameList', data => {
    store.dispatch(setGameList(data));
});

socket.on('enterInRoom', data => {
  store.dispatch(setPlayerJoinRoom(data));
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
