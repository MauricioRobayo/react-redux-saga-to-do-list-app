import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED_STATUS,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  TodosActionTypes,
} from "./actions";
import { Todo } from './store'

export type TodoState = Todo[];

const initialState: TodoState = [];

export const isLoading = (state = false, action: TodosActionTypes) => {
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

export const todos = (state = initialState, action: TodosActionTypes): TodoState => {
  switch (action.type) {
    case CREATE_TODO: 
      return [...state, action.payload.todo];
    case REMOVE_TODO: 
      return state.filter((todo) => todo.id !== action.payload.id);
    case MARK_COMPLETED_STATUS:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    case LOAD_TODOS_SUCCESS: 
      return action.payload.todos
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state;
  }
};
