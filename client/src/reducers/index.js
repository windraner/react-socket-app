import { combineReducers } from 'redux';
import socketReducer from './socketReducer';
import playerReducer from './playerReducer';
import gameLobbyReducer from './gameLobbyReducer';

export default combineReducers({
    socketReducer,
    playerReducer,
    gameLobbyReducer,
});