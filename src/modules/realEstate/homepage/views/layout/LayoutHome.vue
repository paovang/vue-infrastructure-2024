<template>
    <div>
        <Navbar/>
        <FooterHomePage style="margin-top: 52px;" />
        <div class="home-view">
            <router-view></router-view> 
        </div>
        <Footer/>
    </div>
</template>  

<script setup lang='ts'>
    import Navbar from './Navbar.vue';
    import Footer from './Footer.vue';
    import FooterHomePage from './Navbar-HomePage.vue';
</script>

<style scoped>
    .home-view {
        margin-top: 130px;
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