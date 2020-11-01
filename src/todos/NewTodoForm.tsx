import React, { useState } from "react";
import { connect } from "react-redux";
import { Todo } from "../store";
import { addTodoRequest } from "../thunks";

type NewTodoFromProps = {
  todos: Todo[];
  addTodoRequest: (text: string) => void;
};

const NewTodoForm = ({ todos, addTodoRequest }: NewTodoFromProps) => {
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

const mapStateToProps = (state: { todos: Todo[] }) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodoRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
