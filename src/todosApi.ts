import axios from "axios";

import { Todo } from "./types";

class TodosApi {
  private API_URL = "http://localhost:8080/todos";

  async fetchTodos(): Promise<Todo[]> {
    const response = await axios.get<Todo[]>(this.API_URL);
    return response.data;
  }

  async addTodo(text: string): Promise<Todo> {
    const response = await axios.post<Todo>(this.API_URL, { text });
    return response.data;
  }

  async deleteTodo(id: string): Promise<Todo> {
    const response = await axios.delete<Todo>(`${this.API_URL}/${id}`);
    return response.data;
  }

  async markCompletedTodo(id: string): Promise<Todo> {
    const response = await axios.post<Todo>(`${this.API_URL}/${id}/completed`);
    return response.data;
  }
}

const todosApi = new TodosApi();

export default todosApi;
