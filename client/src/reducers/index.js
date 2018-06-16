import { combineReducers } from 'redux';
import socketReducer from './socketReducer';
import playerReducer from './playerReducer';

export default combineReducers({
    socketReducer,
    playerReducer,
});