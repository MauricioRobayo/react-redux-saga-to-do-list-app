import React from "react";
import styled from 'styled-components/macro';

import { Todo } from "../types";

const TodoItemWrapper = styled.div`
  background-color: white;
  padding: 1rem;
  display: flex;
  border-radius: 4px;
  margin: 1rem 0;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

type TodoProps = {
  todo: Todo;
  removeTodo: (id: string) => void;
  markCompletedTodo: (id: string) => void;
};

const TodoItem = ({ todo, removeTodo, markCompletedTodo }: TodoProps) => {
  return (
    <TodoItemWrapper>
      <h2>{todo.text}</h2>
      <div className='buttons'>
        <button type="button" onClick={() => removeTodo(todo.id)}>
          Remove
        </button>
        {todo.isCompleted ? null : (
          <button type="button" onClick={() => markCompletedTodo(todo.id)}>
            Mark completed
          </button>
        )}
      </div>
    </TodoItemWrapper>
  );
};

export default TodoItem;
