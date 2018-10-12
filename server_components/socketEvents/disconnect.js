const {GET_PLAYER_LIST, DELETE_PLAYER} = require('../global/PlayerList');
const {GET_GAME_LIST, REMOVE_EMPTY_GAME} = require('../global/GameList');
const {emitToAll, objectToArray} = require('../utility');

module.exports = (socket) => {
    socket.on('disconnect', function(){
        const leavingGameId = GET_PLAYER_LIST()[socket.id].joinedToGame;
        
        const isRemovedGame = REMOVE_EMPTY_GAME(leavingGameId, socket.id);
        DELETE_PLAYER(socket);
        if(isRemovedGame) emitToAll('gameList', {gameList: objectToArray(GET_GAME_LIST())});
    });
}
