import { combineReducers } from 'redux';
import token from './token-reducer';
import search from './search-reducer';

export default combineReducers({ token, search });
