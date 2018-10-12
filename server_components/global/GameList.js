const GAME_LIST = {};

exports.ADD_GAME = (id, game) => {
    if(!id || !game) return;
    GAME_LIST[id] = game;
}

exports.SET_GAME_PROPERTY = (obj) => {
    const {id, property, value} = obj;
    if(!id || !property) return;
    GAME_LIST[id][property] = value;
}

exports.REMOVE_EMPTY_GAME = (leavingGameId, id) => {
    if(!leavingGameId || !id) return false;
    
    let newPlayersInRoom = [];

    if(GAME_LIST[leavingGameId]) {
        newPlayersInRoom = GAME_LIST[leavingGameId].playersInRoom.filter((item) => item.id !== id);
        GAME_LIST[leavingGameId].playersInRoom = newPlayersInRoom;
    } else {
        return false;
    }

    if(newPlayersInRoom.length === 0) {
        delete GAME_LIST[leavingGameId];
        return true;
    }
}

exports.GET_GAME_LIST = () => {
    return GAME_LIST;
};