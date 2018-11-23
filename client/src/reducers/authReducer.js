import Cookies from 'js-cookie';

let token = Cookies.get('token');

const initialState = {
    'token': token ? token : '',
    'email': '',
    'id': '',
};

export default function authReducer(state = initialState, action) {
	switch(action.type) {
        case 'SET_TOKEN':
            Cookies.set('token', action.payload, { expires: 7 });
            return {
                ...state,
                token: action.payload,
            }

        case 'SET_USER_DATA':
            return {
                ...state,
                email: action.payload.email,
                id: action.payload.id,
            }

        case 'REMOVE_TOKEN':
            Cookies.remove('token');
            return {
                ...state,
                token: '',
                email: '',
                id: '',
            }

        default:
            return state;
    }
}