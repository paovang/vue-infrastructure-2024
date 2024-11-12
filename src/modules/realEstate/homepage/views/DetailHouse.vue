<template>
    <div>
        <div style="margin-top: -20px;" class="btn-back" @click="goBack">
            <i class="pi pi-arrow-left" style="color: green"></i>
            {{ $t('back') }}
        </div>
        <p style="margin-top: 15px;"></p>
        <div class="gallery">
            <div class="main-image" @click="visible = true">
                <img :src="realEstateGetOne.data.props.image" alt="Main Image" />
            </div>
            <div class="thumbnail-grid" @click="visible = true">
                <div class="thumbnail more" v-for="(item, index) in limitedGallery" :key="index">
                    <img :src="item.image" alt="Thumbnail 4" />
                    <span class="more-count" v-if="index+1 >= 4">+ {{ realEstateGetOne.data.props.gallery.length }}</span>
                </div>
            </div>
        </div>

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
                    <span style="margin-left: 10px;">
                        {{ realEstateGetOne.data.props.service_model }}
                    </span>
                    <span>
                        , {{ $t('messages.name') }}: {{ realEstateGetOne.data.props.owner_name }},
                    </span>
                    <span style="background: #00b7c3; padding: 2px; border-radius: 4px; color: white; margin-left: 5px;">
                        {{ $t('messages.refer') }}: {{ realEstateGetOne.data.props.refer }}
                    </span>
                </p>
                <p style="margin-top: 5px;">
                    <span>
                        {{ $t('messages.total_bed') }}: {{ realEstateGetOne.data.props.total_bed }}
                    </span>
                    <span>
                        , {{ $t('messages.total_bath') }}: {{ realEstateGetOne.data.props.total_bath }}
                    </span>
                    <span>
                        , {{ $t('messages.garage') }}: {{ realEstateGetOne.data.props.garage }} / {{ $t('car_amount') }}
                    </span>
                </p>
                <p>
                    <span>{{ realEstateGetOne.data.props.trans_real_estate_type?.name }}</span>
                    <!-- <span> | {{ realEstateGetOne.data.props.service_model }}</span> -->
                    <span> , {{ realEstateGetOne.data.props.room_type }}</span>
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
                    <span>{{ $t('messages.long') }}: {{ realEstateGetOne.data.props.long }} {{ locale !== 'en' ? 'm' : ''}}</span>
                    <span>, {{ $t('messages.wide') }}: {{ realEstateGetOne.data.props.wide }} {{ locale !== 'en' ? 'm' : ''}}</span>
                </p>
                <p style="font-weight: bold; font-size: 18px;">
                    <a :href="realEstateGetOne.data.props.location" target="_blank">
                        <i class="pi pi-map-marker"></i>
                        {{ $t('viewLocation') }}
                    </a>
                </p>
                <Divider/>
                <p v-if="realEstateGetOne.data.props.remark" style="font-size: 18px; font-weight: bold; margin-top: 5px;">
                    {{ $t('messages.details') }}:
                </p>
                <p>
                    {{ realEstateGetOne.data.props.remark }}
                </p>
                <div style="margin-top: 20px;">
                    <Button class="button is-info" @click="reserve" style="font-family: 'NotoSansLao','Montserrat', sans-serif">
                        {{ $t('button.appointment') }}
                    </Button>
                </div>
            </div>
            <!-- <div class="column is-mobile-12 is-desktop-6" style="text-align: center;">
                <iframe 
                    :src="realEstateGetOne.data.props.location" 
                    width="100%" 
                    height="450" 
                    style="border:0;" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div> -->
        </div>
        
        <reserve-component ref="createForm" />

        <!-- Modal for displaying larger image -->
        <Dialog 
            v-model:visible="visible" modal :header="$t('messages.gallery')" 
            :style="{ width: '100rem' }" 
            class="p-dialog p-component p-dialog-maximized"
        >
            <div class="box-show-gallery">
                <p v-for="(item, index) in limitedGallery" :key="index">
                    <img :src="item.image" alt="Thumbnail 4" />
                </p>
            </div>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import ReserveComponent from '../components/Reserve.Component.vue';
import Button from 'primevue/button';
import { homerealEstateStore } from '@/modules/realEstate/homepage/stores/home.store'
import { useRoute } from 'vue-router';
import { formatNumber } from '@/common/utils/format.currency';
import Divider from 'primevue/divider';
import { useRouter } from 'vue-router';
import { useI18n } from "vue-i18n";
import Dialog from 'primevue/dialog';


const { getOne, realEstateGetOne } = homerealEstateStore();
const { locale } = useI18n();

const route = useRoute();
const router = useRouter();

const visible = ref(false);
const createForm = ref();

const reserve = async () => {
    createForm.value.visible = true;
}

onMounted(async () => {
    await getOne(Number(route.params.id));
});

const limitedGallery = computed(() => {
    const gallery = realEstateGetOne?.data?.props?.gallery || [];
    return gallery.slice(0, 4);
});

const goBack = async () => {
    await router.push({ name: 'home'});
}
</script>

<style lang="scss" scoped>
    @import 'bulma/css/bulma.css';

    .box-show-gallery {
        display: flex;
        width: 100%;
        height: auto;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5px;
        img {
            width: 100%;
            object-fit: cover;
        }
    }

    .gallery-image {
        margin-top: -10px;
        width: 100%; 
        height: 80vh; 
        display: block;
        object-fit: cover;
    }

    .btn-back:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        .gallery-image {
            width: 100%; 
            height: 40vh; 
            display: block;
            object-fit: fill;
        }
    }


    /** Gallery */
    @media screen and (max-width: 768px) {
        .gallery {
            flex-direction: column;
        }
        
        .main-image {
            max-width: 100%;
            max-height: 40vh;
            img {
                max-width: 100%;
                max-height: 40vh;
            }
        }
        
        .thumbnail-grid {
            grid-template-columns: repeat(2, 1fr);
            max-height: 30vh;
        }
    }

    @media screen and (min-width: 1024px) and (max-width: 1366px) {
        .gallery {
            flex-direction: column; /* เปลี่ยนการจัดเรียงจากแนวตั้งเป็นแนวนอน */
        }
    }

    .gallery {
        display: flex;
        gap: 8px;
        cursor: pointer;
    }

    .main-image {
        width: 100%;
        height: 60vh;
        overflow: hidden;
        border-radius: 5px;
        position: relative;
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3); 
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 5px;
        }
        &:hover::after {
            opacity: 1;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease; 
        }
        // &:hover img {
        //     transform: scale(1.1);
        // }
    }

    .thumbnail-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 8px;
        width: 100%;
        height: 60vh;
    }

    .thumbnail {
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3); 
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 5px;
        }

        &:hover::after {
            opacity: 1;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
            border-radius: 5px;
        }
        // &:hover img {
        //     transform: scale(1.1);
        // }
    }

    .more {
        position: relative;
        border-radius: 5px;
    }

    .more-count {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.5);
    }
</style>