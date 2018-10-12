const initialState = {
    'gameLobbyData': {},
};

export default function gameLobbyReducer(state = initialState, action) {
	switch(action.type) {
        case 'SET_GAME_LOBBY_DATA':
            return {
                ...state,
                gameLobbyData: action.payload.gameLobbyData,
            }

        default:
        return state;
    }
}