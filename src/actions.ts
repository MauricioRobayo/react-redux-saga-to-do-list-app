export const CREATE_TODO = 'CREATE_TODO'
export const createTodo = (text: string) => {
  return {
    type: CREATE_TODO,
    payload: {text},
  }
}

export const REMOVE_TODO = 'REMOVE_TODO'
export const removeTodo = (text: string) => {
  return {
    type: REMOVE_TODO,
    payload: {text},
  }
}