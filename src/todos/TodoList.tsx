import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { Todo } from '../reducers'
import NewTodoForm from "./NewTodoForm";
import { removeTodo, toggleCompleteStatus } from "../actions";

type TodoListProps = {
  todos: Todo[];
  removeTodo: (text: string) => void;
  toggleCompleteStatus: (text: string) => void;
};

const TodoList = ({ todos, removeTodo, toggleCompleteStatus }: TodoListProps) => {
  return (
    <>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoItem
          key={todo.text}
          todo={todo}
          removeTodo={removeTodo}
          toggleCompleteStatus={toggleCompleteStatus}
        />
      ))}
    </>
  );
};

const mapStateToProps = ({ todos }: { todos: Todo[] }) => ({
  todos,
});

const mapDispatchToProps = {
  removeTodo,
  toggleCompleteStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
