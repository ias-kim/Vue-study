<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
        <form class="form" @submit.prevent="submitForm">
            <div>
                <label for="title">Title:</label>
                <input id="title" type="text" v-model="title"/>
            </div>
            <div>
                <label for="content">Content:</label>
                <textarea id="contents" rows="5" v-model="content"/>
                <p v-if="!isContentsValid" class="validation-text warning">
                    Contents must be less than Long
                </p>
            </div>
            <button type="submit" class="btn">Create</button>
        </form>
        <p class="log">
            {{ logMessage }}
        </p>
    </div>
</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { addPost } from '@/api/posts'
const title = ref('');
const content = ref('');
const logMessage = ref('');

const isContentsValid = computed(() => content.value.length < 200);

async function submitForm() {
    try {
        const response = await addPost({
        title: title.value,
        content: content.value,
        });
        console.log(response);
    } catch (error) {
        console.log(error.response.data.message);
        logMessage.value = error.response.data.message;
    }

}
</script>

<style scoped>
.form-wrapper .form {
    width: 100%;
}
.btn {
    color: white;
}
</style>