import { combineReducers } from 'redux';
import socketReducer from './socketReducer';
import playerReducer from './playerReducer';
import gameLobbyReducer from './gameLobbyReducer';
import chatReducer from './chatReducer';
import authReducer from './authReducer';

export default combineReducers({
    socketReducer,
    playerReducer,
    gameLobbyReducer,
    chatReducer,
    authReducer,
});