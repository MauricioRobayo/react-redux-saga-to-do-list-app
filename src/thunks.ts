import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from './store'
import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from './actions'

export const loadTodos = (): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
  try {
    dispatch(loadTodosInProgress())
    const response = await fetch('http://localhost:8080/todos-delay')
    const todos = await response.json()
    dispatch(loadTodosSuccess(todos))
  } catch (e) {
    dispatch(loadTodosFailure())
  }
}