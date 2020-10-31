import React, { useState } from "react";
import { createTodo } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";

const NewTodoForm = () => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }: AppState) => todos);
  const [inputValue, setInputValue] = useState("");
  const isDuplicateTodo = (text: string) =>
    todos.some((todo) => todo.text === text);
  const onCreateTodoHandler = () => {
    if (!isDuplicateTodo(inputValue)) {
      dispatch(createTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <>
      <label htmlFor="new-todo">New Todo:</label>
      <input
        id="new-todo"
        type="text"
        placeholder="New Todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button type="button" onClick={onCreateTodoHandler}>
        Create todo
      </button>
    </>
  );
};

export default NewTodoForm;
