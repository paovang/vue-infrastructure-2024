<template>
    <nav class="navbar is-light navbar1" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" style="font-size: 20px; font-weight: bold" @click="goToHome">
                    {{ $t('messages.home')}}
                </a>

                <a class="navbar-item" @click="goToHome">
                    {{ $t('messages.real_estate')}}
                </a>

                <a class="navbar-item" @click="goToAbout">
                    {{ $t('messages.about')}}
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
    import { useRouter } from 'vue-router';


    const router = useRouter();

    const goToHome = async () => {
        await router.push({ name: 'home'});
        window.location.reload();
    }

    const goToAbout = async () => {
        await router.push({ name: 'about.us'});
    }
</script>

<style scoped>
    @import 'bulma/css/bulma.css';
    
    .navbar1 {
        padding: 0px 80px 0px 80px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
    }

    @media only screen and (max-width: 767px) {
        .navbar1 {
            display: none;
        }
    }
</style>