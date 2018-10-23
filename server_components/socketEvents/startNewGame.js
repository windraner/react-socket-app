const {GET_GAME_LIST} = require('../global/GameList');
const {GET_PLAYER_LIST, SET_PLAYER_PROPERTY} = require('../global/PlayerList');
const {emitToLobby} = require('../utility');

module.exports = (socket) => {
    socket.on('startNewGame', () => {
        // const gameId = GET_PLAYER_LIST()[socket.id].joinedToGame;
        // SET_PLAYER_PROPERTY({id: socket.id, property: 'ready', value: !GET_PLAYER_LIST()[socket.id].ready});

        // emitToLobby({action: 'gameLobbyData', data: {gameLobbyData: GET_GAME_LIST()[gameId]}, gameId: gameId});
    });
}