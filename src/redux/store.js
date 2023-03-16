// import { combineReducers, applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import userReducer from './reducers/userreducers';

// const rootReducer = combineReducers({ userReducer });

//  const Store = createStore(rootReducer, applyMiddleware(thunk));

//  export default Store;


import authReducer from "../slices/Authslice"
import {configureStore} from '@reduxjs/toolkit';
import leaveReducer from "../slices/LeaveSlice"


const Store = configureStore({
  reducer:{
    auth:authReducer,
    leave:leaveReducer
  }
});

export default Store;
