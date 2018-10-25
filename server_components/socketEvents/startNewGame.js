const {GET_GAME_LIST} = require('../global/GameList');
const {GET_PLAYER_LIST, SET_PLAYER_PROPERTY} = require('../global/PlayerList');
const {emitToLobby} = require('../utility');

module.exports = (socket) => {
    socket.on('startNewGame', () => {
        if(!GET_GAME_LIST()[socket.id]) return;

        // if(!GET_GAME_LIST()[socket.id].canStart) return;

        GET_GAME_LIST()[socket.id].playersInRoom.map(item => {
            SET_PLAYER_PROPERTY({id: item.id, property: 'position', value: 'inGame'});
            GET_PLAYER_LIST()[item.id].getSocket().emit('changePosition', {position: 'inGame'});
        });

        emitToLobby({action: 'gameLobbyData', data: {gameLobbyData: GET_GAME_LIST()[socket.id]}, gameId: socket.id})
    });
}