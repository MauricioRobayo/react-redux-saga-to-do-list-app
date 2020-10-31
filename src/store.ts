import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { todos, TodoState } from "./reducers";
import { createLogger } from 'redux-logger'

export type AppState = {
  todos: TodoState
}

const logger = createLogger({
  collapsed: true
})

const reducers = { todos };

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers<AppState>(reducers);
const persistedReducer = persistReducer<AppState>(persistConfig, rootReducer)

export const configureStore = () => createStore(persistedReducer, applyMiddleware(logger));
