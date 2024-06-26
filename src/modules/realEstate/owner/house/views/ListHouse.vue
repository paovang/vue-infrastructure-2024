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
                    :label="$t('button.add')"
                    severity="info" 
                    @click="pushRouteAddHouse()"
                    :disabled="validationPermissions(GET_PERMISSIONS.REAL_ESTATE.CREATE)"
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
            scrollable
            :totalRecords="state.data.total"
            :rows="setStateFilter.limit"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :currentPageReportTemplate="`${$t('table.pagination.show')} {first} ${$t('table.pagination.to')} {last} ${$t('table.pagination.from')} {totalRecords} ${$t('table.pagination.row')}`"
        >
            <template #header>
                <div class="col-12 md:col-12 flex flex-row" style="margin-top: -15px">
                    <div class="col-12 md:col-5">
                        <label>
                            {{ $t('messages.search') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <input-text
                            v-model="filterVillage"
                            :placeholder="$t('placeholder.textSearch')" 
                            style="font-family: NotoSansLao, Montserrat"
                            class="w-full"
                            name="village"
                            @keyup.enter="onSearch"
                            @input="onClearSearch"
                        />
                    </div>
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
                    <div class="col-12 md:col-2">
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
                    <div class="col-12 md:col-2">
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
                </div>
            </template>

            <Column headerStyle="min-width: 20rem" frozen>
                <template #body="{ data }">
                    <div class="flex flex-wrap gap-2">
                        <Button 
                            type="button" 
                            severity="info"   
                            rounded
                            style="color: white; font-weight: bold" 
                            @click="confirmRefer(data.id)"
                            :disabled="isDisabled(data.status) || validationPermissions(GET_PERMISSIONS.REAL_ESTATE.UPDATE)"
                            class="btn-refer"
                        >
                            {{ $t('messages.refer') }}
                            <span class="p-badge p-component" style="margin-left: 5px; border-radius: 5px !important">
                                {{ data.refer }}
                            </span>
                        </Button>
                        <Button 
                            type="button" 
                            :label="data.status"
                            rounded 
                            :severity="getSeverity(data.status)"  
                            :disabled="isDisabled(data.status) || validationPermissions(GET_PERMISSIONS.REAL_ESTATE.UPDATE)"
                            style="color: white;" 
                            @click="confirmUpdateStatus(data.id)"
                        />
                        <Button 
                            type="button" 
                            icon="pi pi-pencil" 
                            rounded 
                            severity="warning"  
                            style="color: white;" 
                            @click="editHouse(data.id)"
                            :disabled="validationPermissions(GET_PERMISSIONS.REAL_ESTATE.UPDATE)"
                        />
                        <Button 
                            type="button" 
                            icon="pi pi-trash" 
                            rounded 
                            severity="danger"
                            @click="confirmDelete(data.id)"
                            :disabled="validationPermissions(GET_PERMISSIONS.REAL_ESTATE.DELETE)"
                        />
                    </div>
                </template>
            </Column>
            <Column field="id" :header="$t('table.header.index')">
                <template #body="item">
                    {{ item.index + 1 }}
                </template>
            </Column>
            <Column field="real_esate_number" :header="$t('table.header.real_esate_number')" headerStyle="min-width: 8rem"></Column>
            <Column field="name" :header="$t('table.header.real_estate_name')" headerStyle="min-width: 8rem"></Column>
            <Column field="trans_real_estate_type.name" :header="$t('table.header.realestate_type')" headerStyle="min-width: 8rem"></Column>
            <Column field="service_model" :header="$t('table.header.service_model')" headerStyle="min-width: 8rem"></Column>
            <Column field="room_type" :header="$t('table.header.room_type')" headerStyle="min-width: 8rem"></Column>
            <Column field="owner_name" :header="$t('table.header.owner')" headerStyle="min-width: 8rem"></Column>
            <Column field="agent_name" :header="$t('table.header.name')" headerStyle="min-width: 8rem"></Column>
            <Column field="village" :header="$t('table.header.address')" headerStyle="min-width: 15rem"></Column>
            <Column field="long" :header="$t('table.header.long')" headerStyle="min-width: 7rem"></Column>
            <Column field="wide" :header="$t('table.header.wide')" headerStyle="min-width: 6rem"></Column>
            <Column field="total_bed" :header="$t('table.header.total_bed')" headerStyle="min-width: 9rem"></Column>
            <Column field="total_bath" :header="$t('table.header.total_bath')" headerStyle="min-width: 8rem"></Column>
            <Column field="build_in" :header="$t('table.header.build_in')" headerStyle="min-width: 6rem"></Column>
            <Column field="garage" :header="$t('table.header.garage')" headerStyle="min-width: 6rem"></Column>
            <Column field="status" :header="$t('table.header.status')" headerStyle="min-width: 5rem"></Column>
            <Column field="created_by.name" :header="$t('table.header.created_by')" headerStyle="min-width: 8rem"></Column>
            <Column field="updated_by.name" :header="$t('table.header.updated_by')" headerStyle="min-width: 8rem"></Column>
            <Column field="created_at" :header="$t('table.header.created_at')" headerStyle="min-width: 8rem"></Column>
            <Column field="updated_at" :header="$t('table.header.updated_at')" headerStyle="min-width: 8rem"></Column>
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
    import { houseStore } from '@/modules/realEstate/owner/house/stores/house.store';
    import { realEstateServiceStore } from '@/modules/realEstate/rentHouse/memberServices/stores/real-estate-service.store';
    import { provinceStore } from '@/modules/realEstate/address/stores/province.store';
    import { districtStore } from '@/modules/realEstate/address/stores/district.store';
    import { HouseEntity } from '../entities/house.entity';
    import { useConfirm } from "primevue/useconfirm";
    import { useToast } from "primevue/usetoast";
    import { useI18n } from 'vue-i18n';
    import { GET_PERMISSIONS } from '@/common/utils/const';
    import { validationPermissions } from '@/common/utils/validation-permissions';

    const { t } = useI18n();
    const router = useRouter()
    const { query } = useRoute()

    const toast = useToast();
    const confirm = useConfirm();

    const { form, getAll, state, setStateFilter, remove, updateStatus, customerRefer } = houseStore();
    const { getOne, realestateType } = realEstateServiceStore();
    const { getAll: getAllProvince, state: stateProvince, setStateFilter: setStateProvinceFilter } = provinceStore();
    const { getAll: getAllDistrict, state: stateDistrict, setStateFilter: setStateDistrictFilter } = districtStore();

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

    const isDisabled = (status: string) => {
        return status === 'rent' || status === 'buy';
    }

    const getSeverity = (status: string) => {
        switch (status) {
            case 'open':
                return 'success';
            case 'close':
                return 'danger';
            case 'rent':
                return 'warning';
            case 'buy':
                return 'danger';
            default:
                return 'info';
        }
    };

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

    onMounted(async() => {
        if (setStateFilter.filter) {
            setStateFilter.filter.real_estate_type_id = '';
            setStateFilter.filter.service_model = '';
            setStateFilter.filter.room_type = '';
            setStateFilter.filter.district_id = '';
            setStateFilter.filter.province_id = '';
            setStateFilter.filter.village = '';
            setStateFilter.filter.wide = '';
            setStateFilter.filter.long = '';
            setStateFilter.limit = 10;
            setStateFilter.page = 1;
            setStateFilter.filter.status = '';
        }

        await initComponent();
    })

    const refer = async(id: HouseEntity) => {
        await customerRefer(id);

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await initComponent();
        }
    }

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

    const fetchAll = async() => {
        await getAll();
        await getOne();

        realestateType.props.unshift({ id: 'all', name: t('messages.all') });
       
        form.room_type = 'all';
        form.service_model = 'all';
        setStateProvinceFilter.limit = 1000;
        await getAllProvince();
        stateProvince.data.props.unshift({ id: 'all', name: t('messages.all') });

        form.real_estate_type_id = realestateType.props.length > 0 ? realestateType.props[0].id : undefined;
        form.province_id = stateProvince.data.props.length > 0 ? stateProvince.data.props[0].id : undefined;

        if (setStateDistrictFilter.filter) {
            setStateDistrictFilter.filter.province_id = form.province_id;
            await getAllDistrict();
            stateDistrict.data.props.unshift({ id: 'all', name: t('messages.all') });
            await selectedDistrict();

        }
    }

    const selectedDistrict = async () => {
        form.district_id = stateDistrict.data.props.length > 0 ? stateDistrict.data.props[0].id : undefined;
    }

    const confirmRefer = async (id: HouseEntity) => {
        confirm.require({
            message: t('confirmCustomerRefer.message'),
            header: t('confirmCustomerRefer.header'),
            rejectLabel: t('confirmCustomerRefer.rejectLabel'),
            acceptLabel: t('confirmCustomerRefer.acceptLabel'),
            rejectClass: 'p-button-secondary p-button-outlined',
            acceptClass: 'p-button-info',
            accept: async () => {
                await refer(id);

                toast.add({ severity: 'success', summary: t('toast.summary.delete'), detail: t('toast.detail.delete'), life: 3000 });
            },
            reject: () => {
                toast.add({ severity: 'error', summary: t('toast.summary.cancel_delete'), detail: t('toast.detail.cancel_delete'), life: 3000 });
            }
        });
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

    const updateStatusItem = async (id: HouseEntity) => {
        await updateStatus(id);
        await fetchAll();
    }

    const confirmUpdateStatus = async (id: HouseEntity) => {
        confirm.require({
            message: t('confirmUpdateStatus.message'),
            header: t('confirmUpdateStatus.header'),
            rejectLabel: t('confirmUpdateStatus.rejectLabel'),
            acceptLabel: t('confirmUpdateStatus.acceptLabel'),
            rejectClass: 'p-button-secondary p-button-outlined',
            acceptClass: 'p-button-success',
            accept: async () => {
                await updateStatusItem(id);

                toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
            },
            reject: () => {
                toast.add({ severity: 'error', summary: t('toast.summary.cancel_update'), detail: t('toast.detail.cancel_update'), life: 3000 });
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