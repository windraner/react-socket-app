const PLAYER_LIST = {};

exports.ADD_PLAYER = (id, player) => {
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

exports.GET_PLAYER_LIST = () => {
    return PLAYER_LIST;
};