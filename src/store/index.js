import { defineStore } from "pinia";
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from "@/utils/cookies";
import { loginUser } from '@/api/index'

export const useUserStore = defineStore('user',{
    // 반응형 데이터
    state: () => ({
        username: getUserFromCookie() || '',
        token: getAuthFromCookie() || '',
    }),
    // 계산된 속성
    getters : {
        isLogin: (state) => state.username !== ''
    },
    // 메서드 state 변경 및 비동기
    actions: {
        setUsername(name) {
            this.username = name
        },
        clearUsername() {
            this.username = '';
        },
        setToken(token) {
            this.token = token
        },
        async LOGIN(userData) {
            const { data } = await loginUser(userData);
            console.log(data.token);

            this.setToken(data.token);
            this.setUsername(data.user.username);
            saveAuthToCookie(data.token);
            saveUserToCookie(data.user.username);
            
            return data;
        }
    }
})