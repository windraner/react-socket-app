const initialState = {
    'name': '',
};

export default function playerReducer(state = initialState, action) {
	switch(action.type) {
        case 'SET_PLAYER_NAME':
            return {
                ...state,
                name: action.payload,
            }

        default:
        return state;
  }
}