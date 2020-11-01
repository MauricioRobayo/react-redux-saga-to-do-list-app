import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";
import { todos } from "./reducers";
import rootSaga from "./sagas";

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
  createdAt: string;
};

export type AppState = {
  todos: {
    data: Todo[];
    isLoading: boolean;
  };
};

const reducers = { todos };

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const sagaMiddleware = createSagaMiddleWare();

const rootReducer = combineReducers<AppState>(reducers);
const persistedReducer = persistReducer<AppState>(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);

sagaMiddleware.run(rootSaga)

export default store;
