export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";

export type TodoAction = {
  type: typeof CREATE_TODO | typeof REMOVE_TODO | typeof MARK_COMPLETED;
  payload: {
    text: string;
  };
};

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
