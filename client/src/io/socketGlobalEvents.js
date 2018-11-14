import socket from './socketConnect';
import {store} from '../App';

import { setSocket, setGameList } from '../action/socketAction';
import { setPlayerJoinRoom, setPlayerPosition } from '../action/playerAction';
import { setGameLobbyData } from '../action/gameLobbyAction';
import { addNewMessage } from '../action/chatAction'

export default function socketGlobalEvents() {
    store.dispatch(setSocket(socket));

    socket.on('loging', data => {
        console.log('logger', data)
    });

    socket.on('gameList', data => {
        store.dispatch(setGameList(data));
    });

    socket.on('enterInRoom', data => {
        store.dispatch(setPlayerJoinRoom(data));
    });

    socket.on('changePosition', data => {
        store.dispatch(setPlayerPosition(data));
    });

    socket.on('gameLobbyData', data => {
        store.dispatch(setGameLobbyData(data));
    });

    socket.on('sendMessage', data => {
        store.dispatch(addNewMessage(data));
    });

    socket.emit('getGameList'); //fetching game list for initital state
}