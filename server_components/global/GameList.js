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

exports.GET_GAME_LIST = () => {
    return GAME_LIST;
};