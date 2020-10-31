import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  TodoAction,
} from "./actions";

export type Todo = {
  text: string;
  isCompleted: boolean;
};

export type TodoState = Todo[];

const initialState: TodoState = [];

export const todos = (state = initialState, action: TodoAction) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO:
      return [...state, { text: payload.text, isCompleted: false }];
    case REMOVE_TODO:
      return state.filter((todo) => todo.text !== payload.text);
    case MARK_COMPLETED:
      return state.map((todo) => {
        if (todo.text === payload.text) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    default:
      return state;
  }
};
