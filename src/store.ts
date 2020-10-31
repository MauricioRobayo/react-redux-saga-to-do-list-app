import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import { todos, isLoading, TodoState } from "./reducers";

export type AppState = {
  todos: TodoState
  isLoading: boolean
}

const logger = createLogger({
  collapsed: true
})

const reducers = { todos, isLoading };

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers<AppState>(reducers);
const persistedReducer = persistReducer<AppState>(persistConfig, rootReducer)

export const configureStore = () => createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
