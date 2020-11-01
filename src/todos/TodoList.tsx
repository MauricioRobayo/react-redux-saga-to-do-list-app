import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadTodos, removeTodoRequest } from '../thunks'
import TodoItem from "./TodoItem";
import { Todo } from '../store'
import NewTodoForm from "./NewTodoForm";
import { toggleCompleteStatus } from "../actions";
import { AppState } from '../store'

type TodoListProps = {
  todos: Todo[];
  isLoading: boolean;
  removeTodoRequest: (id: string) => void;
  toggleCompleteStatus: (text: string) => void;
  loadTodos: () => void;
};

const TodoList = ({ todos, isLoading, removeTodoRequest, toggleCompleteStatus, loadTodos }: TodoListProps) => {
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
          toggleCompleteStatus={toggleCompleteStatus}
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
  toggleCompleteStatus,
  loadTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
