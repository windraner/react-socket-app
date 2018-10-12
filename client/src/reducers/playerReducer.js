const initialState = {
    'name': '',
    'joinedRoom': false,
    'position': 'lobby',
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
        
        case 'SET_PLAYER_POSITION':
            return {
                ...state,
                position: action.payload.position,
            }
            

        default:
        return state;
  }
}