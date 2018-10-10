exports.objectToArray = (obj) => {
    let array = [];
    for(let key in obj) {
        array.push(obj[key]);
    }
    return array;
}

exports.emitToAll = (action, data) => {
    const {GET_SOCKET_LIST} = require('./global/SocketList');
    for(let i in GET_SOCKET_LIST()){
      let socket = GET_SOCKET_LIST()[i];
      socket.emit(action, data);
    }
}