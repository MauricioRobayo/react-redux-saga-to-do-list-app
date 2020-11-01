import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState, Todo } from "./store";
import {
  removeTodo,
  markCompletedTodo,
} from "./actions";

export const removeTodoRequest = (
  id: string
): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "delete",
    });
    const deletedTodo: Todo = await response.json();
    dispatch(removeTodo(deletedTodo.id));
  } catch (e) {
    console.log(e);
  }
};

export const markCompletedTodoRequest = (
  id: string
): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: "post",
      }
    );
    const completedTodo: Todo = await response.json();
    dispatch(markCompletedTodo(completedTodo.id));
  } catch (e) {
    console.log(e);
  }
};
