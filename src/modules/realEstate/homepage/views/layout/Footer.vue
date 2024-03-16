<template>
    <div class="footer">
        <div class="columns is-12">
            <div class="column is-4 is-mobile-12">
                <p class="title">{{ $t('footer.shop_on') }}</p>
                <div v-html="footer.data.props.shop_on" style="font-size: 18px; line-height: 2;"></div>
            </div>
            <div class="column is-5 is-mobile-12">
                <p class="title">{{ $t('footer.payment_information') }}</p>
                <div v-html="footer.data.props.payment_information" style="font-size: 18px; line-height: 2;"></div>
            </div>
            <div class="column is-3 is-mobile-12">
                <p class="title">{{ $t('footer.contact_us') }}</p>
                <p>
                    <i class="pi pi-inbox"></i>
                    {{ footer.data.props.email }}
                </p>
                <p style="margin-top: 10px;">
                    <i class="pi pi-whatsapp"></i>
                    {{ footer.data.props.whatsapp }}
                </p>
                <p style="margin-top: 20px;" class="facebook" @click="goToFacebook(footer.data.props.facebook)">
                    <i class="pi pi-facebook" style="font-size: 30px;"></i>
                </p>
                <p style="margin-top: 20px; font-size: 20px; font-weight: bold;">
                    {{ $t('footer.customer_service') }}
                </p>
                <br/>
                <div v-html="footer.data.props.customer_service" style="font-size: 18px; line-height: 2;"></div>
            </div>
        </div>
        <br/>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { homerealEstateStore } from '../../stores/home.store';

    const {  getAllData, footer } = homerealEstateStore();

    const goToFacebook = (value: string) => {
        console.log(value);
        window.open(value, '_blank');
    }

    onMounted(async() => {
        await getAllData();
    })
</script>

<style scoped>
    @import 'bulma/css/bulma.css';

    .footer {
        margin-top: 100px;
        background: black;
        min-height: 50vh;
        color: white;
        padding: 0px 80px 0px 80px;
    }
    .title {
        font-size: 20px;
        font-weight: bold;
        color: white;
    }
    .facebook:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 767px) {
      .footer {
        padding: 0px 30px 0px 30px;
      }
    }
</style>