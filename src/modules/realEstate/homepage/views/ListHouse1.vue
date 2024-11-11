<template>
    <div style="padding: 20px">
        <div class="row">
            <div class="column" v-for="item in state.data.props" :key="item.id">
                <img :src="item.image" alt="Not found image" class="card-image" v-if="item.image" />
                <div class="card-detail">
                    <p style="font-size: 24px; font-weight: bold;">
                        {{ formatNumber(item.price?.[0]?.price, item.country?.currency) }}
                    </p>
                    <p>
                        {{ item.name }}
                    </p>
                    <p>
                        <span style="background: green; padding: 2px; border-radius: 4px; color: white;">
                            {{ item.status }}
                        </span>
                        <span style="margin-left: 5px;">, {{ item.service_model }}</span> ,
                        <span style="background: #00b7c3; padding: 2px; border-radius: 4px; color: white;">
                            {{ $t('messages.refer') }}: 
                            {{ item.refer }}
                        </span>
                    </p>
                    <p>
                        {{ item.trans_real_estate_type?.name }},
                        <span>{{ $t('messages.long') }}: {{ item.long }}</span>,
                        <span>{{ $t('messages.wide') }}: {{ item.wide }}</span>
                    </p>
                    <p style="width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                        {{  item.village }}
                    </p>
                </div>
            </div>
            <div class="column" v-for="item in state.data.props" :key="item.id">
                <img :src="item.image" alt="Not found image" class="card-image" v-if="item.image" />
                <div class="card-detail">
                    <p style="font-size: 24px; font-weight: bold;">
                        {{ formatNumber(item.price?.[0]?.price, item.country?.currency) }}
                    </p>
                    <p>
                        {{ item.name }}
                    </p>
                    <p>
                        <span style="background: green; padding: 2px; border-radius: 4px; color: white;">
                            {{ item.status }}
                        </span>
                        <span style="margin-left: 5px;">, {{ item.service_model }}</span> ,
                        <span style="background: #00b7c3; padding: 2px; border-radius: 4px; color: white;">
                            {{ $t('messages.refer') }}: 
                            {{ item.refer }}
                        </span>
                    </p>
                    <p>
                        {{ item.trans_real_estate_type?.name }},
                        <span>{{ $t('messages.long') }}: {{ item.long }}</span>,
                        <span>{{ $t('messages.wide') }}: {{ item.wide }}</span>
                    </p>
                    <p style="width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                        {{  item.village }}
                    </p>
                </div>
            </div>
            <div class="column" v-for="item in state.data.props" :key="item.id">
                <img :src="item.image" alt="Not found image" class="card-image" v-if="item.image" />
                <div class="card-detail">
                    <p style="font-size: 24px; font-weight: bold;">
                        {{ formatNumber(item.price?.[0]?.price, item.country?.currency) }}
                    </p>
                    <p>
                        {{ item.name }}
                    </p>
                    <p>
                        <span style="background: green; padding: 2px; border-radius: 4px; color: white;">
                            {{ item.status }}
                        </span>
                        <span style="margin-left: 5px;">, {{ item.service_model }}</span> ,
                        <span style="background: #00b7c3; padding: 2px; border-radius: 4px; color: white;">
                            {{ $t('messages.refer') }}: 
                            {{ item.refer }}
                        </span>
                    </p>
                    <p>
                        {{ item.trans_real_estate_type?.name }},
                        <span>{{ $t('messages.long') }}: {{ item.long }}</span>,
                        <span>{{ $t('messages.wide') }}: {{ item.wide }}</span>
                    </p>
                    <p style="width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                        {{  item.village }}
                    </p>
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

.row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.column {
    flex-basis: calc(25% - 20px); /* Four columns on wide screens */
    background-color: #f8f7f7;
    border-radius: 5px;
}

/* สำหรับหน้าจอ Desktop ขนาดใหญ่กว่า 1440px ให้แสดงเป็น 5 คอลัมน์ */
// @media screen and (min-width: 1440px) {
//     .column {
//         flex-basis: calc(20% - 20px); /* Five columns on larger screens */
//     }
// }

// /* สำหรับจอขนาดใหญ่มาก (1920px ขึ้นไป) ให้แสดงเป็น 6 คอลัมน์ */
// @media screen and (max-width: 1920px) {
//     .column {
//         flex-basis: calc(20% - 20px); /* Six columns */
//     }
// }

@media screen and (max-width: 768px) {
    .column {
        flex: 1 1 100%; /* Full-width on mobile screens */
    }
}

.card-image {
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

.card-detail {
    padding: 0 20px 20px 20px;
}
</style>
  