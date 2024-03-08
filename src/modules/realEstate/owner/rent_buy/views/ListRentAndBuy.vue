<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 class="mb-3">
                    {{ $t('table.title.appointment') }}
                </h2>
            </span>
            <span>
                <Button icon="pi pi-plus-circle" rounded  @click="addRentAndBuy" />
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
                        <Calendar 
                            v-model="form.from_date" 
                            showIcon 
                            style="width: 100%;" 
                            @date-select="onSearch"
                            @input="onSearch"
                        />
                    </div>
                    <div class="col-12 md:col-3">
                        <label>
                            {{ $t('messages.end_date') }}
                        </label>
                        <Calendar 
                            v-model="form.to_date" 
                            showIcon 
                            style="width: 100%;" 
                            @date-select="onSearch"
                            @input="onSearch"
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

            <Column field="id" :header="$t('table.header.index')">
                <template #body="item">
                    {{ item.index + 1 }}
                </template>
            </Column>
            <Column field="date" :header="$t('table.header.date_rent')"></Column>
            <Column field="number" :header="$t('table.header.rent_number')"></Column>
            <Column field="customer_name" :header="$t('table.header.customer_name')"></Column>
            <Column field="customer_tel" :header="$t('table.header.customer_phone')"></Column>
            <Column field="real_estate_list.real_esate_number" :header="$t('table.header.real_esate_number')"></Column>
            <Column field="real_estate_list.name" :header="$t('table.header.name')"></Column>
            <Column field="service_model" :header="$t('table.header.service_model')"></Column>
            <Column field="from_date" :header="$t('table.header.from_date')"></Column>
            <Column field="to_date" :header="$t('table.header.to_date')"></Column>
            <Column :header="$t('table.header.price')">
                <template #body="{ data }">
                    {{ formatNumber(data.price , data.currency)}} - ( {{ data.qty }} / {{ data.unit_price }})
                </template>
            </Column>
            <Column headerStyle="width: 10rem">
                <template #body="{ data }">
                    <div class="flex flex-wrap gap-2 btn-right">
                        <Button 
                            type="button" 
                            icon="pi pi-pencil"
                            rounded 
                            severity="danger"  
                            style="color: white;" 
                            :disabled="data.status === 'done' ? true : false"
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
        </DataTable>

        <add-rent-buy-component
            ref="createFromAppointment" 
            @on-success="onSuccess"
        />

        <!-- <add-component
            ref="createForm" 
            :id="form.id"
            @on-success="onSuccess"
        /> -->
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import { rentAndBuyStore } from '../stores/rent-buy.store';
    import { useRoute, useRouter } from 'vue-router';
    import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
    import Column from 'primevue/column';
    import Button from 'primevue/button';
    import Calendar from 'primevue/calendar';
    import Dropdown from 'primevue/dropdown';
    import AddRentBuyComponent from '../components/Add-From-Appointment.Component.vue';
    // import AddComponent from '../components/Add.Component.vue';
    import { formatNumber } from '@/common/utils/format.currency';

    const { form, getAll, setStateFilter, state } = rentAndBuyStore();
    const { query } = useRoute();
    const router = useRouter();
    // const { t } = useI18n();
    // const toast = useToast();
    // const confirm = useConfirm();

    const serviceModels = ref([
        { id: 'all', name: 'ທັງໝົດ' },
        { id: 'rent', name: 'ເຊົ່າ' },
        { id: 'sale', name: 'ຊື້ຂາຍ' }
    ]);
    const createFromAppointment = ref();
    // const createForm = ref();

    const clearSearch = async () => {
        await onSearch();
    }

    const onSearch = async () => {
        if (setStateFilter.filter) {
            setStateFilter.filter.service_model = form.service_model === 'all' ? '' : form.service_model;
            setStateFilter.filter.from_date = form.from_date;
            setStateFilter.filter.to_date = form.to_date;
        }

        await getAll();
    }

    // const getStatusColor = (status: string) => {
    //   return status === 'done' ? 'green' : (status === 'cancel' ? 'red' : ''); // Add more conditions as needed
    // }

    const addRentAndBuy = async () => {
        createFromAppointment.value.visible = true;
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
        await getAll();
        form.service_model = 'all';
    }

    onMounted(async() => {
        await initComponent();
    })
    
</script>

<style>
    .btn-right {
        display: flex;
        justify-content: flex-end;
    }
</style>