<template>
    <div style="padding: 20px">
        <div class="row">
            <div class="column" v-for="i in state.data.props" :key="i.id">
                <div class="card" @click="router.push({ path: '/detail', query: { id: i.id } })">
                    <div class="card-header">
                        <img :src="i.image" alt="Not found image" class="card-image" v-if="i.image" />
                    </div>
                    <div class="card-body">
                        <p style="font-size: 24px; font-weight: bold;">
                            {{ formatNumber(i.price?.[0]?.price, i.country?.currency) }}
                        </p>
                        <p>
                            {{ i.name }}
                        </p>
                        <br />
                    </div>
                </div>
            </div>
            <div class="column" v-for="i in state.data.props" :key="i.id">
                <div class="card" @click="router.push({ path: '/detail', query: { id: i.id } })">
                    <div class="card-header">
                        <img :src="i.image" alt="Not found image" class="card-image" v-if="i.image" />
                    </div>
                    <div class="card-body">
                        <p style="font-size: 24px; font-weight: bold;">
                            {{ formatNumber(i.price?.[0]?.price, i.country?.currency) }}
                        </p>
                        <p>
                            {{ i.name }}
                        </p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
    import { useRouter, useRoute } from 'vue-router';
    import { homerealEstateStore } from '@/modules/realEstate/homepage/stores/home.store'
    import { onMounted } from 'vue';
    import { dashboardStore } from '@/modules/realEstate/admin/dashboard/stores/store';
    import { useI18n } from 'vue-i18n';
    import { formatNumber } from '@/common/utils/format.currency';

    const { getAllCountries, getCountries } = dashboardStore();
    const { form, getAll, state, setStateFilter, realEstateTypes, getAllData } = homerealEstateStore();

    const router = useRouter();
    const { query } = useRoute();
    const { t } = useI18n();
    
    onMounted(async() => {
        await initComponent();
        await getAllCountries();
        await getAllData();

        getCountries.data.props.unshift({ id: 'all', name: t('messages.all') });
        form.country_id = getCountries.data.props.length > 0 ? getCountries.data.props[0].id : undefined;
       
        realEstateTypes.data.props.unshift({ id: 'all', name: t('messages.all') });
        form.real_estate_type_id = realEstateTypes.data.props.length > 0 ? realEstateTypes.data.props[0].id : undefined;
    })

    async function initComponent() {
        if (Object.keys(query).length !== 0) {
            setStateFilter.page = query.page ? Number(query.page) : 1
            setStateFilter.limit = query.limit ? Number(query.limit) : 10
            const realEstateTypeId = query.real_estate_type_id !== undefined ? String(query.real_estate_type_id) : undefined;
            const serviceModel = query.service_model !== undefined ? String(query.service_model) : undefined;
            const roomType = query.room_type !== undefined ? String(query.room_type) : undefined;
            const totalBed = query.total_bed !== undefined ? String(query.total_bed) : undefined;
            const totalBath = query.total_bath !== undefined ? String(query.total_bath) : undefined;
            const countryId = query.country_id !== undefined ? String(query.country_id) : undefined;
           
            if (setStateFilter.filter) {
                setStateFilter.filter.real_estate_type_id = realEstateTypeId !== 'all' ? realEstateTypeId : "";
                setStateFilter.filter.service_model = serviceModel !== 'all' ? serviceModel : "";
                setStateFilter.filter.room_type = roomType !== 'all' ? roomType : "";
                setStateFilter.filter.total_bed = totalBed !== 'all' ? totalBed : "";
                setStateFilter.filter.total_bath = totalBath !== 'all' ? totalBath : "";
                setStateFilter.filter.country_id = countryId !== 'all' ? countryId : "";
            }

            router.push({
                query: {
                    page: setStateFilter.page,
                    limit: setStateFilter.limit,
                    real_estate_type_id: realEstateTypeId,
                    service_model: serviceModel,
                    room_type: roomType,
                    total_bed: totalBed,
                    total_bath: totalBath,
                    country_id: countryId
                }
            })
        }
        await fetchAll();
    }

    const fetchAll = async() => {
        await getAll();
        // form.real_estate_type_id = realEstateTypes.data.props.length > 0 ? realEstateTypes.data.props[0].id : undefined;
    }
    
</script>

<style scoped lang="scss">
    // @import 'bulma/css/bulma.css';

   .row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    // justify-content: center;
}

.column {
    flex: 1 1 calc(25% - 20px); /* Four columns on wide screens */
    box-sizing: border-box;
    max-width: 300px; /* Set a max width to prevent full width for single items */
}

@media screen and (max-width: 768px) {
    .column {
        flex: 1 1 100%; /* Full-width on mobile screens */
    }
}

.card {
    cursor: pointer;
    text-align: center;
    background-color: #f8f7f7;
    margin-bottom: 20px;
    border-radius: 5%;
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.card-image {
    width: 100%;
    height: 210px;
    margin-bottom: 10px;
}

.card-body {
    text-align: center;
}
</style>
  