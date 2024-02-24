<template>
    <div>
        <Navbar />
        <div class="home-view">
            <router-view></router-view> 
        </div>
        <Footer />
    </div>
</template>  

<script setup lang='ts'>
    import Navbar from './Navbar.vue';
    import Footer from './Footer.vue';
</script>

<style scoped>
    .home-view {
        margin-top: 80px;
        padding: 0px 80px 0px 80px;
        min-height: 80vh;
    }

    @media only screen and (max-width: 767px) {
        .home-view {
            margin-top: 50px;
            padding: 30px;
        }
    }
</style>