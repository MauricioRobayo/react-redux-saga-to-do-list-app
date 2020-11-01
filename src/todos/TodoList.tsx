import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodoRequest,
  markCompletedTodoRequest,
} from "../thunks";
import { loadTodos } from '../actions'
import TodoItem from "./TodoItem";
import { AppState } from "../store";
import NewTodoForm from "./NewTodoForm";
import {
  getCompleteTodos,
  getIncompleteTodos,
  getTodosLoading,
} from "../selectors";

const TodoList = () => {
  const completeTodos = useSelector<AppState, AppState["todos"]["data"]>(
    getCompleteTodos
  );
  const incompleteTodos = useSelector<AppState, AppState["todos"]["data"]>(
    getIncompleteTodos
  );
  const isLoading = useSelector<AppState, AppState["todos"]["isLoading"]>(
    getTodosLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const onRemoveTodoHandler = (id: string) => {
    dispatch(removeTodoRequest(id));
  };

  const onMarkCompletedTodoHandler = (id: string) => {
    dispatch(markCompletedTodoRequest(id));
  };

  const loader = <div>Loading todos...</div>;
  const content = (
    <>
      <NewTodoForm />
      {incompleteTodos.map((todo) => (
        <TodoItem
          key={todo.text}
          todo={todo}
          removeTodo={onRemoveTodoHandler}
          markCompletedTodo={onMarkCompletedTodoHandler}
        />
      ))}
      <h2>Complete TODOS</h2>
      {completeTodos.map((todo) => (
        <TodoItem
          key={todo.text}
          todo={todo}
          removeTodo={onRemoveTodoHandler}
        />
      ))}
    </>
  );

  return isLoading ? loader : content;
};

export default TodoList;
