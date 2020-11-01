import { Todo } from './store'

export const SYNC_TODO = "SYNC_TODO";
export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const MARK_COMPLETED_STATUS = "MARK_COMPLETED_STATUS";
export const LOAD_TODOS = "LOAD_TODOS";
export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";

export interface CreateTodoAction {
  type: typeof CREATE_TODO;
  payload: {
    text: string
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
interface SyncTodoAction {
  type: typeof SYNC_TODO;
  payload: {
    todo: Todo
  };
}
interface LoadTodosAction {
  type: typeof LOAD_TODOS,
}
interface LoadTodosSuccessAction {
  type: typeof LOAD_TODOS_SUCCESS;
  payload: {
    todos: Todo[];
  };
}
interface LoadTodosFailureAction {
  type: typeof LOAD_TODOS_FAILURE;
}

export type TodosActionTypes = 
 | SyncTodoAction
 | CreateTodoAction
 | RemoveTodoAction
 | MarkCompletedTodoAction
 | LoadTodosAction
 | LoadTodosSuccessAction
 | LoadTodosFailureAction;

export const syncTodo = (todo: Todo): TodosActionTypes => ({
  type: SYNC_TODO,
  payload: { todo },
});

export const createTodo = (text: string): TodosActionTypes => {
  return ({
    type: CREATE_TODO,
    payload: { text },
  });
};

export const removeTodo = (id: string): TodosActionTypes => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompletedTodo = (
  id: string
): TodosActionTypes => ({
  type: MARK_COMPLETED_STATUS,
  payload: { id },
});

export const loadTodos = (): TodosActionTypes => ({
  type: LOAD_TODOS
})

export const loadTodosSuccess = (todos: Todo[]): TodosActionTypes => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const loadTodosFailure = (): TodosActionTypes => ({
  type: LOAD_TODOS_FAILURE,
});
