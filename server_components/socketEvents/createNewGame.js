const Game = require('../entity/game/Game');
const {ADD_GAME, SET_GAME_PROPERTY, GET_GAME_LIST} = require('../global/GameList');
const {SET_PLAYER_PROPERTY} = require('../global/PlayerList');
const {objectToArray, emitToAll, addPlayerToGameLobby} = require('../utility');

module.exports = (socket) => {
    socket.on('createNewGame', (data) => {
        const game = new Game(socket.id);
        ADD_GAME(socket.id, game);
        
        addPlayerToGameLobby(socket.id, socket.id);

        if(data.name) {
          SET_GAME_PROPERTY({id: socket.id, property: 'name', value: `${data.name} 's game`});
        } else {
          SET_GAME_PROPERTY({id: socket.id, property: 'name', value: `New game by NoName`});
        }
        
        SET_PLAYER_PROPERTY({id: socket.id, property: 'name', value: data.name});
        SET_PLAYER_PROPERTY({id: socket.id, property: 'joinedToGame', value: GET_GAME_LIST()[socket.id].gameOwner});
        SET_PLAYER_PROPERTY({id: socket.id, property: 'position', value: 'gameLobby'});

        socket.emit('enterInRoom', {joinedToGame: GET_GAME_LIST()[socket.id].gameOwner});
        socket.emit('changePosition', {position: 'gameLobby'});
        socket.emit('gameLobbyData', {gameLobbyData: GET_GAME_LIST()[socket.id]});
        emitToAll('gameList', {gameList: objectToArray(GET_GAME_LIST())});
    });
}
