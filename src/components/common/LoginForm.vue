<template>
    <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button
          :disabled="!password"
          type="submit"
          class="btn"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router'; 
import { loginUser } from '@/api/index';
import { useUserStore } from '@/store/index' 
// import validateEmail from '@/utils/validation';
const router = useRouter();
const userStore = useUserStore()

const username = ref('');
const password = ref('');
const logMessage = ref('');

// const isUsernameValid = computed(() => {
//     return validateEmail(username.value);
// })

function initForm() {
    username.value = '';
    password.value = '';
}
async function submitForm() {
    try {
    const userData = {
        username: username.value,
        password: password.value
    }
    const { data } = await loginUser(userData);
    console.log(data.token)
    userStore.setToken(data.token);
    userStore.setUsername(data.user.username);
    router.push({ name: 'Main' });


    } catch (error) {
        console.log(error.response.data);
        logMessage.value = error.response.data;
    } finally {
        initForm();
    }

}


</script>

<style>
.btn {
  color: white;
}
</style>