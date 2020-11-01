import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../store";
import { addTodoRequest } from "../thunks";
import { getTodos } from '../selectors'

const NewTodoForm = () => {
  const todos = useSelector<AppState, AppState['todos']['data']>(getTodos)
  const [inputValue, setInputValue] = useState("");
  
  const dispatch = useDispatch();

  const isDuplicateTodo = (text: string) =>
    todos.some((todo) => todo.text === text);
  const isEmptyTodo = (text: string) => 
    text.trim().length === 0
  
    const onCreateTodoHandler = () => {
    if (!isEmptyTodo(inputValue) && !isDuplicateTodo(inputValue)) {
      dispatch(addTodoRequest(inputValue));
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
