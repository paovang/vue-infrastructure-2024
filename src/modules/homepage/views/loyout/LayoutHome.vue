<template>
    <div class="layout-home-page">
        <HomePage />
        <router-view></router-view> 
    </div>
</template>  

<script setup lang='ts'>
    import HomePage from '../Home.vue';
</script>

<style scoped>
    .layout-home-page {
        padding: 0px 100px 0px 100px;
    }
</style>