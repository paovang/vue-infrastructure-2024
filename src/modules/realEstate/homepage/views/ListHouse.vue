<template>
    <div>
        <div class="card">
            <div class="columns is-12 is-multiline" style="margin-top: -30px;">
                <div class="column is-2 is-mobile-12">
                    <label>
                        {{ $t('messages.realestate_type') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        name="real_estate_type"
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
                        <span class="text-red-500"> *</span>
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
                        <span class="text-red-500"> *</span>
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
                        {{ $t('messages.province') }}
                    <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        v-model="form.province_id" 
                        :options="provinces.data.props" 
                        optionLabel="name" 
                        placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        filter
                        @change="filterDistrictByid(form.province_id)"
                    />
                </div>
                <div class="column is-2 is-mobile-12">
                    <label>
                        {{ $t('messages.district') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        v-model="form.district_id" 
                        :options="districts.data.props" 
                        optionLabel="name" 
                        placeholder="Select a City" 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        filter
                        @change="onSearch"
                    />
                </div>
                <div class="column is-2 is-mobile-12">
                    <label>
                        {{ $t('messages.village') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <input-text
                        v-model="filterVillage"
                        :placeholder="$t('placeholder.inputText')" 
                        style="font-family: NotoSansLao, Montserrat"
                        class="w-full"
                        name="village"
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
            <div class="columns is-12 is-multiline" v-if="!isProgressBar.isShow">
                <div class="column is-3 is-mobile-12" v-for="(item, index) in state.data.props" :key="index">
                    <Card class="is-card" @click="viewDetail(item.id as string)">
                        <template #header>
                            <img :src="item.image" alt="user header" style="width: 100%; height: 200px;" />
                        </template>
                        <template #title>
                        <span>
                            {{ formatNumber(item.price?.[0]?.price, item.country?.currency) }}
                        </span>
                        </template>
                        <template #subtitle>
                        <span>{{ item.name }}</span> |
                        <span>{{ item.status }}</span> |
                        <span>{{ item.service_model }}</span>
                        </template>
                        <template #content>
                        <p class="detail">
                            {{ item.real_estate_type?.name }},
                            <span>{{ item.room_type }}</span>,
                            <span>ຍາວ: {{ item.wide }}</span>,
                            <span>ກ້ວາງ: {{ item.long }}</span>
                        </p>
                        <p class="detail">
                            {{  item.village }},
                            {{  item.district?.name }},
                            {{  item.province?.name }}
                        </p>
                        </template>
                    </Card>
                </div>
            </div>
        </div>
        <br/>
        <Divider/>
        <Paginator 
            :first="first"
            :rows="setStateFilter.limit" 
            :totalRecords="state.data.total" 
            :rowsPerPageOptions="[8, 12, 24, 36]"
            @page="onPageChange"
        >
        </Paginator>
    </div>
</template>
<script setup lang='ts'>
    import { useRouter, useRoute } from 'vue-router';
    import Card from 'primevue/card';
    import InputText from 'primevue/inputtext';
    import Divider from 'primevue/divider';
    import { homerealEstateStore } from '@/modules/realEstate/homepage/stores/home.store'
    import { onMounted, ref, computed } from 'vue';
    import Dropdown from 'primevue/dropdown';
    import { formatNumber } from '@/common/utils/format.currency';
    import Paginator from 'primevue/paginator';
    import ProgressSpinner from 'primevue/progressspinner';

    
    const { form, getAll, state, setStateFilter, getAllData, provinces, districts, realEstateTypes, isProgressBar } = homerealEstateStore();

    const router = useRouter();
    const { query } = useRoute();

    const servicemodels = ref([
        { id: 'all', name: 'ທັງໝົດ' },
        { id: 'sale', name: 'ຂາຍ' },
        { id: 'rent', name: 'ເຊົ່າ' }
    ]);

    const roomTypes = ref([
        { id: 'all', name: 'ທັງໝົດ' },
        { id: 'air', name: 'ເເອ' },
        { id: 'fan', name: 'ພັດລົມ' },
        { id: 'no', name: 'ບໍ່ມີ' },
    ]);


    const onSearch = async () => {
        if (setStateFilter.filter) {
            setStateFilter.filter.real_estate_type_id = form.real_estate_type_id === 'all' ? '' : form.real_estate_type_id;
            setStateFilter.filter.service_model = form.service_model === 'all' ? '' : form.service_model;
            setStateFilter.filter.room_type = form.room_type === 'all' ? '' : form.room_type;
            setStateFilter.filter.district_id = form.district_id === 'all' ? '' : form.district_id;
        }
        
        await getAll();
    }

    const filterVillage = computed<string>({
        get: () => setStateFilter.filter!.village || '',
        set: (value) => {
            if (setStateFilter.filter) {
                setStateFilter.filter.village = value;
            }
        }
    })

    async function onClearSearch(e: any) {
        const fieldName = e.target.name;

        if (e.target.value === '') {
            if (fieldName === 'village') {
                if (setStateFilter.filter?.village !== undefined) {
                    setStateFilter.filter.village = ''
                }
            }
            await getAll();
        }
    }

    const filterDistrictByid = async (id: any) => {
        if (setStateFilter.filter) {
            setStateFilter.filter.province_id = id;
        }

        await getAllData();
        await selectedDistrict();

        if (setStateFilter.filter) {
            setStateFilter.filter.district_id = form.district_id === 'all' ? '' : form.district_id;
            setStateFilter.filter.province_id = form.province_id === 'all' ? '' : form.province_id;
        }

        await getAll();
    }

    const selectedDistrict = async () => {
        realEstateTypes.data.props.unshift({ id: 'all', name: 'ທັງໝົດ' });
        provinces.data.props.unshift({ id: 'all', name: 'ທັງໝົດ' });
        districts.data.props.unshift({ id: 'all', name: 'ທັງໝົດ' });
        form.district_id = districts.data.props.length > 0 ? districts.data.props[0].id : undefined;
    }
    
    onMounted(async() => {
        await initComponent();
        await getAllData();
        realEstateTypes.data.props.unshift({ id: 'all', name: 'ທັງໝົດ' });
        provinces.data.props.unshift({ id: 'all', name: 'ທັງໝົດ' });
    })


    async function initComponent() {
        if (Object.keys(query).length !== 0) {
            setStateFilter.page = query.page ? Number(query.page) : 1
            setStateFilter.limit = query.limit ? Number(query.limit) : 10


            router.push({
                query: {
                    page: setStateFilter.page,
                    limit: setStateFilter.limit
                }
            })
        }
        await fetchAll();
    }

    const fetchAll = async() => {
        await getAll();
        
        form.real_estate_type_id = realEstateTypes.data.props.length > 0 ? realEstateTypes.data.props[0].id : undefined;
        form.province_id = provinces.data.props.length > 0 ? provinces.data.props[0].id : undefined;
    }

    const viewDetail = async (id: string) => {
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

<style scoped>
    @import 'bulma/css/bulma.css';

    .custom-columns {
        display: flex;
        flex-wrap: wrap;
    }
    .is-card:hover {
        cursor: pointer;
    }

    .detail {
        width: 270px; 
        overflow: hidden; 
        text-overflow: ellipsis; 
        white-space: nowrap;
    }
    
    /* Adjust these media queries as needed for your specific design */
    @media screen and (max-width: 1200px) {
        .detail {
            width: 260px;
        }
    }

    @media screen and (max-width: 992px) {
        .detail {
            width: 250px;
        }
    }

    @media screen and (max-width: 768px) {
        .detail {
            width: 260px;
        }
    }

    @media screen and (max-width: 576px) {
        .detail {
            width: 250px;
        }
    }
</style>
  