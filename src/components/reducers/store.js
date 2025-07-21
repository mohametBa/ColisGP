import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './index'; 

const initialState = {};


const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware() // You can add middleware here if needed
);

export default store;
