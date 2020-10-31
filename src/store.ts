import { createStore, combineReducers } from "redux";
import { todos } from "./reducers";

const reducer = { todos };

const rootReducer = combineReducers(reducer);

export const configureStore = () => createStore(rootReducer);
