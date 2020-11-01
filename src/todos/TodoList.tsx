import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  loadTodos,
  removeTodoRequest,
  markCompletedTodoRequest,
} from "../thunks";
import TodoItem from "./TodoItem";
import { Todo } from "../store";
import NewTodoForm from "./NewTodoForm";
import { AppState } from "../store";
import {
  getCompleteTodos,
  getIncompleteTodos,
  getTodosLoading,
} from "../selectors";

type TodoListProps = {
  completeTodos: Todo[];
  incompleteTodos: Todo[];
  isLoading: boolean;
  removeTodoRequest: (id: string) => void;
  markCompletedTodoRequest: (id: string) => void;
  loadTodos: () => void;
};

const TodoList = ({
  incompleteTodos,
  completeTodos,
  isLoading,
  removeTodoRequest,
  markCompletedTodoRequest,
  loadTodos,
}: TodoListProps) => {
  useEffect(() => {
    loadTodos();
  }, [loadTodos]);
  const loader = <div>Loading todos...</div>;
  const content = (
    <>
      <NewTodoForm />
      <h2>Incomplete TODOS</h2>
      {incompleteTodos.map((todo) => (
        <TodoItem
        key={todo.text}
        todo={todo}
        removeTodo={removeTodoRequest}
        markCompletedTodo={markCompletedTodoRequest}
        />
        ))}
      <h2>Complete TODOS</h2>
      {completeTodos.map((todo) => (
        <TodoItem
          key={todo.text}
          todo={todo}
          removeTodo={removeTodoRequest}
        />
      ))}
    </>
  );

  return isLoading ? loader : content;
};

const mapStateToProps = (state: AppState) => ({
  completeTodos: getCompleteTodos(state),
  incompleteTodos: getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = {
  removeTodoRequest,
  markCompletedTodoRequest,
  loadTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
