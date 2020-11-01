import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED_STATUS,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  TodosActionTypes,
} from "./actions";
import { AppState } from './store'

type TodosState = AppState['todos']

const initialState: TodosState = {
  data: [],
  isLoading: false,
}

export const todos = (state = initialState, action: TodosActionTypes): TodosState => {
  switch (action.type) {
    case CREATE_TODO: 
      return {
        ...state,
        data: [...state.data, action.payload.todo]
      };
    case REMOVE_TODO: 
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload.id)
      };
    case MARK_COMPLETED_STATUS:
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, isCompleted: true };
          }
          return todo;
        })
      };
    case LOAD_TODOS_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        data: action.payload.todos
      }
    case LOAD_TODOS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true
      }
    case LOAD_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};
