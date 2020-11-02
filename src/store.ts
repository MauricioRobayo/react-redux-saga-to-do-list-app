import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import { todos } from "./reducers";
import rootSaga from "./sagas";
import { AppState } from "./types";

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
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
