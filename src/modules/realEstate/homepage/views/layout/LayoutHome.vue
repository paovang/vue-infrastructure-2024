<template>
    <div>
        <HomePage />
        <div class="home-view">
            <router-view></router-view> 
        </div>
    </div>
</template>  

<script setup lang='ts'>
    import HomePage from '../Home.vue';
</script>

<style scoped>
    .home-view {
        margin-top: 80px;
        padding: 0px 80px 0px 80px;
    }

    @media only screen and (max-width: 767px) {
        .home-view {
            margin-top: 50px;
            padding: 30px;
        }
    }
</style>