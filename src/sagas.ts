/* eslint-disable */
import { put, all, takeEvery } from 'redux-saga/effects';
import { LOAD_TODOS, loadTodosSuccess, loadTodosFailure } from './actions'

function* fetchTodos() {
  try {
    const response = yield fetch("http://localhost:8080/todos-delay");
    const todos = yield response.json();
    yield put(loadTodosSuccess(todos));
  } catch (e) {
    yield put(loadTodosFailure());
  }
}

function* loadTodos() {
  yield takeEvery(LOAD_TODOS, fetchTodos)
}

export default function* rootSaga() {
  yield all([
    loadTodos(),
  ])
}
