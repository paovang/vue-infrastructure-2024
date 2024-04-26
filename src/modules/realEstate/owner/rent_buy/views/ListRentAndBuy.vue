<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 class="mb-3">
                    {{ $t('table.title.rent_buy') }}
                </h2>
            </span>
            <span>
                <Button 
                    :label="$t('button.rent_buy_from_appoint')" 
                    severity="warning"  
                    @click="addRentAndBuyFromAppointment" 
                    :disabled="validationPermissions(GET_PERMISSIONS.RENT_BUY.CREATE)"
                />
                <span style="margin-left: 20px;"></span>
                <Button 
                    :label="$t('button.rent_buy')"  
                    @click="addRentAndBuy" 
                    :disabled="validationPermissions(GET_PERMISSIONS.RENT_BUY.CREATE)"
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
                <div class="col-12 md:col-12 flex flex-row" style="margin-top: -15px;">
                    <div class="col-12 md:col-3">
                        <label>
                            {{ $t('messages.status') }}
                        </label>
                        <Dropdown 
                            name="real_estate_type"
                            v-model="form.service_model" 
                            :options="serviceModels" 
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
                            {{ $t('messages.start_date') }}
                        </label>
                        <InputText 
                            v-model="fromDate" 
                            type="date" 
                            style="width: 100% !important" 
                            @change="onSearch"
                        />
                    </div>
                    <div class="col-12 md:col-3">
                        <label>
                            {{ $t('messages.end_date') }}
                        </label>
                        <InputText 
                            v-model="toDate" 
                            type="date" 
                            style="width: 100% !important" 
                            @change="onSearch"
                        />
                    </div>
                    <div class="col-12 md:col-3" style="text-align: right;">
                        <Button 
                            icon="pi pi-refresh" 
                            severity="warning" 
                            style="margin-top: 22px !important; color: white" 
                            @click="clearSearch"
                        />
                    </div>
                </div>
            </template>

            <Column headerStyle="min-width: 4rem" frozen>
                <template #body="{ data }">
                    <div class="flex flex-wrap gap-2">
                        <Button 
                            type="button" 
                            icon="pi pi-pencil"
                            rounded 
                            severity="warning"  
                            style="color: white;" 
                            @click="editItem(data)"
                            :disabled="validationPermissions(GET_PERMISSIONS.RENT_BUY.UPDATE)"
                        />
                        <!-- <Button 
                            type="button" 
                            :label="data.status === 'pending' ? $t('button.cancel') : (data.status === 'done' ? $t('button.success') : $t('button.pending'))"
                            rounded 
                            :severity="data.status === 'pending' ? 'danger' : (data.status === 'done' ? 'success' : 'warning')"  
                            style="color: white;" 
                            @click="handleClick(data.id, data.status)"
                        /> -->
                    </div>
                </template>
            </Column>
            <Column field="id" :header="$t('table.header.index')">
                <template #body="item">
                    {{ item.index + 1 }}
                </template>
            </Column>
            <Column field="date" :header="$t('table.header.date_rent')" headerStyle="min-width: 8rem"></Column>
            <Column field="number" :header="$t('table.header.rent_number')" headerStyle="min-width: 12rem"></Column>
            <Column field="customer_name" :header="$t('table.header.customer_name')" headerStyle="min-width: 8rem"></Column>
            <Column field="customer_tel" :header="$t('table.header.customer_phone')" headerStyle="min-width: 8rem"></Column>
            <Column field="real_estate_list.real_esate_number" :header="$t('table.header.real_esate_number')" headerStyle="min-width: 8rem"></Column>
            <Column field="real_estate_list.trans_real_estate_type.name" :header="$t('table.header.real_estate_type')" headerStyle="min-width: 10rem"></Column>
            <Column field="real_estate_list.name" :header="$t('table.header.real_estate_name')" headerStyle="min-width: 8rem"></Column>
            <Column field="service_model" :header="$t('table.header.service_model')" headerStyle="min-width: 8rem"></Column>
            <!-- <Column field="from_date" :header="$t('table.header.from_date')" headerStyle="min-width: 8rem"></Column>
            <Column field="to_date" :header="$t('table.header.to_date')" headerStyle="min-width: 8rem"></Column> -->
            <Column :header="$t('table.header.from_date') + ' - ' + $t('table.header.to_date')" headerStyle="min-width: 15rem">
                <template #body="{ data }">
                    {{ data.from_date }} 
                    <i class="pi pi-angle-right" style="color: green" v-if="data.from_date || data.to_date"></i>
                    {{ data.to_date }}
                </template>
            </Column>
            <Column :header="$t('table.header.price')" headerStyle="min-width: 18rem">
                <template #body="{ data }">
                    {{ formatNumber(data.price , data.currency)  }}
                    <i class="pi pi-angle-right" style="color: green"></i>
                    ( 
                        {{ data.qty }} 
                        <i class="pi pi-angle-right" style="color: green"></i>
                        {{ data.unit_price }}
                    )
                </template>
            </Column>
            <Column :header="$t('table.header.total')" headerStyle="min-width: 10rem">
                <template #body="{ data }">
                    <span style="color: green">
                        {{ formatNumber(data.total , data.currency) }}
                    </span>
                </template>
            </Column>
            <Column field="created_by.name" :header="$t('table.header.created_by')" headerStyle="min-width: 8rem"></Column>
            <Column field="updated_by.name" :header="$t('table.header.updated_by')" headerStyle="min-width: 8rem"></Column>
            <Column field="created_at" :header="$t('table.header.created_at')" headerStyle="min-width: 8rem"></Column>
            <Column field="updated_at" :header="$t('table.header.updated_at')" headerStyle="min-width: 8rem"></Column>
        </DataTable>

        <add-rent-buy-from-appointment-component
            ref="createFromAppointment" 
            @on-success="onSuccess"
        />

        <add-rent-buy-component
            ref="createFrom" 
            @on-success="onSuccess"
        />

        <edit-rent-buy-component
            ref="editRentAndBuy" 
            :form="editData"
            @on-success="onSuccess"
        />
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import { rentAndBuyStore } from '../stores/rent-buy.store';
    import { useRoute, useRouter } from 'vue-router';
    import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
    import Column from 'primevue/column';
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext';
    import Dropdown from 'primevue/dropdown';
    import AddRentBuyFromAppointmentComponent from '../components/Add-From-Appointment.Component.vue';
    import AddRentBuyComponent from '../components/Add.Component.vue';
    import EditRentBuyComponent from '../components/Edit-Rent-Buy.Component.vue';
    import { formatNumber } from '@/common/utils/format.currency';
    import { useI18n } from 'vue-i18n';
    import { useToast } from 'primevue/usetoast';
    import { appointmentStore } from '../../appointment/stores/appointment.store';
    import { RentAndBuyEntity } from '../entities/rent-buy-entity';
    import { GET_PERMISSIONS } from '@/common/utils/const';
    import { validationPermissions } from '@/common/utils/validation-permissions';

    const { form, getAll, setStateFilter, state, stateGetRealEstateOnline } = rentAndBuyStore();
    const { state: stateAppointment } = appointmentStore();

    const { query } = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    const toast = useToast();

    const serviceModels = ref([
        { id: 'all', name: t('messages.all') },
        { id: 'rent', name: t('messages.service_rent') },
        { id: 'buy', name: t('messages.service_sale') }
    ]);
    
    const createFromAppointment = ref();
    const editRentAndBuy = ref();
    const createFrom = ref();
    const editData = ref();
    const fromDate = ref();
    const toDate = ref();

    const clearSearch = async () => {
        fromDate.value = '';
        toDate.value = '';
        form.service_model = 'all';

        await onSearch();
    }

    const onSearch = async () => {
        if (setStateFilter.filter) {
            setStateFilter.filter.service_model = form.service_model === 'all' ? '' : form.service_model;
            setStateFilter.filter.from_date = fromDate.value;
            setStateFilter.filter.to_date = toDate.value;
        }

        await getAll();
    }

    // const getStatusColor = (status: string) => {
    //   return status === 'done' ? 'green' : (status === 'cancel' ? 'red' : ''); // Add more conditions as needed
    // }

    const editItem = async (data: RentAndBuyEntity) => {
        editData.value = data;
        editRentAndBuy.value.visible = true;
    }

    const addRentAndBuyFromAppointment = async () => {
        if (stateAppointment.data.props.length > 0) {
            createFromAppointment.value.visible = true;
        } else {
            await alertAppointmentEmpty();
        }
    }

    const addRentAndBuy = async () => {
        if (stateGetRealEstateOnline.data.props.length > 0) {
            createFrom.value.visible = true;
        } else {
            await alertItemEmpty();
        }
      
    }

    const onSuccess = async () => {
        await fetchAll();
    }

    async function onPageChange(event: DataTablePageEvent) {
        setStateFilter.page = event.page + 1;
        setStateFilter.limit = event.rows;

        const { page, limit } = setStateFilter
        router.push({ name: 'owner.rent.buy', query: 
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

    const fetchAll = async () => {
        form.from_date = "";
        form.to_date = "";

        if (setStateFilter.filter) {
            setStateFilter.filter.service_model = "";
            setStateFilter.filter.from_date = "";
            setStateFilter.filter.to_date = "";
        }

        await getAll();
        form.service_model = 'all';
    }

    onMounted(async() => {
        await initComponent();
    })

    const alertAppointmentEmpty = async () => {
        toast.add({ severity: 'error', summary: t('toast.summary.not_found_list_appointment'), detail: t('toast.detail.cancel_delete'), life: 3000 });
    }

    const alertItemEmpty = async () => {
        toast.add({ severity: 'error', summary: t('toast.summary.not_found_item'), detail: t('toast.detail.cancel_delete'), life: 3000 });
    }
    
</script>

<style>
    .btn-right {
        display: flex;
        justify-content: flex-end;
    }
</style>