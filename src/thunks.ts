import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from './store'
import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure, createTodo } from './actions'

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

export const addTodoRequest = (text: string): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
  try {
    const body = JSON.stringify({ text })
    const response = await fetch('http://localhost:8080/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    })
    const todo = await response.json()
    dispatch(createTodo(todo))
  } catch (e) {
    console.log(e)
  }

}