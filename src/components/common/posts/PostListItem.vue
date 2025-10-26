<template>
    <li>
        <div class="post-title">
            {{ postItem.title }}
        </div>
        <div class="post-content">
            {{ postItem.content }}
        </div>
        <div class="post-time">
            {{ $filters.formatDate(postItem.createdAt) }}
            <ion-icon name="add" @click="routeEditPage"></ion-icon>
            <ion-icon name="trash" @click="deleteItem"></ion-icon>
        </div>
    </li>
</template>

<script setup>
import { deletePost } from '@/api/posts';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
    postItem: {
        type: Object,
        required: true,
    }
});
const emit = defineEmits(['refresh']);


async function deleteItem() {
    if (confirm('you wannt to delete it')) {
        await deletePost(props.postItem._id);
        emit('refresh');
        console.log('삭제');
    }
};
async function routeEditPage() {
    const id = props.postItem._id
    router.push(`/post/${id}`);
}
</script>

<style>

</style>