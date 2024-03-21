<template>
    <div>
        <br/>
        <div class="columns is-multiline">
            <div class="column is-4 is-mobile-12 is-box" v-for="(item, index) in getRealEstateTypes.data.props" :key="index">
                <div class="card">
                    <p style="font-size: 20px; font-weight: bold; text-align: center;">{{ item.name }}</p>
                    <Divider/>
                    <div style="margin-top: 10px; line-height: 2rem;">
                        <p>
                            ລວມທັງໝົດ: {{ item.total }}
                            <span style="margin-left: 10px; color: #00b7c3;">
                                <i class="pi pi-arrow-right"></i>
                            </span>
                            <span style="margin-left: 10px; color: blue"> ເຊົ່າທັງໝົດ: {{ item.total_rent }}</span>
                        </p>
                        <p>
                            <span style="color: red;">
                                ຂາຍອອກທັງໝົດ: {{ item.total_buy }}
                            </span>
                            <span style="margin-left: 10px; color: #00b7c3">
                                <i class="pi pi-arrow-right"></i>
                            </span>
                            <span style="margin-left: 10px; color: green"> ຍອດເຫຼືອທັງໝົດ: {{ item.total_balance }}</span>
                        </p>
                    </div>
                    <Divider/>
                    <div style="line-height: 2rem;">
                        <p>
                            ຍອດທັງໝົດ: 200,000 ກີບ
                        </p>
                        <p style="color: red;">
                            ຍອດຂາຍທັງໝົດ: 200,000 ກີບ
                        </p>
                        <p style="color: blue;">
                            ຍອດເຊົ່າທັງໝົດ: 200,000 ກີບ
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import { onMounted } from 'vue';
    import { dashboardStore } from '../stores/store';
    import Divider from 'primevue/divider';

    const { reportRealEstateTypes, getRealEstateTypes } = dashboardStore();

    async function initComponent() {
        await reportRealEstateTypes();
    }

    
    onMounted(async () => {
        await initComponent();
    })
</script>

<style scoped>
    @import 'bulma/css/bulma.css';

    .is-box:hover {
        cursor: pointer;
    }
</style>