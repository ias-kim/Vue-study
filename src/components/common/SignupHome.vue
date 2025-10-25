<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { registerUser } from '@/api/index';

const username = ref('');
const password = ref('');
const nickname = ref('');
const logMessage = ref('');

function initForm() {
    username.value = '';
    password.value = '';
    nickname.value = '';
}

async function submitForm() {
    console.log('폼제출');
    try {
    const userData = {
        username: username.value,
        password: password.value,
        nickname: nickname.value
    }
    const { data } = await registerUser(userData);
    console.log(data);
    logMessage.value = `${data.username}님 환영합니다!`;
    } catch (error) {
        console.log(error);
        logMessage.value = error;
    }

    initForm();
}

</script>

<style>

</style>