import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export function registerUser(userData) {
  // const url = "http://localhost:3000/signup"; // 엔드포인트

  return instance.post("signup", userData);
}

export function loginUser(userData) {

  return instance.post("login", userData);
}