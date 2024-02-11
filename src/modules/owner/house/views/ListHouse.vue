<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 class="mb-3">
                    ລາຍການ ຂໍ້ມູນທັງໝົດ
                </h2>
            </span>
            <span class="w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0">
                <Button 
                    icon="pi pi-plus-circle"
                    rounded 
                    severity="info" 
                    @click="pushRouteAddHouse()"
                />
            </span>
        </div>

        <DataTable 
            :value="state.data.props" 
            @page="onPageChange"
            paginator 
            :first="first"
            :rowsPerPageOptions="[5, 10, 20, 50]" 
            tableStyle="min-width: 50rem"
            :loading="state.isLoading" 
            lazy
            :totalRecords="state.data.total"
            :rows="setStateFilter.limit"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="ສະແດງ {first} ຫາ {last} ຈາກ {totalRecords} ແຖວ"
        >
            <template #header>
                <div class="col-12 md:col-12 flex flex-row">
                    <div class="col-12 md:col-3">
                        <label>
                        ປະເພດ ບໍລິການ
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            name="real_estate_type"
                            v-model="form.real_estate_type_id" 
                            :options="realestateType.props" 
                            optionLabel="name" 
                            placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                            class="w-full" 
                            optionValue="id"
                            :highlightOnSelect="true" 
                            @change="onSearch"
                        />
                    </div>
                    <div class="col-12 md:col-3">
                        <label>
                            ຮູບເເບບ ບໍລິການ
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            v-model="form.service_model" 
                            :options="servicemodels" 
                            optionLabel="name" 
                            placeholder="Select a City" 
                            optionValue="id"
                            :highlightOnSelect="true" 
                            class="w-full" 
                            @change="onSearch"
                        />
                    </div>
                    <div class="col-12 md:col-3">
                        <label>
                            ປະເພດຫ້ອງ
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            v-model="form.room_type" 
                            :options="roomTypes" 
                            optionLabel="name" 
                            placeholder="Select a City" 
                            class="w-full" 
                            optionValue="id"
                            :highlightOnSelect="true" 
                            @change="onSearch"
                        />
                    </div>
                    <div class="col-12 md:col-3">
                        <label>
                            ເເຂວງ
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
                </div>
                <div class="col-12 md:col-12 flex flex-row">
                    <div class="col-12 md:col-3">
                        <label>
                            ເມືອງ
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
                    <div class="col-12 md:col-3">
                        <label>
                            ບ້ານ
                            <span class="text-red-500"> *</span>
                        </label>
                        <input-text
                            v-model="filterVillage"
                            placeholder="ຄົ້ນຫາ ດ້ວຍເບີໂທລະສັບ..."
                            style="font-family: NotoSansLao, Montserrat"
                            class="w-full"
                            name="village"
                            @keyup.enter="onSearch"
                            @input="onClearSearch"
                        />
                    </div>
                    <div class="col-12 md:col-3">
                        <label>
                            ລວງກ້ວາງ
                            <span class="text-red-500"> *</span>
                        </label>
                        <input-text
                            v-model="filterWide"
                            placeholder="ຄົ້ນຫາ ລວງກ້ວາງ..."
                            style="font-family: NotoSansLao, Montserrat"
                            class="w-full"
                            name="wide"
                            @keyup.enter="onSearch"
                            @input="onClearSearch"
                        />
                    </div>
                    <div class="col-12 md:col-3">
                        <label>
                            ລວງຍາວ
                            <span class="text-red-500"> *</span>
                        </label>
                        <input-text
                            v-model="filterLong"
                            placeholder="ຄົ້ນຫາ ລວງກ້ວາງ..."
                            style="font-family: NotoSansLao, Montserrat"
                            class="w-full"
                            name="long"
                            @keyup.enter="onSearch"
                            @input="onClearSearch"
                        />
                    </div>
                </div>
            </template>

            <Column field="id" :header="$t('table.header.index')">
                <template #body="item">
                    {{ item.index + 1 }}
                </template>
            </Column>
            <Column field="real_estate_type.name" header="ປະເພດບໍລິການ"></Column>
            <Column field="service_model" header="ຮູບເເບບບໍລິການ"></Column>
            <Column field="room_type" header="ປະເພດຫ້ອງ"></Column>
            <Column field="village" header="ບ້ານ"></Column>
            <Column field="district.name" header="ເມືອງ"></Column>
            <Column field="district.province.name" header="ເເຂວງ"></Column>
            <Column field="zip_code" header="zip code"></Column>
            <Column field="wide" header="ລວງກ້ວາງ"></Column>
            <Column field="long" header="ລວງຍາວ"></Column>
            <Column headerStyle="width: 10rem">
                    <template #body="{ data }">
                        <div class="flex flex-wrap gap-2 btn-right">
                            <Button 
                                type="button" 
                                icon="pi pi-eye" 
                                rounded 
                                severity="success"   
                                style="color: white;" 
                            />
                            <Button 
                                type="button" 
                                icon="pi pi-pencil" 
                                rounded 
                                severity="warning"  
                                style="color: white;" 
                                @click="editHouse(data.id)"
                            />
                            <Button 
                                type="button" 
                                icon="pi pi-trash" 
                                rounded 
                                severity="danger"
                            />
                        </div>
                    </template>
                </Column>
        </DataTable>
    </div>
</template>
<script setup lang="ts">
    import Button from 'primevue/button';
    import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
    import Column from 'primevue/column';
    import InputText from 'primevue/inputtext';
    import { onMounted, ref, computed } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import Dropdown from 'primevue/dropdown';
    import { houseStore } from '../../../owner/house/stores/house.store'
    import { realEstateServiceStore } from '../../../rent_house/memberServices/stores/real-estate-service.store';
    import { provinceStore } from '../../../address/stores/province.store';
    import { districtStore } from '../../../address/stores/district.store';

    const router = useRouter()
    const { query } = useRoute()

    const { form, getAll, state, setStateFilter } = houseStore();
    const { getOne, realestateType } = realEstateServiceStore();
    const { getAll: getAllProvince, state: stateProvince, setStateFilter: setStateProvinceFilter } = provinceStore();
    const { getAll: getAllDistrict, state: stateDistrict, setStateFilter: setStateDistrictFilter } = districtStore();

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

    async function initComponent() {
        if (Object.keys(query).length !== 0) {
            setStateFilter.page = query.page ? Number(query.page) : 1
            setStateFilter.limit = query.limit ? Number(query.limit) : 10


            router.push({
                query: {
                    page: setStateFilter.page,
                    limit: setStateFilter.limit,
                    // real_estate_type_id: query.real_estate_type_id || undefined,
                }
            })
        }
        await fetchAll();
    }

    onMounted(async() => {
        await initComponent();
    })

    const editHouse = async (id: number) => {
        router.push({ name: 'owner.edit.house', params: { id: id } });
    }

    async function onPageChange(event: DataTablePageEvent) {
        setStateFilter.page = event.page + 1;
        setStateFilter.limit = event.rows;

        const { page, limit } = setStateFilter
        router.push({ name: 'owner.house', query: 
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

    const onSearch = async () => {
        if (setStateFilter.filter) {
            setStateFilter.filter.real_estate_type_id = form.real_estate_type_id === 'all' ? '' : form.real_estate_type_id;
            setStateFilter.filter.service_model = form.service_model === 'all' ? '' : form.service_model;
            setStateFilter.filter.room_type = form.room_type === 'all' ? '' : form.room_type;
            setStateFilter.filter.district_id = form.district_id === 'all' ? '' : form.district_id;

            // router.push({ name: 'owner.house', query: 
            //     { 
            //         real_estate_type_id: setStateFilter.filter?.real_estate_type_id ? setStateFilter.filter.real_estate_type_id : undefined 
            //     } 
            // })
        }
       
        await getAll();
    }

    async function onClearSearch(e: any) {
        const fieldName = e.target.name;

        if (e.target.value === '') {
            if (fieldName === 'village') {
                if (setStateFilter.filter?.village !== undefined) {
                    setStateFilter.filter.village = ''
                }
            }
            if (fieldName === 'wide') {
                if (setStateFilter.filter?.wide !== undefined) {
                    setStateFilter.filter.wide = ''
                }
            }
            if (fieldName === 'long') {
                if (setStateFilter.filter?.long !== undefined) {
                    setStateFilter.filter.long = ''
                }
            }
            
            await getAll();
        }
    }

    const filterVillage = computed<string>({
        get: () => setStateFilter.filter!.village || '',
        set: (value) => {
            if (setStateFilter.filter) {
                setStateFilter.filter.village = value;
            }
        }
    })

    const filterWide = computed<string>({
        get: () => setStateFilter.filter!.wide || '',
        set: (value) => {
            if (setStateFilter.filter) {
                setStateFilter.filter.wide = value;
            }
        }
    })

    const filterLong = computed<string>({
        get: () => setStateFilter.filter!.long || '',
        set: (value) => {
            if (setStateFilter.filter) {
                setStateFilter.filter.long = value;
            }
        }
    })

    const fetchAll = async() => {
        await getAll();
        await getOne();

        realestateType.props.unshift({ id: 'all', name: 'ທັງໝົດ' });
       
        form.room_type = 'all';
        form.service_model = 'all';
        setStateProvinceFilter.limit = 1000;
        await getAllProvince();
        stateProvince.data.props.unshift({ id: 'all', name: 'ທັງໝົດ' });

        form.real_estate_type_id = realestateType.props.length > 0 ? realestateType.props[0].id : undefined;
        form.province_id = stateProvince.data.props.length > 0 ? stateProvince.data.props[0].id : undefined;

        if (setStateDistrictFilter.filter) {
            setStateDistrictFilter.filter.province_id = form.province_id;
            await getAllDistrict();
            stateDistrict.data.props.unshift({ id: 'all', name: 'ທັງໝົດ' });
            await selectedDistrict();

        }
    }

    const selectedDistrict = async () => {
        form.district_id = stateDistrict.data.props.length > 0 ? stateDistrict.data.props[0].id : undefined;
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

    const pushRouteAddHouse = async () => {
        router.push({ name: 'owner.add.house' });
    }
</script>