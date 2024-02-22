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
                        :options="realestateType.props" 
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
                        :options="stateProvince.data.props" 
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
                        :options="stateDistrict.data.props" 
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
        <div class="columns is-12 is-multiline">
            <div class="column is-3 is-mobile-12" v-for="(item, index) in state.data.props" :key="index">
                <Card class="is-card" @click="viewDetail(item.id as string)">
                    <template #header>
                        <img :src="item.image" alt="user header" style="width: 100%;" />
                    </template>
                    <template #title>
                    <span>
                        {{ item.price?.[0]?.price }}
                    </span>
                    </template>
                    <template #subtitle>
                    <span>ເປີດ / ຈອງເເລ້ວ</span>,
                    <span>ຮູບເເບບບໍລິການ: {{ item.service_model }}</span>
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
</template>
<script setup lang='ts'>
    import { useRouter, useRoute } from 'vue-router'
    import Card from 'primevue/card';
    import InputText from 'primevue/inputtext';
    import Divider from 'primevue/divider';
    import { homerealEstateStore } from '@/modules/realEstate/homepage/stores/home.store'
    import { onMounted, ref, computed } from 'vue';
    import { realEstateServiceStore } from '@/modules/realEstate/rentHouse/memberServices/stores/real-estate-service.store';
    import Dropdown from 'primevue/dropdown';
    import { provinceStore } from '@/modules/realEstate/address/stores/province.store';
    import { districtStore } from '@/modules/realEstate/address/stores/district.store';
    
    const { form, getAll, state, setStateFilter } = homerealEstateStore();
    const { getOne, realestateType } = realEstateServiceStore();
    const { getAll: getAllProvince, state: stateProvince, setStateFilter: setStateProvinceFilter } = provinceStore();
    const { getAll: getAllDistrict, state: stateDistrict, setStateFilter: setStateDistrictFilter } = districtStore();

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
        if (setStateDistrictFilter.filter) {
            setStateDistrictFilter.filter.province_id = id;
            await getAllDistrict();
            stateDistrict.data.props.unshift({ id: 'all', name: 'ທັງໝົດ' });
            await selectedDistrict();

            if (setStateFilter.filter) {
                setStateFilter.filter.district_id = form.district_id === 'all' ? '' : form.district_id;
                setStateFilter.filter.province_id = form.province_id === 'all' ? '' : form.province_id;
            }

            await getAll();
        }
    }

    const selectedDistrict = async () => {
        form.district_id = stateDistrict.data.props.length > 0 ? stateDistrict.data.props[0].id : undefined;
    }

    onMounted(async() => {
        await initComponent();
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
        await getOne();

        realestateType.props.unshift({ id: 'all', name: 'ທັງໝົດ' });
        setStateProvinceFilter.limit = 300;
        await getAllProvince();
        stateProvince.data.props.unshift({ id: 'all', name: 'ທັງໝົດ' });

        form.real_estate_type_id = realestateType.props.length > 0 ? realestateType.props[0].id : undefined;
        form.province_id = stateProvince.data.props.length > 0 ? stateProvince.data.props[0].id : undefined;
    }

    const viewDetail = async (id: string) => {
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

    .detail {
        width: 270px; 
        overflow: hidden; 
        text-overflow: ellipsis; 
        white-space: nowrap;
    }
</style>
  