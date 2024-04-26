<template>
    <div>
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
                    class="gallery-image"  
                />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.image" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>

        <div class="columns is-12" style="margin-top: 20px;">
            <div class="column is-desktop-6 is-mobile-12">
                <h3 style="font-weight: bold;">
                    <div v-for="(item, index) in realEstateGetOne.data.props.price" :key="index">
                        <div>
                            {{ formatNumber(item.price, item.currency) }}
                            <span v-if="item.unit_price">/ {{ item.unit_price }}</span>
                            <span style="margin-left: 10px;" v-if="realEstateGetOne.data.props.service_model === 'sale'">
                                <i class="pi pi-arrow-right"></i>
                            </span>
                            <span v-if="realEstateGetOne.data.props.service_model === 'sale'" style="margin-left: 10px;">
                                {{ $t('messages.est_m') }}: {{ formatNumber(item.est_m, item.currency) }}
                            </span>
                        </div>
                    </div>
                </h3>
                <Divider/>
                <p style="margin-top: 5px;">
                    <span style="background: green; padding: 2px; border-radius: 4px; color: white;">
                        {{ realEstateGetOne.data.props.status }}
                    </span>
                    <span>
                        | {{ $t('messages.name') }}: {{ realEstateGetOne.data.props.owner_name }} |
                    </span>
                    <span style="background: #00b7c3; padding: 2px; border-radius: 4px; color: white;">
                        {{ $t('messages.refer') }}: {{ realEstateGetOne.data.props.refer }}
                    </span>
                </p>
                <p style="margin-top: 5px;">
                    <span>
                        {{ $t('messages.total_bed') }}: {{ realEstateGetOne.data.props.total_bed }}
                    </span>
                    <span>
                        | {{ $t('messages.total_bath') }}: {{ realEstateGetOne.data.props.total_bath }}
                    </span>
                    <span>
                        | {{ $t('messages.garage') }}: {{ realEstateGetOne.data.props.garage }}
                    </span>
                </p>
                <p>
                    <span>{{ realEstateGetOne.data.props.trans_real_estate_type?.name }}</span>
                    <span> | {{ realEstateGetOne.data.props.service_model }}</span>
                    <span> | {{ realEstateGetOne.data.props.room_type }}</span>
                </p>
                <p>
                    <span>{{ realEstateGetOne.data.props.village }}</span>
                    <!-- <span>, {{ realEstateGetOne.data.props.district?.name }}</span>
                    <span>, {{ realEstateGetOne.data.props.province?.name }}</span> -->
                </p>
                <p>
                    <span v-if="realEstateGetOne.data.props.zip_code">
                        {{ $t('messages.zip_code') }}: {{ realEstateGetOne.data.props.zip_code }},
                    </span>
                    <span>{{ $t('messages.long') }}: {{ realEstateGetOne.data.props.long }} m</span>
                    <span>, {{ $t('messages.wide') }}: {{ realEstateGetOne.data.props.wide }} m</span>
                </p>
                <Divider/>
                <p v-if="realEstateGetOne.data.props.remark" style="font-size: 18px; font-weight: bold; margin-top: 5px;">
                    {{ $t('messages.details') }}:
                </p>
                <p>
                    {{ realEstateGetOne.data.props.remark }}
                </p>
                <div style="margin-top: 20px;">
                    <Button class="button is-info" @click="reserve" style="font-family: 'Phetsarath OT';">
                        {{ $t('button.appointment') }}
                    </Button>
                </div>
            </div>
            <div class="column is-mobile-12 is-desktop-6" style="text-align: center;">
                <iframe 
                    :src="realEstateGetOne.data.props.location" 
                    width="100%" 
                    height="450" 
                    style="border:0;" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
        </div>
        
        <reserve-component ref="createForm" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Galleria from 'primevue/galleria';
import ReserveComponent from '../components/Reserve.Component.vue';
import Button from 'primevue/button';
import { homerealEstateStore } from '@/modules/realEstate/homepage/stores/home.store'
import { useRoute } from 'vue-router';
import { formatNumber } from '@/common/utils/format.currency';
import Divider from 'primevue/divider';


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

    .gallery-image {
        width: 100%; 
        height: 70vh; 
        display: block;
        object-fit: fill;
    }

    @media screen and (max-width: 768px) {
        .gallery-image {
            width: 100%; 
            height: 40vh; 
            display: block;
            object-fit: fill;
        }
    }
</style>