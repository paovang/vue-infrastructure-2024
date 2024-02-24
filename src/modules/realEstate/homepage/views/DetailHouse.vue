<template>
    <div style="margin: 20px">
        <Galleria 
            :value="realEstateGetOne.data.props.gallery" 
            :responsiveOptions="responsiveOptions" 
            :numVisible="5" 
            :circular="true" 
            containerStyle="width: 100%;"
            :showItemNavigators="true" 
            :showThumbnails="false"
            :autoPlay="true"
        >
            <template #item="slotProps">
                <img 
                    :src="slotProps.item.image" 
                    :alt="slotProps.item.alt" 
                    style="width: 100%; height: 70vh; display: block;"
                    class="gallery-image"  
                />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.image" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>

        <div class="columns is-12" style="margin-top: 20px;">
            <div class="column is-desktop-6 is-mobile-12">
                <p>How much home can you afford?</p>
                <p>Foreclosure</p>
                <h3 style="font-weight: bold;">
                    $35,000
                </h3>
                <p>3 bed 2 bath 1,381sqft 1,381 square feet 8,712sqft lot</p>
                <p>5307 Newton Ave N, Brooklyn Center, MN 55430</p>
                <div style="margin-top: 20px;">
                    <Button class="button is-info" @click="reserve" style="font-family: 'Phetsarath OT';">ຈອງເລີຍ</Button>
                </div>
            </div>
            <div class="column is-mobile-12 is-desktop-6" style="text-align: center;">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.4655459091437!2d102.61605547449916!3d17.9570649830305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312469b0df33de9f%3A0xe9bf50ca85a1a3ce!2sKM%2052%20School!5e0!3m2!1sen!2sla!4v1708750445867!5m2!1sen!2sla" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <!-- <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.9389565896167!2d102.6259785581835!3d18.03843928339644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31245de15531b821%3A0x164c7f83dd5ea5b2!2z4Lqu4LuJ4Lqy4LqZIOC6lOC6suC6p-C6reC6meC6l-C6uOC6geC6ouC7iOC6suC6hyAzNSwwMDAg4LqB4Lq14LqaIERhdm9uZSBzaG9w!5e1!3m2!1sen!2sus!4v1707285263764!5m2!1sen!2sus" 
                    width="100%" 
                    height="200" 
                    style="border:0;" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe> -->
            </div>
        </div>
        <reserve-component
            ref="createForm"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Galleria from 'primevue/galleria';
import ReserveComponent from '../components/Reserve.Component.vue';
import Button from 'primevue/button';
import { homerealEstateStore } from '@/modules/realEstate/homepage/stores/home.store'
import { useRoute } from 'vue-router';

const { getOne, realEstateGetOne } = homerealEstateStore();

const route = useRoute();

const createForm = ref();

const reserve = async () => {
    createForm.value.visible = true;
}

onMounted(async () => {
    await getOne(Number(route.params.id));
});

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
    @import 'bulma/css/bulma.css';

    .gallery-image,
    .thumbnail-image {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
</style>