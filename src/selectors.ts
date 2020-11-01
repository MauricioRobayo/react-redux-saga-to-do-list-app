import { createSelector } from "reselect";
import { AppState } from "./store";

export const getTodos = (state: AppState) => state.todos.data;
export const getTodosLoading = (state: AppState) => state.todos.isLoading;

export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);

export const getCompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
