const {GET_GAME_LIST} = require('../global/GameList');
const {GET_PLAYER_LIST, SET_PLAYER_PROPERTY} = require('../global/PlayerList');
const {REMOVE_EMPTY_GAME, CHECK_START_GAME} = require('../global/GameList');
const {objectToArray, emitToAll, emitToLobby} = require('../utility');

module.exports = (socket) => {
    socket.on('leaveRoom', () => {
        const leavingGameId = GET_PLAYER_LIST()[socket.id].joinedToGame;
        SET_PLAYER_PROPERTY({id: socket.id, property: 'joinedToGame', value: false});
        SET_PLAYER_PROPERTY({id: socket.id, property: 'position', value: 'lobby'});
        SET_PLAYER_PROPERTY({id: socket.id, property: 'ready', value: false});
        REMOVE_EMPTY_GAME(leavingGameId, socket.id);

        CHECK_START_GAME(leavingGameId);

        socket.emit('enterInRoom', {joinedToGame: false});
        socket.emit('changePosition', {position: 'lobby'});
        emitToLobby({action: 'gameLobbyData', data: {gameLobbyData: GET_GAME_LIST()[leavingGameId]}, gameId: leavingGameId});
        emitToAll('gameList', {gameList: objectToArray(GET_GAME_LIST())});
    });
}