import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const TodoList = () => {
  const completeTodos = useSelector<AppState, AppState['todos']['data']>(getCompleteTodos);
  const incompleteTodos = useSelector<AppState, AppState['todos']['data']>(getIncompleteTodos);
  const isLoading = useSelector<AppState, AppState['todos']['isLoading']>(getTodosLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);
  const loader = <div>Loading todos...</div>;
  const content = (
    <>
      <NewTodoForm />
      <h2>Incomplete TODOS</h2>
      {incompleteTodos.map((todo) => (
        <TodoItem
        key={todo.text}
        todo={todo}
        removeTodo={(id:string) => dispatch(removeTodoRequest(id))}
        markCompletedTodo={(id:string) => dispatch(markCompletedTodoRequest(id))}
        />
        ))}
      <h2>Complete TODOS</h2>
      {completeTodos.map((todo) => (
        <TodoItem
          key={todo.text}
          todo={todo}
          removeTodo={(id:string) => dispatch(removeTodoRequest(id))}
        />
      ))}
    </>
  );

  return isLoading ? loader : content;
};

export default TodoList;
