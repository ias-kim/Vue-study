// Login, Register, Logout

import {instance} from './index';

// 회원가입 API
export function registerUser(userData) {
  return instance.post("signup", userData);
}

// 로그인 API
export function loginUser(userData) {
  return instance.post("login", userData);
}
