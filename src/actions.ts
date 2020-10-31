export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";
export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

export type Todo = {
  id: string
  text: string
  isCompleted: boolean
  createdAt: string
}

export type TodoAction = {
  type: typeof CREATE_TODO | typeof REMOVE_TODO | typeof MARK_COMPLETED;
  payload: {
    text: string;
  };
};

export type IsLoadingActon = {
  type: typeof LOAD_TODOS_FAILURE | typeof LOAD_TODOS_IN_PROGRESS | typeof LOAD_TODOS_SUCCESS
}

export const createTodo = (text: string): TodoAction => ({
  type: CREATE_TODO,
  payload: { text },
});

export const removeTodo = (text: string): TodoAction => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const toggleCompleteStatus = (text: string): TodoAction => ({
  type: MARK_COMPLETED,
  payload: { text },
});

export const loadTodosInProgress = (): IsLoadingActon => {
  return ({
    type: LOAD_TODOS_IN_PROGRESS
  });
}

export const loadTodosSuccess = (todos: Todo[]) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos }
})

export const loadTodosFailure = (): IsLoadingActon => ({
  type: LOAD_TODOS_FAILURE
})
