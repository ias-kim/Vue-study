import axios from 'axios';

import { setInterceptors } from './common/interceptors';

function initInstance() {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // headers: {
    //   Authorization: userStore.token,
    // },
  });
  return setInterceptors(instance);
}
const instance = initInstance();

export function registerUser(userData) {
  return instance.post("signup", userData);
}

export function loginUser(userData) {
  return instance.post("login", userData);
}