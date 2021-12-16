import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import auth from '../reducers/auth';

const rootReducer = combineReducers({
  auth: auth,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
