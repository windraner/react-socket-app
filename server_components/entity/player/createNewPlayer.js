const Player = require('../../entity/player/Player');
const {ADD_PLAYER} = require('../../global/PlayerList');
const eventCreateNewGame = require('../../socketEvents/createNewGame');
const eventGetGameList = require('../../socketEvents/getGameList');
const eventEnterRoom = require('../../socketEvents/enterRoom');
const eventDisconnect = require('../../socketEvents/disconnect');
const eventLeaveRoom = require('../../socketEvents/leaveRoom');

module.exports = (socket) => {
    const player = new Player(socket);
    ADD_PLAYER(socket.id, player);
    
    eventCreateNewGame(socket);
    
    eventGetGameList(socket);
    
    eventEnterRoom(socket);

    eventLeaveRoom(socket);

    eventDisconnect(socket);
}
