<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 class="mb-3">
                    {{ $t('table.title.appointment') }}
                </h2>
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
                    <div class="col-12 md:col-5">
                        <label>
                            {{ $t('messages.search') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <span class="p-input-icon-left w-full flex-order-1 sm:flex-order-0">
                            <i class="pi pi-search" style="margin-top: -10px"/>
                            <input-text
                                v-model="filteredName"
                                :placeholder="`${$t('placeholder.textSearch')} (${$t('messages.real_esate_number')}, ${$t('messages.service_model')})`"  
                                style="font-family: NotoSansLao, Montserrat"
                                class="w-full"
                                @keyup.enter="onSearch"
                                @input="onClearSearch"
                            />
                        </span>
                    </div>
                    <div class="col-12 md:col-3">
                        <label>
                            {{ $t('messages.status') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            name="real_estate_type"
                            v-model="form.status" 
                            :options="statuses" 
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
                            {{ $t('messages.date_appointment') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <Calendar 
                            v-model="form.date_appointment" 
                            showIcon iconDisplay="input" 
                            inputId="icondisplay" 
                            style="width: 100%;" 
                            @date-select="onSearch"
                            @input="onSearch"
                        />
                    </div>
                    <div class="col-12 md:col-1" style="text-align: right;">
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
            <Column field="date_appointment" :header="$t('table.header.date_appointment')"></Column>
            <Column field="customer_name" :header="$t('table.header.customer_name')"></Column>
            <Column field="customer_tel" :header="$t('table.header.customer_phone')"></Column>
            <Column field="estate_list.real_esate_number" :header="$t('table.header.real_esate_number')"></Column>
            <Column field="estate_list.name" :header="$t('table.header.name')"></Column>
            <Column field="estate_list.service_model" :header="$t('table.header.service_model')"></Column>
            <Column field="estate_list.room_type" :header="$t('table.header.room_type')"></Column>
            <Column field="status" :header="$t('table.header.status')"></Column>
            <Column headerStyle="width: 10rem">
                <template>
                    <div class="flex flex-wrap gap-2 btn-right">
                        <Button 
                            type="button" 
                            icon="pi pi-pencil" 
                            rounded 
                            severity="warning"  
                            style="color: white;" 
                        />
                        <!-- <Button 
                            type="button" 
                            icon="pi pi-trash" 
                            rounded 
                            severity="danger"
                        /> -->
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import { appointmentStore } from '../stores/appointment.store';
    import { useRoute, useRouter } from 'vue-router';
    import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
    import Column from 'primevue/column';
    import Button from 'primevue/button';
    import Calendar from 'primevue/calendar';
    import Dropdown from 'primevue/dropdown';
    import InputText from 'primevue/inputtext';

    const { form, getAll, setStateFilter, state } = appointmentStore();
    const { query } = useRoute();
    const router = useRouter();

    
    const clearSearch = async () => {
        form.status = 'all';
        form.date_appointment = '';
        if (setStateFilter.filter?.name !== undefined) {
            setStateFilter.filter.name = ''
        }
        await onSearch();
    }

    const onSearch = async () => {
        if (setStateFilter.filter) {
            setStateFilter.filter.status = form.status === 'all' ? '' : form.status;
            setStateFilter.filter.date_appointment = form.date_appointment;
        }

        await getAll();
    }

    async function onClearSearch(e: any) {
        if (e.target.value === '') {
            if (setStateFilter.filter?.name !== undefined) {
                setStateFilter.filter.name = ''
            }
            await getAll();
        }
    }

    const filteredName = computed<string>({
        get: () => setStateFilter.filter!.name || '',
        set: (value) => {
            if (setStateFilter.filter) {
                setStateFilter.filter.name = value;
            } else {
                setStateFilter.filter = { name: value };
            }
        }
    })

    const statuses = ref([
        { id: 'all', name: 'ທັງໝົດ' },
        { id: 'pending', name: 'ລໍຖ້າ' },
        { id: 'done', name: 'ສຳເລັດ' },
        { id: 'cancel', name: 'ຍົກເລີກ' }
    ]);

    async function onPageChange(event: DataTablePageEvent) {
        setStateFilter.page = event.page + 1;
        setStateFilter.limit = event.rows;

        const { page, limit } = setStateFilter
        router.push({ name: 'owner.appointment', query: 
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
        form.status = 'all';
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