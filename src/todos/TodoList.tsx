import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { AppState } from '../store'
import NewTodoForm from "./NewTodoForm";
import { removeTodo, toggleCompleteStatus } from "../actions";

const TodoList = () => {
  const todos = useSelector(({ todos }: AppState) => todos)
  const dispatch = useDispatch();
  return (
    <>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoItem
          key={todo.text}
          todo={todo}
          removeTodo={(text) => dispatch(removeTodo(text))}
          toggleCompleteStatus={(text) => dispatch(toggleCompleteStatus(text))}
        />
      ))}
    </>
  );
};

export default TodoList;