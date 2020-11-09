import {
  SYNC_TODO,
  CREATE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED_STATUS,
  LOAD_TODOS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
  DISPLAY_ERROR,
} from "./actions";

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
  createdAt: string;
};

export type AppState = {
  todos: {
    data: Todo[];
    status: "idle" | "pending" | "resolved" | "rejected";
    error: string | null;
  };
};

export interface CreateTodoAction {
  type: typeof CREATE_TODO;
  payload: {
    text: string;
  };
}
export interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: {
    id: string;
  };
}
export interface MarkCompletedTodoAction {
  type: typeof MARK_COMPLETED_STATUS;
  payload: {
    id: string;
  };
}
export interface SyncTodoAction {
  type: typeof SYNC_TODO;
  payload: {
    todo: Todo;
  };
}
export interface LoadTodosAction {
  type: typeof LOAD_TODOS;
}
export interface LoadTodosSuccessAction {
  type: typeof LOAD_TODOS_SUCCESS;
  payload: {
    todos: Todo[];
  };
}
export interface LoadTodosFailureAction {
  type: typeof LOAD_TODOS_FAILURE;
}
export interface DisplayError {
  type: typeof DISPLAY_ERROR;
  payload: string;
}

export type TodosActionTypes =
  | SyncTodoAction
  | CreateTodoAction
  | RemoveTodoAction
  | MarkCompletedTodoAction
  | LoadTodosAction
  | LoadTodosSuccessAction
  | LoadTodosFailureAction
  | DisplayError;
