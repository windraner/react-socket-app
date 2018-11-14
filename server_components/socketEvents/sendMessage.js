const {GET_GAME_LIST} = require('../global/GameList');
const {GET_PLAYER_LIST, SET_PLAYER_PROPERTY} = require('../global/PlayerList');
const {emitToLobby} = require('../utility');

module.exports = (socket) => {
    socket.on('sendMessage', (message) => {
        const player = GET_PLAYER_LIST()[socket.id];
        
        const newMessage = message.trim()

        if(newMessage) emitToLobby({action: 'sendMessage', data: {name: player.name, message}, gameId: player.joinedToGame})
    });
}