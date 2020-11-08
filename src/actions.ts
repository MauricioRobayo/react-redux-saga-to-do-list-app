import { Todo, TodosActionTypes } from "./types";

export const SYNC_TODO = "SYNC_TODO";
export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const MARK_COMPLETED_STATUS = "MARK_COMPLETED_STATUS";
export const LOAD_TODOS = "LOAD_TODOS";
export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
export const DISPLAY_ERROR = "DISPLAY_ERROR";

export const syncTodo = (todo: Todo): TodosActionTypes => ({
  type: SYNC_TODO,
  payload: { todo },
});

export const createTodo = (text: string): TodosActionTypes => {
  return {
    type: CREATE_TODO,
    payload: { text },
  };
};

export const removeTodo = (id: string): TodosActionTypes => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompletedTodo = (id: string): TodosActionTypes => ({
  type: MARK_COMPLETED_STATUS,
  payload: { id },
});

export const loadTodos = (): TodosActionTypes => ({
  type: LOAD_TODOS,
});

export const loadTodosSuccess = (todos: Todo[]): TodosActionTypes => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const loadTodosFailure = (): TodosActionTypes => ({
  type: LOAD_TODOS_FAILURE,
});

export const displayError = (message: string): TodosActionTypes => ({
  type: DISPLAY_ERROR,
  payload: message,
})
