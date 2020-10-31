import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  TodoAction,
  IsLoadingActon
} from "./actions";

export type Todo = {
  text: string;
  isCompleted: boolean;
};

export type TodoState = Todo[];

const initialState: TodoState = [];


export const isLoading = (state = false, action: IsLoadingActon) => {
  const { type } = action
  switch(type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true
    case LOAD_TODOS_FAILURE:
    case LOAD_TODOS_SUCCESS:
      return false
    default:
      return state
  }
}

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
