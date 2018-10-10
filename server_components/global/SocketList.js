const SOCKET_LIST = {};

exports.ADD_SOCKET = (socket) => {
    if(!socket) return;
    SOCKET_LIST[socket.id] = socket;
}

exports.DELETE_SOCKET = (socket) => {
    if(!socket) return;
    delete SOCKET_LIST[socket.id];
}

exports.GET_SOCKET_LIST = () => {
    return SOCKET_LIST;
};