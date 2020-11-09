import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components/macro';

import { loadTodos, removeTodo, markCompletedTodo } from "../actions";
import TodoItem from "./TodoItem";
import { AppState, Status } from "../types";
import NewTodoForm from "./NewTodoForm";
import Error from '../error/error';
import {
  getCompleteTodos,
  getIncompleteTodos,
  getTodosStatus,
  getErrorMessage,
} from "../selectors";

const TodoListWrapper = styled.div`
  max-width: 720px;
  margin: 2rem auto;
  padding: 2rem 1rem;
`;

const TodoList = () => {
  const errorMessage = useSelector<AppState, AppState["todos"]["error"]>(getErrorMessage);
  const completeTodos = useSelector<AppState, AppState["todos"]["data"]>(
    getCompleteTodos
  );
  const incompleteTodos = useSelector<AppState, AppState["todos"]["data"]>(
    getIncompleteTodos
  );
  const status = useSelector<AppState, AppState["todos"]["status"]>(
    getTodosStatus
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const onRemoveTodoHandler = (id: string) => {
    dispatch(removeTodo(id));
  };

  const onMarkCompletedTodoHandler = (id: string) => {
    dispatch(markCompletedTodo(id));
  };

  if (status === Status.rejected) {
    if (errorMessage) {
      return <Error message={errorMessage} />
    }
    return <Error />
  }

  if (status === Status.pending || status === Status.idle) {
    return <div>Loading todos...</div>
  }

  return (
    <TodoListWrapper>
      <NewTodoForm />
      <h2>TODOS</h2>
      {incompleteTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={onRemoveTodoHandler}
          markCompletedTodo={onMarkCompletedTodoHandler}
        />
      ))}
      <h2>Completed TODOS</h2>
      {completeTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={onRemoveTodoHandler}
          markCompletedTodo={onMarkCompletedTodoHandler}
        />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
