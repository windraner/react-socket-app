const {GET_GAME_LIST, CHECK_START_GAME} = require('../global/GameList');
const {SET_PLAYER_PROPERTY} = require('../global/PlayerList');
const {objectToArray, emitToAll, emitToLobby, addPlayerToGameLobby} = require('../utility');

module.exports = (socket) => {
    socket.on('attemptEnterRoom', (data) => {
        // check for game lobby
        if(GET_GAME_LIST()[data.gameId]) {
          // check for this player in lobby
          const isPlayerInRoom = GET_GAME_LIST()[data.gameId].playersInRoom.find((item) => {
            if(item === socket.id) return item;
          });
          // check for slots in lobby
          if(!isPlayerInRoom && GET_GAME_LIST()[data.gameId].playersInRoom.length < GET_GAME_LIST()[data.gameId].playersPerRoom) {
            addPlayerToGameLobby(socket.id, data.gameId);
            
            SET_PLAYER_PROPERTY({id: socket.id, property: 'joinedToGame', value: GET_GAME_LIST()[data.gameId].gameOwner});
            SET_PLAYER_PROPERTY({id: socket.id, property: 'position', value: 'gameLobby'});
    
            CHECK_START_GAME(data.gameId);

            socket.emit('enterInRoom', {joinedToGame: GET_GAME_LIST()[data.gameId].gameOwner});
            socket.emit('changePosition', {position: 'gameLobby'});
            emitToLobby({action: 'gameLobbyData', data: {gameLobbyData: GET_GAME_LIST()[data.gameId]}, gameId: data.gameId});
            emitToAll('gameList', {gameList: objectToArray(GET_GAME_LIST())});
          }
        }
    }); 
}
