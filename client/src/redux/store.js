import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createMiddleware } from 'redux-api-middleware';

import { notesReducer } from './notes/reducers';
import { todoReducer } from './todo/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
  notes: notesReducer,
  todo: todoReducer

  });

const store = createStore(combinedReducers, 
  composeEnhancers(applyMiddleware(thunk, createMiddleware(), logger)),
);

export default store;