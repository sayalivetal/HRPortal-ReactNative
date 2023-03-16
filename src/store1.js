import {combineReducers} from 'redux';
//import thunk from 'redux-thunk';
import authReducer from "../slices/Authslice"
import {configureStore} from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

const Store = configureStore({
  reducer:{
    auth:authReducer
  }
});

export default Store;
