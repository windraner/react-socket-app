const STARTED_GAME_LIST = {};

exports.ADD_STARTED_GAME_LISTR = (id, player) => {
    if(!id || !player) return;
    PLAYER_LIST[id] = player;
}

exports.SET_PLAYER_PROPERTY = (obj) => {
    const {id, property, value} = obj;
    if(!id || !property) return;
    PLAYER_LIST[id][property] = value;
}

exports.DELETE_PLAYER = (socket) => {
    if(!socket) return;
    delete PLAYER_LIST[socket.id];
}

exports.GET_STARTED_GAME_LIST = () => {
    return PLAYER_LIST;
};