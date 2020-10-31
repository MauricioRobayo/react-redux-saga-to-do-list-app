import { createStore, combineReducers } from 'redux'

const reducer = {}

const rootReducer = combineReducers(reducer)

export const configureStore = () => createStore(rootReducer)
