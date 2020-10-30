import React from 'react';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: {
    text: string
  }[]
}

const TodoList = ({ todos }: TodoListProps ) => {
  return (
    <>
      {todos.map((todo) => <TodoItem todo={todo} />)}
    </>
  )
}

export default TodoList;