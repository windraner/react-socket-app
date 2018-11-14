const initialState = {
    'messages': [],
};

export default function chatReducer(state = initialState, action) {
	switch(action.type) {
        case 'ADD_NEW_MESSAGE':
            const mewMessages = [...state.messages];
            mewMessages.push(action.payload)
            return {
                ...state,
                messages: mewMessages,
            }

        case 'REMOVE_MESSAGES':
            return {
                ...state,
                messages: [],
            }

        default:
            return state;
    }
}