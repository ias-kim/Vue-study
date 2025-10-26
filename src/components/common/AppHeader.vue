<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TIL
      </router-link>
    </div>
    <div class="navigations">
      <!-- -->
      <template v-if="userStore.isLogin">
      <span class="username">{{ userStore.username }}1</span>
      <a href="javascript:;" @click="logoutUser">Logout</a>
      </template>
      <!---->
      <template v-else>
      <router-link to="/login">로그인</router-link>
      <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from '@/store/index'
import { computed } from 'vue';
import {useRouter} from 'vue-router';
import {deleteCookie} from '@/utils/cookies';
const router = useRouter();
const userStore = useUserStore()

const logoLink = computed(() => userStore.isLogin ? '/main' : '/login');

function logoutUser() {
    userStore.clearUsername();
    userStore.clearToken();
    deleteCookie('til_auth');
    deleteCookie('til_user');
    router.push({name: 'Login'});
}
</script>
<style scoped>
.username {
    color: white;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>