import { AppState } from './store'

export const getTodos = (state: AppState) => state.todos;
export const getTodosLoading = (state: AppState) => state.isLoading;
