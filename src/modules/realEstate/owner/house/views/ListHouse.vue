<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 class="mb-3">
                    {{ $t('table.title.real_estate') }}
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
            :currentPageReportTemplate="`${$t('table.pagination.show')} {first} ${$t('table.pagination.to')} {last} ${$t('table.pagination.from')} {totalRecords} ${$t('table.pagination.row')}`"
        >
            <template #header>
                <div class="col-12 md:col-12 flex flex-row">
                    <div class="col-12 md:col-3">
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
                    <div class="col-12 md:col-3">
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
                    <div class="col-12 md:col-3">
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
                    <div class="col-12 md:col-3">
                        <label>
                            {{ $t('messages.province') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            v-model="form.province_id" 
                            :options="stateProvince.data.props" 
                            optionLabel="name" 
                            :placeholder="$t('placeholder.dropdownSelect')" 
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
                            {{ $t('messages.district') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            v-model="form.district_id" 
                            :options="stateDistrict.data.props" 
                            optionLabel="name" 
                            :placeholder="$t('placeholder.dropdownSelect')" 
                            class="w-full" 
                            optionValue="id"
                            :highlightOnSelect="true" 
                            filter
                            @change="onSearch"
                        />
                    </div>
                    <div class="col-12 md:col-3">
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
                    <div class="col-12 md:col-3">
                        <label>
                            {{ $t('messages.wide') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <input-text
                            v-model="filterWide"
                            :placeholder="$t('placeholder.inputText')" 
                            style="font-family: NotoSansLao, Montserrat"
                            class="w-full"
                            name="wide"
                            @keyup.enter="onSearch"
                            @input="onClearSearch"
                        />
                    </div>
                    <div class="col-12 md:col-3">
                        <label>
                            {{ $t('messages.long') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <input-text
                            v-model="filterLong"
                            :placeholder="$t('placeholder.inputText')" 
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
            <Column field="real_estate_type.name" :header="$t('table.header.realestate_type')"></Column>
            <Column field="service_model" :header="$t('table.header.service_model')"></Column>
            <Column field="room_type" :header="$t('table.header.room_type')"></Column>
            <Column field="village" :header="$t('table.header.village')"></Column>
            <Column field="district.name" :header="$t('table.header.district')"></Column>
            <Column field="district.province.name" :header="$t('table.header.province')"></Column>
            <Column field="zip_code" :header="$t('table.header.zip_code')"></Column>
            <Column field="wide" :header="$t('table.header.wide')"></Column>
            <Column field="long" :header="$t('table.header.long')"></Column>
            <Column headerStyle="width: 10rem" style="width: 23%">
                    <template #body="{ data }">
                        <div class="flex flex-wrap gap-2 btn-right">
                            <Button 
                                type="button" 
                                :label="$t('messages.payment')" 
                                severity="danger"   
                                style="color: white;" 
                                @click="paymentService(data.id)"
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
                                @click="confirmDelete(data.id)"
                            />
                        </div>
                    </template>
                </Column>
        </DataTable>

        <payment-service-component
            ref="createForm"
            :id="false"
            :on-submit="submitData"
            :form="form"
            :is-loading="btnLoading"
            @on-success="clearForm"
            :real-estate-service="findRealEstateService"
        />
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
    import { houseStore } from '@/modules/realEstate/owner/house/stores/house.store';
    import { realEstateServiceStore } from '@/modules/realEstate/rentHouse/memberServices/stores/real-estate-service.store';
    import { provinceStore } from '@/modules/realEstate/address/stores/province.store';
    import { districtStore } from '@/modules/realEstate/address/stores/district.store';
    import { HouseEntity } from '../entities/house.entity';
    import { useConfirm } from "primevue/useconfirm";
    import { useToast } from "primevue/usetoast";
    import PaymentServiceComponent from '../components/PaymentService.component.vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
    const router = useRouter()
    const { query } = useRoute()

    const toast = useToast();
    const confirm = useConfirm();

    const { form, getAll, state, setStateFilter, remove, findRealEstateServiceById, findRealEstateService } = houseStore();
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
    const createForm = ref();
    const btnLoading = ref(false);


    const paymentService = async (id: HouseEntity) => {
        await findRealEstateServiceById(id);
        form.id = (id as string);
        form.service_charge_id = findRealEstateService.data.props ? findRealEstateService.data.props[0].id : undefined;
        createForm.value.visible = true;
    }

   
    async function  submitData() {
        console.log('paovang: submit 2024')
    }

    async function clearForm() {
        console.log('clear....')
    }

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

    const deleteHouse = async (id: HouseEntity) => {
        await remove(id);

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await initComponent();
        }
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

    const confirmDelete = async (id: HouseEntity) => {
        confirm.require({
            message: t('confirmDelete.message'),
            header: t('confirmDelete.header'),
            rejectLabel: t('confirmDelete.rejectLabel'),
            acceptLabel: t('confirmDelete.acceptLabel'),
            rejectClass: 'p-button-secondary p-button-outlined',
            acceptClass: 'p-button-danger',
            accept: async () => {
                await deleteHouse(id);

                toast.add({ severity: 'success', summary: t('toast.summary.delete'), detail: t('toast.detail.delete'), life: 3000 });
            },
            reject: () => {
                toast.add({ severity: 'error', summary: t('toast.summary.cancel_delete'), detail: t('toast.detail.cancel_delete'), life: 3000 });
            }
        });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const pushRouteAddHouse = async () => {
        router.push({ name: 'owner.add.house' });
    }
</script>

<style>
    .btn-right {
        display: flex;
        justify-content: flex-end;
    }
</style>