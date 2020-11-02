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
import TodosApi from "./todosApi";

const todosApi = new TodosApi();

function* fetchTodos() {
  try {
    const todos: Todo[] = yield call([todosApi, 'fetchTodos']);
    yield put(loadTodosSuccess(todos));
  } catch (e) {
    yield put(loadTodosFailure());
  }
}

function* addTodoRequest({ payload: { text } }: CreateTodoAction) {
  try {
    const todo: Todo = yield call([todosApi, 'addTodo'], text);
    yield put(syncTodo(todo));
  } catch (e) {
    console.log(e);
  }
}

function* removeTodoRequest({ payload: { id } }: RemoveTodoAction) {
  try {
    const deletedTodo: Todo = yield call([todosApi, 'deleteTodo'], id);
    yield put(removeTodo(deletedTodo.id));
  } catch (e) {
    console.log(e);
  }
}

function* markCompletedTodoRequest({
  payload: { id },
}: MarkCompletedTodoAction) {
  try {
    const completedTodo: Todo = yield call([todosApi, 'markCompletedTodo'], id);
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
