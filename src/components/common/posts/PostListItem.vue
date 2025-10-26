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
            <ion-icon name="add"></ion-icon>
            <ion-icon name="trash" @click="deleteItem"></ion-icon>
        </div>
    </li>
</template>

<script setup>
const props = defineProps({
    postItem: {
        type: Object,
        required: true,
    }
});

function deleteItem() {

}
</script>

<style>

</style>