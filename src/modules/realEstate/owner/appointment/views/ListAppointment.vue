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
            scrollable
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
                        </label>
                        <span class="p-input-icon-left w-full flex-order-1 sm:flex-order-0">
                            <i class="pi pi-search" style="margin-top: -10px"/>
                            <input-text
                                v-model="filteredName"
                                :placeholder="`${$t('placeholder.textSearch')} (${$t('messages.reserve_number')}, ${$t('messages.real_esate_number')}, ${$t('messages.service_model')})`"  
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
                        </label>
                        <InputText 
                            v-model="appointmentDate" 
                            type="date" 
                            style="width: 100% !important" 
                            @change="onSearch"
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

            <Column frozen>
                <template #body="{ data }">
                    <div class="flex flex-wrap gap-2 btn-right">
                        <Button 
                            type="button" 
                            icon="pi pi-pencil"
                            rounded 
                            severity="danger"  
                            style="color: white;" 
                            @click="handleClick(data.id, data.status)"
                            :disabled="validationPermissions(GET_PERMISSIONS.APPOINTMENT.UPDATE)"
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
            <Column field="date_appointment" :header="$t('table.header.date_appointment')" headerStyle="min-width: 10rem"></Column>
            <Column field="reserve_number" :header="$t('table.header.reserve_number')" headerStyle="min-width: 8rem"></Column>
            <Column field="customer_name" :header="$t('table.header.customer_name')" headerStyle="min-width: 8rem"></Column>
            <Column field="customer_tel" :header="$t('table.header.customer_phone')" headerStyle="min-width: 8rem"></Column>
            <Column field="estate_list.real_esate_number" :header="$t('table.header.real_esate_number')" headerStyle="min-width: 8rem"></Column>
            <Column field="estate_list.name" :header="$t('table.header.real_estate_name')" headerStyle="min-width: 8rem"></Column>
            <Column field="estate_list.trans_real_estate_type.name" :header="$t('table.header.real_estate_type')" headerStyle="min-width: 8rem"></Column>
            <Column field="estate_list.service_model" :header="$t('table.header.service_model')" headerStyle="min-width: 8rem"></Column>
            <Column field="estate_list.room_type" :header="$t('table.header.room_type')" headerStyle="min-width: 7rem"></Column>
            <Column field="description" :header="$t('table.header.desciption')" headerStyle="min-width: 8rem"></Column>
            <Column field="reason" :header="$t('table.header.reason')" headerStyle="min-width: 8rem"></Column>
            <Column field="updated_by.name" :header="$t('table.header.updated_by')" headerStyle="min-width: 8rem"></Column>
            <Column field="status" :header="$t('table.header.status')" headerStyle="min-width: 8rem">
                <template #body="rowData">
                    <span :style="{ color: getStatusColor(rowData.data.status) }">{{ rowData.data.status }}</span>
                </template>
            </Column>
        </DataTable>

        <update-component
            ref="editForm" 
            :id="form.id"
            @on-success="onSuccess"
        />
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import { appointmentStore } from '../stores/appointment.store';
    import { useRoute, useRouter } from 'vue-router';
    import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
    import Column from 'primevue/column';
    import Button from 'primevue/button';
    import Dropdown from 'primevue/dropdown';
    import InputText from 'primevue/inputtext';
    import UpdateComponent from '../components/Update.Component.vue';
    import { AppointmentEntity } from '../entities/appointment.entity';
    import { useI18n } from 'vue-i18n';
    import { GET_PERMISSIONS } from '@/common/utils/const';
    import { validationPermissions } from '@/common/utils/validation-permissions';

    // import { useToast } from "primevue/usetoast";
    // import { useConfirm } from "primevue/useconfirm";
    // import { AppointmentEntity } from '../entities/appointment.entity';


    const { form, getAll, setStateFilter, state } = appointmentStore();
    const { query } = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    // const toast = useToast();
    // const confirm = useConfirm();

    const statuses = ref([
        { id: 'all', name: t('messages.all') },
        { id: 'pending', name: t('messages.pending') },
        { id: 'done', name: t('messages.success') },
        { id: 'cancel', name: t('messages.cancel') }
    ]);
    const editForm = ref();
    const appointmentDate = ref();
    
    const clearSearch = async () => {
        form.status = 'pending';
        form.date_appointment = '';
        appointmentDate.value = '';
        if (setStateFilter.filter?.name !== undefined) {
            setStateFilter.filter.name = ''
        }
        if (setStateFilter.filter?.date_appointment !== undefined) {
            setStateFilter.filter.date_appointment = ''
        }
        await onSearch();
    }

    const onSearch = async () => {
        if (setStateFilter.filter) {
            setStateFilter.filter.status = form.status === 'all' ? '' : form.status;
            setStateFilter.filter.date_appointment = appointmentDate.value;
        }

        await getAll();
    }

    const getStatusColor = (status: string) => {
      return status === 'done' ? 'green' : (status === 'cancel' ? 'red' : ''); // Add more conditions as needed
    }

    async function onClearSearch(e: any) {
        if (e.target.value === '') {
            if (setStateFilter.filter?.name !== undefined) {
                setStateFilter.filter.name = '',
                setStateFilter.filter.date_appointment = ''
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

    const handleClick = async (id: AppointmentEntity, status: string) => {
        if (status !== 'done') {
            form.id = (id as string);
            editForm.value.visible = true;
        }
    }

    const onSuccess = async () => {
        await fetchAll();
    }

    // const deleteItem = async () => {
    //     await update();
    //     await clearSearch();
    //     await fetchAll();
    // }

    // const handleClick = async (id: AppointmentEntity, status: string) => {
    //     if(status !== 'done') {
    //         form.id = (id as string);
    //         form.status = status === 'cancel' ? 'pending' : 'cancel';

    //         await confirmDelete();
    //     }
    // }

    // const confirmDelete = async () => {
    //     confirm.require({
    //         message: t('confirmUpdateAppointment.message'),
    //         header: t('confirmUpdateAppointment.header'),
    //         rejectLabel: t('confirmUpdateAppointment.rejectLabel'),
    //         acceptLabel: t('confirmUpdateAppointment.acceptLabel'),
    //         rejectClass: 'p-button-secondary p-button-outlined',
    //         acceptClass: 'p-button-success',
    //         accept: async () => {
    //             await deleteItem();
    //             toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    //         },
    //         reject: () => {
    //             toast.add({ severity: 'error', summary: t('toast.summary.cancel_update'), detail: t('toast.detail.cancel_update'), life: 3000 });
    //         }
    //     });
    // }

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
        form.status = 'pending';
        form.date_appointment = "";
        
        if (setStateFilter.filter) {
            setStateFilter.filter.status = form.status === 'all' ? '' : form.status;
            setStateFilter.filter.date_appointment = "";
            setStateFilter.filter.name = "";
        }
        await getAll();
    }

    onMounted(async() => {
        if (setStateFilter.filter) {
            setStateFilter.filter.status = 'pending';
            setStateFilter.page = 1;
            setStateFilter.limit = 10;
        }
        await initComponent();
    })
    
</script>

<style>
    .btn-right {
        display: flex;
        justify-content: flex-end;
    }
</style>