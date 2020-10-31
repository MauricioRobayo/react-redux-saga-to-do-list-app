import { createStore, combineReducers, applyMiddleware } from "redux";
import { todos } from "./reducers";
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true
})

const reducer = { todos };

const rootReducer = combineReducers(reducer);

export const configureStore = () => createStore(rootReducer, applyMiddleware(logger));
