const {GET_GAME_LIST} = require('../global/GameList');
const {objectToArray} = require('../utility');

module.exports = (socket) => {
    socket.on('getGameList', () => {
        socket.emit('gameList', {gameList: objectToArray(GET_GAME_LIST())});
    });
}
