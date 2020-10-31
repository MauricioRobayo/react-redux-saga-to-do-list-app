import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadTodos } from '../thunks'
import TodoItem from "./TodoItem";
import { Todo } from '../store'
import NewTodoForm from "./NewTodoForm";
import { removeTodo, toggleCompleteStatus } from "../actions";
import { AppState } from '../store'

type TodoListProps = {
  todos: Todo[];
  isLoading: boolean;
  removeTodo: (text: string) => void;
  toggleCompleteStatus: (text: string) => void;
  loadTodos: () => void;
};

const TodoList = ({ todos, isLoading, removeTodo, toggleCompleteStatus, loadTodos }: TodoListProps) => {
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
          removeTodo={removeTodo}
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
  removeTodo,
  toggleCompleteStatus,
  loadTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
