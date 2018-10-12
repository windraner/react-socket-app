const {GET_PLAYER_LIST} = require('./global/PlayerList');
const {GET_GAME_LIST, SET_GAME_PROPERTY} = require('./global/GameList');

exports.objectToArray = (obj) => {
    let array = [];
    for(let key in obj) {
        array.push(obj[key]);
    }
    return array;
}

exports.emitToGameList = (action, data) => {

}

exports.emitToLobby = (obj) => {
    const {action, data, gameId} = obj;
    const currentGame = GET_GAME_LIST()[gameId];

    if(currentGame) currentGame.playersInRoom.forEach( item => {
        let socket = GET_PLAYER_LIST()[item.id].getSocket();
        socket.emit(action, data);
    });
}

exports.emitToAll = (action, data) => {
    for(let i in GET_PLAYER_LIST()){
      let socket = GET_PLAYER_LIST()[i].getSocket();
      socket.emit(action, data);
    }
}

exports.addPlayerToGameLobby = (playerId, gameId) => {
    const currentPlayer = GET_PLAYER_LIST()[playerId];
    const newPlayersInRoom = GET_GAME_LIST()[gameId].playersInRoom;
    newPlayersInRoom.push(currentPlayer);
    SET_GAME_PROPERTY({id: gameId, property: 'playersInRoom', value: newPlayersInRoom});
}