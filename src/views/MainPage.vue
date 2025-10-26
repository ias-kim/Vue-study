<template>
  <div>
    <div class="main list-container contents">
        <h1 class="page-header">Today I Learned</h1>
        <LoadingSpinner v-if="isLoading"></LoadingSpinner>
        <ul v-else>
            <PostListItem
              v-for="postItem in PostItems"
              :key="postItem._id"
              :postItem="postItem"
            ></PostListItem>
        </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PostListItem from '@/components/common/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

import { fetchPosts } from '@/api/index';

const postItems = ref([]);
const isLoading = ref(false);

async function fetchData() {
    isLoading.value = true;
    const { data } = await fetchPosts();
    isLoading.value = false;
    postItems.value = data.posts
}

onMounted(() => {
    fetchData();
})
</script>

<style>

</style>