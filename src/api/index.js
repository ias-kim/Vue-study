import axios from 'axios';

import { setInterceptors } from './common/interceptors';

function initInstance() {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });
}
// Axios 초기화 함수
function initInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

export const instance = initInstance();
export const posts = initInstanceWithAuth('posts');
