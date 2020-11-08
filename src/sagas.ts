import { put, call, all, takeEvery, takeLatest } from "redux-saga/effects";

import {
  Todo,
  CreateTodoAction,
  RemoveTodoAction,
  MarkCompletedTodoAction,
} from "./types";
import {
  LOAD_TODOS,
  CREATE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED_STATUS,
  loadTodosSuccess,
  loadTodosFailure,
  syncTodo,
  removeTodo,
  markCompletedTodo,
  displayError,
} from "./actions";
import todosApi from "./todosApi";

function* fetchTodos() {
  try {
    const todos: Todo[] = yield call([todosApi, "fetchTodos"]);
    yield put(loadTodosSuccess(todos));
  } catch (e) {
    yield put(loadTodosFailure());
    yield put(displayError(String(e)));
  }
}

function* addTodoRequest({ payload: { text } }: CreateTodoAction) {
  try {
    const todo: Todo = yield call([todosApi, "addTodo"], text);
    yield put(syncTodo(todo));
  } catch (e) {
    yield put(displayError(String(e)));
  }
}

function* removeTodoRequest({ payload: { id } }: RemoveTodoAction) {
  try {
    const deletedTodo: Todo = yield call([todosApi, "deleteTodo"], id);
    yield put(removeTodo(deletedTodo.id));
  } catch (e) {
    yield put(displayError(String(e)));
  }
}

function* markCompletedTodoRequest({
  payload: { id },
}: MarkCompletedTodoAction) {
  try {
    const completedTodo: Todo = yield call([todosApi, "markCompletedTodo"], id);
    yield put(markCompletedTodo(completedTodo.id));
  } catch (e) {
    yield put(displayError(String(e)));
  }
}

function* watchTodos() {
  yield takeLatest(LOAD_TODOS, fetchTodos);
  yield takeLatest(CREATE_TODO, addTodoRequest);
  yield takeEvery(REMOVE_TODO, removeTodoRequest);
  yield takeEvery(MARK_COMPLETED_STATUS, markCompletedTodoRequest);
}

export default function* rootSaga() {
  yield all([
    watchTodos(),
  ]);
}
