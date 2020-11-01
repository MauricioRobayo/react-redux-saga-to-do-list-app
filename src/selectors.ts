import { AppState } from './store'

export const getTodos = (state: AppState) => state.todos.data;
export const getTodosLoading = (state: AppState) => state.todos.isLoading;
