const {GET_PLAYER_LIST, DELETE_PLAYER} = require('../global/PlayerList');
const {GET_GAME_LIST, REMOVE_EMPTY_GAME, CHECK_START_GAME} = require('../global/GameList');
const {emitToAll, emitToLobby, objectToArray} = require('../utility');

module.exports = (socket) => {
    socket.on('disconnect', function(){
        const leavingGameId = GET_PLAYER_LIST()[socket.id].joinedToGame;
        
        const isRemovedGame = REMOVE_EMPTY_GAME(leavingGameId, socket.id);
        DELETE_PLAYER(socket);

        CHECK_START_GAME(leavingGameId);

        emitToLobby({action: 'gameLobbyData', data: {gameLobbyData: GET_GAME_LIST()[leavingGameId]}, gameId: leavingGameId});
        if(isRemovedGame) emitToAll('gameList', {gameList: objectToArray(GET_GAME_LIST())});
    });
}