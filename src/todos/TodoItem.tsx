import React from "react";

import { Todo } from "../types";

type TodoProps = {
  todo: Todo;
  removeTodo: (id: string) => void;
  markCompletedTodo: (id: string) => void;
};

const TodoItem = ({ todo, removeTodo, markCompletedTodo }: TodoProps) => {
  return (
    <div>
      <h2>{todo.text}</h2>
      <button type="button" onClick={() => removeTodo(todo.id)}>
        Remove
      </button>
      {todo.isCompleted ? null : (
        <button type="button" onClick={() => markCompletedTodo(todo.id)}>
          Mark completed
        </button>
      )}
    </div>
  );
};

export default TodoItem;
