<template>
    <div>
        <div class="card">
            <div class="columns is-12 is-multiline" style="margin-top: -30px;">
                <div class="column is-2 is-mobile-12">
                    <label>
                        {{ $t('messages.country') }}
                    </label>
                    <Dropdown 
                        v-model="form.country_id" 
                        :options="getCountries.data.props" 
                        optionLabel="name" 
                        placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        filter
                        @change="filterProvinceById(form.country_id)"
                    />
                </div>
                <div class="column is-2 is-mobile-12">
                    <label>
                        {{ $t('messages.realestate_type') }}
                    </label>
                    <Dropdown 
                        v-model="form.real_estate_type_id" 
                        :options="realEstateTypes.data.props" 
                        optionLabel="name" 
                        :placeholder="$t('placeholder.dropdownSelect')" 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        @change="onSearch"
                    />
                </div>
                <div class="column is-2 is-mobile-12">
                    <label>
                        {{ $t('messages.service_model') }}
                    </label>
                    <Dropdown 
                        v-model="form.service_model" 
                        :options="servicemodels" 
                        optionLabel="name" 
                        :placeholder="$t('placeholder.dropdownSelect')" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        class="w-full" 
                        @change="onSearch"
                    />
                </div>
                <div class="column is-2 is-mobile-12">
                    <label>
                        {{ $t('messages.room_type') }}
                    </label>
                    <Dropdown 
                        v-model="form.room_type" 
                        :options="roomTypes" 
                        optionLabel="name" 
                        :placeholder="$t('placeholder.dropdownSelect')" 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        @change="onSearch"
                    />
                </div>
                <div class="column is-2 is-mobile-12">
                    <label>
                        {{ $t('messages.total_bed') }}
                    </label>
                    <input 
                        class="input"
                        type="text" 
                        name="total_bed"
                        v-model="form.total_bed" 
                        :placeholder="$t('placeholder.inputText')"
                        style="font-family: 'NotoSansLao','Montserrat', sans-serif"
                        @keyup.enter="onSearch"
                        @input="onClearSearch"
                    />
                </div>
                <div class="column is-2 is-mobile-12">
                    <label>
                        {{ $t('messages.total_bath') }}
                    </label>
                    <input 
                        class="input is-"
                        type="text" 
                        name="total_bath"
                        v-model="form.total_bath" 
                        style="font-family: 'NotoSansLao','Montserrat', sans-serif"
                        :placeholder="$t('placeholder.inputText')"
                        @keyup.enter="onSearch"
                        @input="onClearSearch"
                    />
                </div>
            </div>
        </div>
        <Divider style="margin-top: -20px;" />
        <br/>
        <div class="flex justify-content-center">
            <ProgressSpinner v-if="isProgressBar.isShow"/>
        </div>
        <div style="min-height: 50vh;">
            <div class="profile-container">
                <div class="profile-box" v-for="(item, index) in state.data.props" :key="index" @click="viewDetail(item.id)">
                    <img :src="item.image" alt="user header" class="img" />
                    <div class="box-detail">
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
                        <p style="width: 230px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            {{  item.village }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <Divider/>
        <Paginator 
            :first="first"
            :rows="setStateFilter.limit" 
            :totalRecords="state.data.total" 
            @page="onPageChange"
        >
        </Paginator>
    </div>
</template>
<script setup lang='ts'>
    import { useRouter, useRoute } from 'vue-router';
    import Divider from 'primevue/divider';
    import { homerealEstateStore } from '@/modules/realEstate/homepage/stores/home.store'
    import { onMounted, ref, computed } from 'vue';
    import Dropdown from 'primevue/dropdown';
    import { formatNumber } from '@/common/utils/format.currency';
    import Paginator from 'primevue/paginator';
    import ProgressSpinner from 'primevue/progressspinner';
    import { dashboardStore } from '@/modules/realEstate/admin/dashboard/stores/store';
    import { useI18n } from 'vue-i18n';

    const { getAllCountries, getCountries, getAllProvinces, getProvinces } = dashboardStore();
    const { form, getAll, state, setStateFilter, realEstateTypes, isProgressBar, getAllData } = homerealEstateStore();

    const router = useRouter();
    const { query } = useRoute();
    const { t } = useI18n();

    const servicemodels = ref([
        { id: 'all', name: t('messages.all') },
        { id: 'sale', name: t('messages.service_sale') },
        { id: 'rent', name: t('messages.service_rent') }
    ]);

    const roomTypes = ref([
        { id: 'all', name: t('messages.all') },
        { id: 'air', name: t('messages.air') },
        { id: 'fan', name: t('messages.fan') },
        { id: 'no', name: t('messages.none') },
    ]);

    const filterProvinceById = async (id: any) => {
        await getAllProvinces(id);
        getProvinces.data.props.unshift({ id: 'all', name: t('messages.all') });

        await onSearch();
    }

    async function onClearSearch(e: any) {
        const fieldName = e.target.name;

        if (e.target.value === '') {
            if (fieldName === 'total_bed') {
                if (setStateFilter.filter?.total_bed !== undefined) {
                    setStateFilter.filter.total_bed = ''
                }
            }

            if (fieldName === 'total_bath') {
                if (setStateFilter.filter?.total_bath !== undefined) {
                    setStateFilter.filter.total_bath = ''
                }
            }

            await onSearch();
        }
    }
    
    onMounted(async() => {
        await initComponent();
        await getAllCountries();
        await getAllData();

        getCountries.data.props.unshift({ id: 'all', name: t('messages.all') });
        form.country_id = getCountries.data.props.length > 0 ? getCountries.data.props[0].id : undefined;
       
        realEstateTypes.data.props.unshift({ id: 'all', name: t('messages.all') });
        form.real_estate_type_id = realEstateTypes.data.props.length > 0 ? realEstateTypes.data.props[0].id : undefined;
    })

    const onSearch = async () => {
        if (setStateFilter.filter) {
            setStateFilter.filter.real_estate_type_id = form.real_estate_type_id === 'all' ? '' : form.real_estate_type_id;
            setStateFilter.filter.service_model = form.service_model === 'all' ? '' : form.service_model;
            setStateFilter.filter.room_type = form.room_type === 'all' ? '' : form.room_type;
            setStateFilter.filter.total_bed = form.district_id === 'all' ? '' : form.total_bed;
            setStateFilter.filter.total_bath = form.province_id === 'all' ? '' : form.total_bath;
            setStateFilter.filter.country_id = form.country_id === 'all' ? '' : form.country_id;
        }

        router.push({
            query: {
                page: setStateFilter.page,
                limit: setStateFilter.limit,
                real_estate_type_id: form.real_estate_type_id,
                service_model: form.service_model,
                room_type: form.room_type,
                total_bed: form.total_bed,
                total_bath: form.total_bath,
                country_id: form.country_id,
            }
        })
        
        await getAll();
    }

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

    const viewDetail = async (id: any) => {
      router.push({ name: 'detail.house', params: { id: id }});
    }

    async function onPageChange(event: any) {
        setStateFilter.page = event.page + 1;
        setStateFilter.limit = event.rows;

        const { page, limit } = setStateFilter
        router.push({ name: 'home', query: 
            { 
                page, 
                limit
            } 
        })

        await getAll();
    }

    const first = computed(() => {
        let result: number = 0

        if(setStateFilter.page && setStateFilter.limit){
            result = (setStateFilter.page - 1) * setStateFilter.limit
        }
        return result
    })
    
</script>

<style scoped lang="scss">
    @import 'bulma/css/bulma.css';

    .profile-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .profile-box {
        box-shadow: #0002 0 1.6px 3.6px,#0000001c 0 .3px .9px;
        flex-basis: calc(25% - 20px);
        border-radius: 5px;
        cursor: pointer;
        .img {
            width: 100%;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
        }
        .box-detail {
            padding: 15px;
        }
    }

    /* สำหรับจอ Desktop ขนาดใหญ่ (1440px ขึ้นไป) ให้แสดงเป็น 5 คอลัมน์ */
    // @media screen and (min-width: 1440px) {
    //     .profile-box {
    //         flex-basis: calc(20% - 20px); /* Five columns */
    //     }
    // }

    /* สำหรับจอขนาดใหญ่มาก (1920px ขึ้นไป) ให้แสดงเป็น 6 คอลัมน์ */
    @media screen and (min-width: 1920px) {
        .profile-box {
            flex-basis: calc(20% - 20px); /* Six columns */
        }
    }

    @media screen and (max-width: 768px) {
        .profile-box {
            flex: 1 1 100%;
        }
    }
</style>
  