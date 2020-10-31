import React from  'react';

export type Todo = {
  text: string
}

type TodoProps = {
  todo: Todo
  removeTodo: (text: string) => void
}

const TodoItem = ({ todo, removeTodo }: TodoProps ) => {
  return (
    <div>
      <h2>{todo.text}</h2>
      <button type='button' onClick={() => removeTodo(todo.text)}>Remove</button>
      <button type='button'>Toggle status</button>
    </div>
  )
}

export default TodoItem