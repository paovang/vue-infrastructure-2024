<template>
    <div class="card" style="margin: 20px">
        <Galleria 
            :value="images" 
            :responsiveOptions="responsiveOptions" 
            :numVisible="40" 
            :autoPlay="true"
            containerStyle="width: 100%;"
        >
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; height: 400px" class="gallery-image" />
            </template>
            <template #thumbnail="slotProps">
                <img 
                    :src="slotProps.item.thumbnailImageSrc" 
                    :alt="slotProps.item.alt" 
                    style="height:100px; width: 100%"
                />
            </template>
        </Galleria>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Galleria from 'primevue/galleria';


onMounted(() => {
    
});

const images = ref([
    {
        itemImageSrc: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTwGTmgN4WclFT5_MqG2LWj9nSsaabJ_hdFIxxBFf_SPblOvYwmOQdGu6cSOEmULMLm595LQ_FahMEgDtjqqDU',
        thumbnailImageSrc: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTwGTmgN4WclFT5_MqG2LWj9nSsaabJ_hdFIxxBFf_SPblOvYwmOQdGu6cSOEmULMLm595LQ_FahMEgDtjqqDU'
    },
    {
        itemImageSrc: 'https://static.wixstatic.com/media/f826c8_f558a61420e04bc6936589d0495d068a~mv2.jpg/v1/fill/w_640,h_480,al_b,q_80,usm_0.66_1.00_0.01,enc_auto/f826c8_f558a61420e04bc6936589d0495d068a~mv2.jpg',
        thumbnailImageSrc: 'https://static.wixstatic.com/media/f826c8_f558a61420e04bc6936589d0495d068a~mv2.jpg/v1/fill/w_640,h_480,al_b,q_80,usm_0.66_1.00_0.01,enc_auto/f826c8_f558a61420e04bc6936589d0495d068a~mv2.jpg'
    },
    {
        itemImageSrc: 'https://media-cdn.tripadvisor.com/media/photo-s/28/57/00/37/home-cuisine-de-maison.jpg',
        thumbnailImageSrc: 'https://media-cdn.tripadvisor.com/media/photo-s/28/57/00/37/home-cuisine-de-maison.jpg'
    },
    {
        itemImageSrc: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRkXBpCv0_aA9rtR69FyYsewBE9MJXUSVwfCh0y-gvEUd6xPRdILqtUAiqaw1QoiK5q98rAAmEBmQLWGrlUmtE',
        thumbnailImageSrc: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRkXBpCv0_aA9rtR69FyYsewBE9MJXUSVwfCh0y-gvEUd6xPRdILqtUAiqaw1QoiK5q98rAAmEBmQLWGrlUmtE'
    },
    {
        itemImageSrc: 'https://static.wixstatic.com/media/f826c8_f558a61420e04bc6936589d0495d068a~mv2.jpg/v1/fill/w_640,h_480,al_b,q_80,usm_0.66_1.00_0.01,enc_auto/f826c8_f558a61420e04bc6936589d0495d068a~mv2.jpg',
        thumbnailImageSrc: 'https://static.wixstatic.com/media/f826c8_f558a61420e04bc6936589d0495d068a~mv2.jpg/v1/fill/w_640,h_480,al_b,q_80,usm_0.66_1.00_0.01,enc_auto/f826c8_f558a61420e04bc6936589d0495d068a~mv2.jpg'
    }
]);

const responsiveOptions = ref([
    {
        breakpoint: '10px',
        numVisible: 2
    },
    {
        breakpoint: '75px',
        numVisible: 1
    }
]);
</script>

<style scoped>
    .gallery-image,
    .thumbnail-image {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }

    .thumbnail-image {
        height: 100px;
    }
</style>
