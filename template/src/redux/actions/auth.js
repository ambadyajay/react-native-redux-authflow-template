import AsyncStorage from '@react-native-async-storage/async-storage';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';

export const setDidTryAL = () => {
  return {type: SET_DID_TRY_AL};
};

export const login = (email, password) => {
  return async dispatch => {
    if (email != 'email' && password != 'password') {
      message = 'Please check email or password';
      throw new Error(message);
    }

    saveDataToStorage('userToken');

    dispatch(authenticate('userToken', 'idToken'));
  };
};

export const logout = () => {
  AsyncStorage.removeItem('userData');
  return {type: LOGOUT};
};

const saveDataToStorage = userToken => {
  AsyncStorage.setItem('userToken', userToken);
};

export const authenticate = (userId, token, expiryTime) => {
  return dispatch => {
    dispatch({type: AUTHENTICATE, userId: 'userId', token: 'token'});
  };
};
