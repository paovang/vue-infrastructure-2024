<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 class="mb-3">
                    {{ $t('table.title.payment_history')}}
                </h2>
            </span>
            <span>
                <Button 
                :label="$t('button.payment')" 
                severity="info" 
                @click="paymentService"      
                :disabled="validationPermissions(GET_PERMISSIONS.PAYMENT_REAL_ESTATE.CREATE)" 
            />
            </span>
        </div>
        <Divider/>
        <DataTable 
            :value="state.data.props" 
            paginator 
            :rowsPerPageOptions="[5, 10, 20, 50]" 
            tableStyle="min-width: 50rem"
            :loading="state.isLoading" 
            lazy
            :totalRecords="state.data.total"
            @page="onPageChange"
            :first="first"
            scrollable
            :rows="setStateFilter.limit"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :currentPageReportTemplate="`${$t('table.pagination.show')} {first} ${$t('table.pagination.to')} {last} ${$t('table.pagination.from')} {totalRecords} ${$t('table.pagination.row')}`"
        >
            <template #header>
                <div class="col-12 md:col-12 flex flex-row">
                    <div class="col-12 md:col-3">
                        <label>
                            {{ $t('messages.payment_date')}}
                        </label>
                        <Calendar 
                            v-model="paymentDate" 
                            showIcon
                            style="width: 100%;" 
                            @date-select="onSearch"
                            @input="onSearch"
                        />
                    </div>
                    <div class="col-12 md:col-3">
                        <label>
                            {{ $t('messages.status')}}
                        </label>
                        <Dropdown 
                            name="status"
                            v-model="form.status" 
                            :options="paymentStatues" 
                            :optionLabel="option => `${option.name}`" 
                            :placeholder="$t('placeholder.dropdownSelect')" 
                            class="w-full" 
                            optionValue="id"
                            :highlightOnSelect="true" 
                            @change="onSearch"
                        />
                    </div>
                    <div class="col-12 md:col-6" style="text-align: right;">
                        <Button 
                            icon="pi pi-refresh" 
                            severity="warning" 
                            style="margin-top: 22px !important; color: white" 
                            @click="clearSearch"
                        />
                    </div>
                </div>
            </template>

            <Column headerStyle="min-width: 8rem" frozen>
                <template #body="{ data }">
                    <div class="flex flex-wrap gap-2 btn-right">
                        <!-- <Button 
                            type="button" 
                            icon="pi pi-eye" 
                            rounded 
                            severity="success"  
                            style="color: white;" 
                        /> -->
                        <Button 
                            type="button" 
                            icon="pi pi-pencil" 
                            rounded 
                            severity="warning"  
                            style="color: white;" 
                            @click="editItem(data)"
                            :disabled="validationPermissions(GET_PERMISSIONS.PAYMENT_REAL_ESTATE.UPDATE)"
                        />
                        <Button 
                            type="button" 
                            icon="pi pi-trash" 
                            rounded 
                            severity="danger"
                            @click="confirmDelete(data.id)"
                            :disabled="validationPermissions(GET_PERMISSIONS.PAYMENT_REAL_ESTATE.DELETE)"
                        />
                    </div>
                </template>
            </Column>
            <Column field="id" :header="$t('table.header.index')">
                <template #body="item">
                    {{ item.index + 1 }}
                </template>
            </Column>
            <Column field="date_payment" :header="$t('table.header.date_payment')" headerStyle="min-width: 10rem"></Column>
            <Column field="bill_no" :header="$t('table.header.bill_number')" headerStyle="min-width: 8rem"></Column>
            <Column :header="$t('table.header.info_house')" headerStyle="min-width: 20rem">
                <template #body="{data}">
                    <span>{{ data.real_estate_list.real_esate_number }}</span>
                    <span> - 
                        ({{ data.real_estate_list.name }} / {{ data.real_estate_list.real_estate_type.name }} / {{ data.real_estate_list.service_model }})
                    </span>
                </template>
            </Column>
            <Column :header="$t('table.header.unit_price')" headerStyle="min-width: 10rem">
                <template #body="{data}">
                    (<span>{{ data.qty }} / {{ data.unit_price }}</span>)
                </template>
            </Column>
            <Column field="service_charges" :header="$t('table.header.service')" headerStyle="min-width: 13rem">
                <template #body="{ data }">
                    {{ conCatServiceChargePrices(data.payment_service_charges) }}
                </template>
            </Column>
            <Column field="service_charges" :header="$t('table.header.total')" headerStyle="min-width: 14rem">
                <template #body="{ data }">
                    {{ conCatAndTotalServiceChargePrices(data.payment_service_charges, data.qty) }}
                </template>
            </Column>
            <Column :header="$t('table.header.start_end_date')" headerStyle="min-width: 14rem">
                <template #body="{data}">
                    <span style="color: rgb(4, 4, 209)">{{ data.from_date }}</span>
                    <span style="color: red"> / {{ data.to_date }}</span>
                </template>
            </Column>
            <Column :header="$t('table.header.status')" headerStyle="min-width: 4rem">
                <template #body="{data}">
                    <span style="color: goldenrod" v-if="data.status === 'pending'"> {{ data.status }}</span>
                    <span style="color: green" v-if="data.status === 'confirm'"> {{ data.status }}</span>
                    <span style="color: red" v-if="data.status === 'reject'"> {{ data.status }}</span>
                </template>
            </Column>
        </DataTable>

        <payment-service-component 
            ref="createForm" 
            @on-success="onSuccess"
        />
        <update-payment-service-component 
            ref="editForm" 
            id
            :data="editData"
            @on-success="onSuccess"
        />
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue';
    import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
    import Column from 'primevue/column'; 
    import Divider from 'primevue/divider';
    import Button from 'primevue/button';
    import Dropdown from 'primevue/dropdown';
    import Calendar from 'primevue/calendar';
    import PaymentServiceComponent from '../components/PaymentService.Component.vue';
    import UpdatePaymentServiceComponent from '../components/UpdatePaymentService.Component.vue';
    import { paymentStore } from '../stores/payment.store';
    import { PaymentEntity } from '../entities/payment.entity';
    import { useConfirm } from "primevue/useconfirm";
    import { useToast } from "primevue/usetoast";
    import { useI18n } from 'vue-i18n';
    import { conCatAndTotalServiceChargePrices, conCatServiceChargePrices } from '@/common/utils/concat';
    import { validationPermissions } from '@/common/utils/validation-permissions';
    import { GET_PERMISSIONS } from '@/common/utils/const';

    const { t } = useI18n();
    const toast = useToast();
    const confirm = useConfirm();

    const { form, getAll, remove, state, setStateFilter } = paymentStore();
    
    const createForm = ref();
    const editForm = ref();
    const editData = ref();

    const paymentStatues = ref([
        { id: 'all', name: t('messages.all') },
        { id: 'pending', name: t('messages.pending') },
        { id: 'confirm', name: t('messages.confirm') },
        { id: 'reject', name: t('messages.reject') },
    ]);

    const paymentDate = ref();

    const onSearch = async () => {
        if (setStateFilter.filter) { 
            setStateFilter.filter.status = form.status === 'all' ? '' : form.status;
            setStateFilter.filter.date_payment = paymentDate.value;
        }
        await getAll();
    }

    const clearSearch = async () => {
        form.status = 'all';
        paymentDate.value = null;
        await onSearch();
    }

    onMounted(async() => {
        if (setStateFilter.filter) { 
            setStateFilter.filter.status = '';
            setStateFilter.filter.date_payment = null;
        }
        await getAll();
        form.status = 'all';
    });

    const editItem = async (value: PaymentEntity) => {
        editData.value = value;
        editForm.value.visible = true;
    }

    async function onPageChange(event: DataTablePageEvent) {
        setStateFilter.page = event.page + 1; 
        setStateFilter.limit = event.rows;
        
        // const { page, limit, filter } = setStateFilter
        // push({ name: 'owner.payment.service', query: { page, limit, search: filter?.country_id ? filter.country_id : undefined } })

        await getAll();
    }

    const first = computed(() => {
        let result: number = 0

        if(setStateFilter.page && setStateFilter.limit){
            result = (setStateFilter.page - 1) * setStateFilter.limit
        }
        return result
    })

    const paymentService = async () => {
        createForm.value.visible = true;
    }

    const onSuccess = async () => {
        await getAll();
    }

    const deleteItem = async (id: PaymentEntity) => {
        await remove(id);
        await getAll();
    }

    const confirmDelete = async (id: PaymentEntity) => {
        confirm.require({
            message: t('confirmDelete.message'),
            header: t('confirmDelete.header'),
            rejectLabel: t('confirmDelete.rejectLabel'),
            acceptLabel: t('confirmDelete.acceptLabel'),
            rejectClass: 'p-button-secondary p-button-outlined',
            acceptClass: 'p-button-danger',
            accept: async () => {
                await deleteItem(id)
                toast.add({ severity: 'success', summary: t('toast.summary.delete'), detail: t('toast.detail.delete'), life: 3000 });
            },
            reject: () => {
                toast.add({ severity: 'error', summary: t('toast.summary.cancel_delete'), detail: t('toast.detail.cancel_delete'), life: 3000 });
            }
        });
    }
</script>
<style scoped>
    .btn-right {
        display: flex;
        justify-content: flex-end;
    }
</style>