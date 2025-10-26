<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
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
            <button type="submit" class="btn">Edit</button>
        </form>
        <p class="log">
            {{ logMessage }}
        </p>
    </div>
</div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { fetchPost, editPost } from '@/api/posts';
import { useRoute, useRouter } from 'vue-router'; 
const route = useRoute();
const router = useRouter();
const title = ref('');
const content = ref('');
const logMessage = ref('');

const isContentsValid = computed(() => (content.value?.length || 0) <= 200);

async function submitForm() {
    const id = route.params.id
    try {
        await editPost(id, {
        title: title.value,
        content: content.value,
    });
        router.push('/main');
    } catch (error) {
        console.log(error);
        logMessage.value = error;
    }
}
async function fetchData() {
    const id = route.params.id;
    const { data } = await fetchPost(id);
    console.log(data);
    title.value = data.title;
    content.value = data.content;
} 
onMounted(() => {
    fetchData()
});

</script>

<style scoped>
.form-wrapper .from {
    width: 100%;
}
.btn {
    color: white;
}
</style>