export const CREATE_TODO = 'CREATE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export type TodoAction = {
  type: typeof CREATE_TODO | typeof REMOVE_TODO,
  payload: {
    text: string
  }
}

export const createTodo = (text: string): TodoAction => {
  return {
    type: CREATE_TODO,
    payload: {text},
  }
}

export const removeTodo = (text: string): TodoAction => {
  return {
    type: REMOVE_TODO,
    payload: {text},
  }
}