const initialState = {
    'name': '',
    'joinedRoom': false,
};

export default function playerReducer(state = initialState, action) {
	switch(action.type) {
        case 'SET_PLAYER_NAME':
            return {
                ...state,
                name: action.payload,
            }
        
        case 'SET_PLAYER_JOIN_ROOM':
            return {
                ...state,
                joinedRoom: action.payload.joinedToGame,
            }
            

        default:
        return state;
  }
}