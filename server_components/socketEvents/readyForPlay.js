const {GET_GAME_LIST, CHECK_START_GAME} = require('../global/GameList');
const {GET_PLAYER_LIST, SET_PLAYER_PROPERTY} = require('../global/PlayerList');
const {emitToLobby} = require('../utility');

module.exports = (socket) => {
    socket.on('readyForPlay', () => {
        const gameId = GET_PLAYER_LIST()[socket.id].joinedToGame;
        SET_PLAYER_PROPERTY({id: socket.id, property: 'ready', value: !GET_PLAYER_LIST()[socket.id].ready});

        CHECK_START_GAME(gameId);

        emitToLobby({action: 'gameLobbyData', data: {gameLobbyData: GET_GAME_LIST()[gameId]}, gameId: gameId});
    });
}