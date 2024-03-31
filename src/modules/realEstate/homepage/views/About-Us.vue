<template>
    <div>
        <p style="font-size: 18px; font-weight: bold;">
            {{ aboutUs.data.props.title }}
        </p>
        <br/>
        <div>
            <iframe 
                class="iframe-link_videos"
                :src="`https://www.youtube.com/embed/${aboutUs.data.props.link_videos}`" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            ></iframe>
        </div>
        <br/>
        <p v-html="aboutUs.data.props.description" class="about-description"></p>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { homerealEstateStore } from '../stores/home.store';


    const { getAboutUs, aboutUs } = homerealEstateStore();

    onMounted(async () => {
        await getAboutUs();
    })
</script>

<style>
    .about-description {
        font-size: 18px;
    }
    .ql-video {
        width: 100% !important;
        height: 500px !important;
    }

    .iframe-link_videos {
        width: 100% !important;
        height: 400px !important;
    }

    @media only screen and (max-width: 767px) {
        .ql-video {
            width: 100% !important;
            height: 200px !important;
        }

        .iframe-link_videos {
            width: 100% !important;
            height: 200px !important;
        }
    }
</style>