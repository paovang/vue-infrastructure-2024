<template>
    <nav class="navbar is-light navbar1" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" style="font-size: 20px; font-weight: bold" @click="goToHome">
                    {{ $t('messages.home')}}
                </a>

                <a class="navbar-item" @click="goToAbout" :class="{ 'is-active-tab': isCurrentRoute('about.us') }">
                    {{ $t('messages.about')}}
                </a>
                <a class="navbar-item" @click="goToHome" :class="{ 'is-active-tab': isCurrentRoute('home') }">
                    {{ $t('messages.real_estate')}}
                </a>
                <a class="navbar-item" @click="goToHotel" :class="{ 'is-active-tab': isCurrentRoute('hotel') }">
                    {{ $t('messages.hotel')}}
                </a>
            </div>

            <!-- <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                </div>
            </div> -->
        </div>
    </nav>
</template>

<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router';


    const router = useRouter();
    const route = useRoute();

    const goToHome = async () => {
        await router.push({ name: 'home'});
        window.location.reload();
    }

    const goToHotel = async () => {
        // สร้าง URL โดยการต่อข้อความ
        const url = `https://hotel.100100year.com`;
        // Redirect to the URL
        window.open(url, '_blank');
    }

    const goToAbout = async () => {
        await router.push({ name: 'about.us'});
    }

    const isCurrentRoute = (routeName: string) => {
        return route.name === routeName;
    }
</script>

<style scoped>
    @import 'bulma/css/bulma.css';
    
    .navbar1 {
        padding: 0px 80px 0px 80px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    .is-active-tab {
        background: #32323222;
    }

    @media only screen and (max-width: 767px) {
        .navbar1 {
            display: none;
        }
    }
</style>