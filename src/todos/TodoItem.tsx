import React from "react";
import { Todo } from "../store";

type TodoProps = {
  todo: Todo;
  removeTodo: (id: string) => void;
  toggleCompleteStatus: (text: string) => void;
};

const TodoItem = ({ todo, removeTodo, toggleCompleteStatus }: TodoProps) => {
  return (
    <div>
      <h2>{todo.text}</h2>
      <button type="button" onClick={() => removeTodo(todo.id)}>
        Remove
      </button>
      <button type="button" onClick={() => {
        return toggleCompleteStatus(todo.id);
      }}>
        {todo.isCompleted ? 'Incomplete' : 'Mark completed'}
      </button>
    </div>
  );
};

export default TodoItem;
