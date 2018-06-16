const initialState = {
    'socket': null,
    'gameList': [],
};

export default function socketReducer(state = initialState, action) {
	switch(action.type) {
        case 'SET_SOCKET':
            return {
                ...state,
                socket: action.payload,
            }
        case 'SET_GAME_LIST':
            return {
                ...state,
                gameList: action.payload.gameList,
            }

        default:
        return state;
  }
}