<script setup>
import AppHeader from '@/components/common/AppHeader.vue';
</script>

<template>
  <div>
    <AppHeader />
    <router-view></router-view>
  </div>
  
</template>

<style scoped>
@import './css/reset.css';
@import './css/common.css';
</style>
