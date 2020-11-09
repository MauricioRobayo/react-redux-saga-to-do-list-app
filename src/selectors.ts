import { createSelector } from "reselect";
import { AppState } from "./types";

export const getTodos = (state: AppState) => state.todos.data;
export const getTodosStatus = (state: AppState) => state.todos.status;
export const getErrorMessage = (state: AppState) => state.todos.error;

export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);

export const getCompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
