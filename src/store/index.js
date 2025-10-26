import { defineStore } from "pinia";

export const useUserStore = defineStore('user',{
    // 반응형 데이터
    state: () => ({
        username: '',
        token: '',
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
        }
    }

})