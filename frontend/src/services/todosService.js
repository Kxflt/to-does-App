import axios from "axios";

export const createTodo = (content) => {
  return axios.post("http://localhost:8000/api/todos", {
    content,
  });
};

export const getTodos = () => {
  return axios.get("http://localhost:8000/api/todos");
};

export const updateState = (id, state) => {
  return axios.put("http://localhost:8000/api/todos/state", {
    id,
    state,
  });
};

export const deleteTodo = (id) => {
  return axios.put(`http://localhost:8000/api/todos/delete/${id}`);
};

export const deleteTodos = () => {
  return axios.put("http://localhost:8000/api/todos/delete");
};

export const deleteDoneTodos = () => {
  return axios.put("http://localhost:8000/api/todos/done");
};
