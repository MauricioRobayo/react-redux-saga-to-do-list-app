import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { AppState } from "../store";
import { addTodoRequest } from "../thunks";
import { getTodos } from '../selectors'

type NewTodoFromProps = {
  addTodoRequest: (text: string) => void;
};

const NewTodoForm = ({ addTodoRequest }: NewTodoFromProps) => {
  const todos = useSelector<AppState, AppState['todos']['data']>(getTodos)
  const [inputValue, setInputValue] = useState("");
  const isDuplicateTodo = (text: string) =>
    todos.some((todo) => todo.text === text);
  const onCreateTodoHandler = () => {
    if (!isDuplicateTodo(inputValue)) {
      addTodoRequest(inputValue);
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

const mapDispatchToProps = {
  addTodoRequest,
};

export default connect(null, mapDispatchToProps)(NewTodoForm);
