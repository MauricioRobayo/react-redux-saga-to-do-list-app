import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {
  loadTodos,
  removeTodoRequest,
  markCompletedTodoRequest,
} from "../thunks";
import TodoItem from "./TodoItem";
import { AppState } from "../store";
import NewTodoForm from "./NewTodoForm";
import {
  getCompleteTodos,
  getIncompleteTodos,
  getTodosLoading,
} from "../selectors";

type TodoListProps = {
  removeTodoRequest: (id: string) => void;
  markCompletedTodoRequest: (id: string) => void;
  loadTodos: () => void;
};

const TodoList = ({
  removeTodoRequest,
  markCompletedTodoRequest,
  loadTodos,
}: TodoListProps) => {
  const completeTodos = useSelector<AppState, AppState['todos']['data']>(getCompleteTodos);
  const incompleteTodos = useSelector<AppState, AppState['todos']['data']>(getIncompleteTodos);
  const isLoading = useSelector<AppState, AppState['todos']['isLoading']>(getTodosLoading);

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

const mapDispatchToProps = {
  removeTodoRequest,
  markCompletedTodoRequest,
  loadTodos,
};

export default connect(null, mapDispatchToProps)(TodoList);
