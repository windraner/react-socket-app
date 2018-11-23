import axios from 'axios';
import {store} from '../App';
import {browserHistory} from '../App';

export const setToken = (data) => ({type: 'SET_TOKEN', payload: data });

export const removeToken = () => ({type: 'REMOVE_TOKEN'});

export const logOut = () => {
  store.dispatch(removeToken());
  browserHistory.push('/');
}

export const setUserData = (data) => ({type: 'SET_USER_DATA', payload: data });

export const sendRegistrationAttempt = (data) => {
  return dispatch => {
    const options = {
      method: 'post',
      // withCredentials: true,
      url: 'http://localhost:8080' + '/register',
      data,
    };

    axios(options).then(response => {
      dispatch(setToken(response.data.token))
    }).catch(function (error) {
      console.log(error);
    });
  };
};

export const sendLoginAttempt = (data) => {
  return dispatch => {
    const options = {
      method: 'post',
      // withCredentials: true,
      url: 'http://localhost:8080' + '/login',
      data,
    };

    axios(options).then(response => {
      dispatch(setToken(response.data.token))
      browserHistory.goBack()
      console.log()
    }).catch(function (error) {
      console.log(error);
    });
  };
};

export const getInfo = (data) => {
  return dispatch => {
    const options = {
      method: 'get',
      // withCredentials: true,
      url: 'http://localhost:8080' + '/info',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': data
      }
    };

    axios(options).then(response => {
      console.log(response.data)
      dispatch(setUserData(response.data))
    }).catch(function (error) {
      if(error.response.status === 403) dispatch(removeToken());
    });
  };
};