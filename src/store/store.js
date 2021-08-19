import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { AuthReducer } from '../reducers/AuthReducerDuck';
import {FavoritesReducer} from '../reducers/FavoritesReducerDuck';


const reducersCombine = combineReducers({
  AuthReducer,
  FavoritesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducersCombine,
  composeEnhancers(applyMiddleware(thunk))
);
