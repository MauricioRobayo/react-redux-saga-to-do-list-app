import React from 'react';
import TodoItem, { Todo } from './TodoItem';
import NewTodoForm from './NewTodoForm'

type TodoListProps = {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps ) => {
  return (
    <>
      <NewTodoForm />
      {todos.map((todo) => <TodoItem key={todo.text} todo={todo} />)}
    </>
  )
}

export default TodoList;