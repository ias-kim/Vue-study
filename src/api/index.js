import axios from 'axios';

import { setInterceptors } from './common/interceptors';

// Axios 초기화 함수
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

// 회원가입 API
export function registerUser(userData) {
  return instance.post("signup", userData);
}

// 로그인 API
export function loginUser(userData) {
  return instance.post("login", userData);
}

export function fetchPosts() {
  return instance.get('posts');
}