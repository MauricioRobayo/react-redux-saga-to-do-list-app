import React from "react";
import { connect } from "react-redux";
import TodoItem, { Todo } from "./TodoItem";
import NewTodoForm from "./NewTodoForm";

type TodoListProps = {
  todos: Todo[];
};

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoItem key={todo.text} todo={todo} />
      ))}
    </>
  );
};

const mapStateToProps = ({ todos }: {todos: Todo[]}) => ({
  todos
})

export default connect(mapStateToProps)(TodoList);
