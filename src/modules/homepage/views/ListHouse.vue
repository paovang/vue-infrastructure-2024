<template>
    <div style="margin-top: 30px;">
        <div class="columns-3" v-for="(card, index) in cards" :key="index">
            <Card style="width: 20rem; overflow: hidden">
                <template #header>
                    <img :src="card.headerImage" alt="user header" style="width: 100%;" />
                </template>
                <template #title>{{ card.price }}</template>
                <template #subtitle>{{ card.subtitle }}</template>
                <template #content>
                    <p>{{ card.info }}</p>
                    <p>{{ card.location }}</p>
                </template>
            </Card>
        </div>
        <!-- <div class="" v-for="(card, index) in cards" :key="index">
           
        </div> -->
    </div>
  </template>
  
  
  
  
  
  <script setup lang="ts">
    import Card from 'primevue/card';
    
    const cards = [
      {
        headerImage: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTwGTmgN4WclFT5_MqG2LWj9nSsaabJ_hdFIxxBFf_SPblOvYwmOQdGu6cSOEmULMLm595LQ_FahMEgDtjqqDU',
        price: '$3,500',
        subtitle: 'Foreclosure',
        location: 'Brooklyn Center, MN 55430',
        info: '3 bed 2 bath 1,381sqft 1,381 square feet 8,712sqft lot',
      },
      {
        headerImage: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTwGTmgN4WclFT5_MqG2LWj9nSsaabJ_hdFIxxBFf_SPblOvYwmOQdGu6cSOEmULMLm595LQ_FahMEgDtjqqDU',
        price: '$3,500',
        subtitle: 'Foreclosure',
        location: 'Brooklyn Center, MN 55430',
        info: '3 bed 2 bath 1,381sqft 1,381 square feet 8,712sqft lot',
      }
    ];
  </script>
  