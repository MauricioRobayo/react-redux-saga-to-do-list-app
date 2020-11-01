import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState, Todo } from './store'
import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure, createTodo, removeTodo } from './actions'

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
    const todo: Todo = await response.json()
    dispatch(createTodo(todo))
  } catch (e) {
    console.log(e)
  }

}

export const removeTodoRequest = (id: string): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'delete'
    })
    const deletedTodo: Todo = await response.json()
    dispatch(removeTodo(deletedTodo.id))
  } catch(e) {
    console.log(e)
  }
}