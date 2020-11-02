import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components/macro';

import { AppState } from "../types";
import { createTodo } from "../actions";
import { getTodos } from "../selectors";

const Form = styled.form`
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  .header {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  .controls {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    input, button {
      padding: 0.25rem 0.5rem;
    }
    input {
      flex-basis: 100%;
      @media (max-width: 768px) {
        margin-bottom: 0.5rem;
      }
    }
    button {
      flex-basis: 50%;
    }
  }
`;

const NewTodoForm = () => {
  const todos = useSelector<AppState, AppState["todos"]["data"]>(getTodos);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const isDuplicateTodo = (text: string) =>
    todos.some((todo) => todo.text === text);
  const isEmptyTodo = (text: string) => text.trim().length === 0;

  const onCreateTodoHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!isEmptyTodo(inputValue) && !isDuplicateTodo(inputValue)) {
      dispatch(createTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <Form>
      <label className='header' htmlFor="new-todo">New Todo:</label>
      <div className='controls'>
        <input
          id="new-todo"
          type="text"
          placeholder="New Todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button type="submit" onClick={onCreateTodoHandler}>
          Create todo
        </button>
      </div>
    </Form>
  );
};

export default NewTodoForm;
