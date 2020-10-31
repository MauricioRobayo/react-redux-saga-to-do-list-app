import React from "react";
import { connect } from "react-redux";
import TodoItem, { Todo } from "./TodoItem";
import NewTodoForm from "./NewTodoForm";
import { removeTodo } from '../actions'

type TodoListProps = {
  todos: Todo[];
  removeTodo: (text: string) => void
};

const TodoList = ({ todos, removeTodo }: TodoListProps) => {
  return (
    <>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoItem key={todo.text} todo={todo} removeTodo={removeTodo} />
      ))}
    </>
  );
};

const mapStateToProps = ({ todos }: {todos: Todo[]}) => ({
  todos
})

const mapDispatchToProps = {
  removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
