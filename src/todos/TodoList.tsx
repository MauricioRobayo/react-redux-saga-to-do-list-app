import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadTodos, removeTodoRequest, markCompletedTodoRequest } from '../thunks'
import TodoItem from "./TodoItem";
import { Todo } from '../store'
import NewTodoForm from "./NewTodoForm";
import { AppState } from '../store'

type TodoListProps = {
  todos: Todo[];
  isLoading: boolean;
  removeTodoRequest: (id: string) => void;
  markCompletedTodoRequest: (id: string) => void;
  loadTodos: () => void;
};

const TodoList = ({ todos, isLoading, removeTodoRequest, markCompletedTodoRequest, loadTodos }: TodoListProps) => {
  useEffect(() => {
    loadTodos()
  }, [loadTodos])
  const loader = <div>Loading todos...</div>
  const content = (
    <>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoItem
          key={todo.text}
          todo={todo}
          removeTodo={removeTodoRequest}
          markCompletedTodo={markCompletedTodoRequest}
        />
      ))}
    </>
  )

  return isLoading ? loader : content;
};

const mapStateToProps = ({ todos, isLoading }: AppState) => ({
  todos,
  isLoading,
});

const mapDispatchToProps = {
  removeTodoRequest,
  markCompletedTodoRequest,
  loadTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
