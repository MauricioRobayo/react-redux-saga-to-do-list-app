import { Todo } from "./store";
import { put, call, all, takeEvery, takeLatest } from "redux-saga/effects";
import {
  LOAD_TODOS,
  CREATE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED_STATUS,
  CreateTodoAction,
  RemoveTodoAction,
  MarkCompletedTodoAction,
  loadTodosSuccess,
  loadTodosFailure,
  syncTodo,
  removeTodo,
  markCompletedTodo,
} from "./actions";

function* fetchTodos() {
  try {
    const response = yield call(fetch, "http://localhost:8080/todos-delay");
    const todos: Todo[] = yield call([response, "json"]);
    yield put(loadTodosSuccess(todos));
  } catch (e) {
    yield put(loadTodosFailure());
  }
}

function* addTodoRequest({ payload: { text } }: CreateTodoAction) {
  try {
    const body = JSON.stringify({ text });
    const response = yield call(fetch, "http://localhost:8080/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });
    const todo: Todo = yield call([response, "json"]);
    yield put(syncTodo(todo));
  } catch (e) {
    console.log(e);
  }
}

function* removeTodoRequest({ payload: { id } }: RemoveTodoAction) {
  try {
    const response = yield call(fetch, `http://localhost:8080/todos/${id}`, {
      method: "delete",
    });
    const deletedTodo: Todo = yield call([response, "json"]);
    yield put(removeTodo(deletedTodo.id));
  } catch (e) {
    console.log(e);
  }
}

function* markCompletedTodoRequest({
  payload: { id },
}: MarkCompletedTodoAction) {
  try {
    const response = yield call(
      fetch,
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: "post",
      }
    );
    const completedTodo: Todo = yield call([response, "json"]);
    yield put(markCompletedTodo(completedTodo.id));
  } catch (e) {
    console.log(e);
  }
}

function* watchLoadTodos() {
  yield takeLatest(LOAD_TODOS, fetchTodos);
}

function* watchCreateTodo() {
  yield takeLatest(CREATE_TODO, addTodoRequest);
}

function* watchRemoveTodo() {
  yield takeEvery(REMOVE_TODO, removeTodoRequest);
}

function* watchMarkCompletedTodo() {
  yield takeEvery(MARK_COMPLETED_STATUS, markCompletedTodoRequest);
}

export default function* rootSaga() {
  yield all([
    watchLoadTodos(),
    watchCreateTodo(),
    watchRemoveTodo(),
    watchMarkCompletedTodo(),
  ]);
}
