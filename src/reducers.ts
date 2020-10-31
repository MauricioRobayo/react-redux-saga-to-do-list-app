import { CREATE_TODO, REMOVE_TODO, TodoAction } from "./actions";

export type Todo = {
  text: string;
};

export type TodoState = Todo[];

const initialState: TodoState = [];

export const todos = (state = initialState, action: TodoAction) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO:
      return [...state, {text: payload.text, isCompleted: false }];
    case REMOVE_TODO:
      return state.filter((todo) => todo.text !== payload.text)
    default:
      return state;
  }
};
