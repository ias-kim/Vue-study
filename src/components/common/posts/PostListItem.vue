<template>
    <li>
        <div class="post-title">
            {{ postItem.title }}
        </div>
        <div class="post-content">
            {{ postItem.content }}
        </div>
        <div class="post-time">
            {{ postItem.createdAt }}
        </div>
    </li>
</template>

<script setup>
const props = defineProps({
    postItem: {
        type: Object,
        required: true,
    }
})
</script>

<style>

</style>