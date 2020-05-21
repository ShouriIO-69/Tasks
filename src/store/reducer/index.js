import {combineReducers} from 'redux';
import currentUser from '../reducer/currentUser';

export  const rootReducer = combineReducers({
    currentUser
})