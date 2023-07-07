import axios from "axios";

export const login = (email, password) => {
  return axios.post("http://localhost:8000/api/login", {
    email,
    password,
  });
};

export const signUp = (name, surname, gender, email, password) => {
  return axios.post("http://localhost:8000/api/account", {
    name,
    surname,
    gender,
    email,
    password,
  });
};
