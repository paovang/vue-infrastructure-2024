<template>
    <div class="columns is-12 is-multiline">
        <div class="column is-3 is-mobile-12" v-for="(item, index) in cards" :key="index">
            <Card class="is-card" @click="viewDetail(item.id)">
                <template #header>
                    <img :src="item.headerImage" alt="user header" style="width: 100%;" />
                </template>
                <template #title>{{ item.price }}</template>
                <template #subtitle>{{ item.subtitle }}</template>
                <template #content>
                    <p>{{ item.info }}</p>
                    <p>{{ item.location }}</p>
                </template>
            </Card>
        </div>
    </div>
</template>
<script setup lang='ts'>
    import router from '@/router';
    import Card from 'primevue/card';
    
    const cards = [
      {
        id: 1,
        headerImage: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTwGTmgN4WclFT5_MqG2LWj9nSsaabJ_hdFIxxBFf_SPblOvYwmOQdGu6cSOEmULMLm595LQ_FahMEgDtjqqDU',
        price: '$3,500',
        subtitle: 'Foreclosure',
        location: 'Brooklyn Center, MN 55430',
        info: '3 bed 2 bath 1,381sqft 1,381 square feet 8,712sqft lot',
      },
      {
        id: 2,
        headerImage: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTwGTmgN4WclFT5_MqG2LWj9nSsaabJ_hdFIxxBFf_SPblOvYwmOQdGu6cSOEmULMLm595LQ_FahMEgDtjqqDU',
        price: '$3,500',
        subtitle: 'Foreclosure',
        location: 'Brooklyn Center, MN 55430',
        info: '3 bed 2 bath 1,381sqft 1,381 square feet 8,712sqft lot',
      },
      {
        id: 3,
        headerImage: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTwGTmgN4WclFT5_MqG2LWj9nSsaabJ_hdFIxxBFf_SPblOvYwmOQdGu6cSOEmULMLm595LQ_FahMEgDtjqqDU',
        price: '$3,500',
        subtitle: 'Foreclosure',
        location: 'Brooklyn Center, MN 55430',
        info: '3 bed 2 bath 1,381sqft 1,381 square feet 8,712sqft lot',
      },
      {
        id: 4,
        headerImage: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTwGTmgN4WclFT5_MqG2LWj9nSsaabJ_hdFIxxBFf_SPblOvYwmOQdGu6cSOEmULMLm595LQ_FahMEgDtjqqDU',
        price: '$3,500',
        subtitle: 'Foreclosure',
        location: 'Brooklyn Center, MN 55430',
        info: '3 bed 2 bath 1,381sqft 1,381 square feet 8,712sqft lot',
      },
      {
        id: 5,
        headerImage: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTwGTmgN4WclFT5_MqG2LWj9nSsaabJ_hdFIxxBFf_SPblOvYwmOQdGu6cSOEmULMLm595LQ_FahMEgDtjqqDU',
        price: '$3,500',
        subtitle: 'Foreclosure',
        location: 'Brooklyn Center, MN 55430',
        info: '3 bed 2 bath 1,381sqft 1,381 square feet 8,712sqft lot',
      },
      {
        id: 6,
        headerImage: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTwGTmgN4WclFT5_MqG2LWj9nSsaabJ_hdFIxxBFf_SPblOvYwmOQdGu6cSOEmULMLm595LQ_FahMEgDtjqqDU',
        price: '$3,500',
        subtitle: 'Foreclosure',
        location: 'Brooklyn Center, MN 55430',
        info: '3 bed 2 bath 1,381sqft 1,381 square feet 8,712sqft lot',
      },
    ];

    const viewDetail = async (id: number) => {
        router.push({ name: 'detail.house', params: { id: id }});
    }
</script>

<style scoped>
    @import 'bulma/css/bulma.css';

    .custom-columns {
        display: flex;
        flex-wrap: wrap;
    }
    .is-card:hover {
        cursor: pointer;
    }
</style>
  