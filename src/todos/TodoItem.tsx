import React from  'react';

export type Todo = {
  text: string
}

type TodoProps = {
  todo: Todo
}

const TodoItem = ({ todo }: TodoProps ) => {
  return (
    <div>
      <h2>{todo.text}</h2>
      <button>Remove</button>
      <button>Toggle status</button>
    </div>
  )
}

export default TodoItem