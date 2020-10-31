import { CREATE_TODO, REMOVE_TODO, TodoAction } from "./actions";

type Todo = {
  text: string;
};

type TodoState = Todo[];

const initialState: TodoState = [];

export const todos = (state = initialState, action: TodoAction) => {
  const { type, payload: { text } } = action;

  switch (type) {
    case CREATE_TODO:
      return [...state, {text, isCompleted: false }];
    case REMOVE_TODO:
      return state.filter((todo) => todo.text !== text)
    default:
      return state;
  }
};
