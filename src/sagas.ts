import { Todo } from "./store";
import { put, call, all, takeEvery } from "redux-saga/effects";
import {
  LOAD_TODOS,
  CREATE_TODO,
  CreateTodoAction,
  loadTodosSuccess,
  loadTodosFailure,
  syncTodo,
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

function* addTodoRequest(action: CreateTodoAction) {
  const {
    payload: { text },
  } = action;
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

function* watchLoadTodos() {
  yield takeEvery(LOAD_TODOS, fetchTodos);
}

function* watchCreateTodo() {
  yield takeEvery(CREATE_TODO, addTodoRequest);
}

export default function* rootSaga() {
  yield all([watchLoadTodos(), watchCreateTodo()]);
}
