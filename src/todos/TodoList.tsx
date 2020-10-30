import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from './TodoItem'

type TodoListProps = {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps ) => {
  return (
    <>
      {todos.map((todo) => <TodoItem key={todo.text} todo={todo} />)}
    </>
  )
}

export default TodoList;