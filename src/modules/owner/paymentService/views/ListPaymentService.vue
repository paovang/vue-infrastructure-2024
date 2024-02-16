<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 class="mb-3">
                    ປະຫວັດ ການຊຳລະຄ່າບໍລິການ
                </h2>
            </span>
            <span>
                <Button icon="pi pi-plus-circle" rounded  @click="paymentService" />
            </span>
        </div>
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
            :rows="setStateFilter.limit"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :currentPageReportTemplate="`${$t('table.pagination.show')} {first} ${$t('table.pagination.to')} {last} ${$t('table.pagination.from')} {totalRecords} ${$t('table.pagination.row')}`"
        >
            <Column field="id" :header="$t('table.header.index')">
                <template #body="item">
                    {{ item.index + 1 }}
                </template>
            </Column>
            <Column field="date_payment" :header="$t('table.header.date_payment')"></Column>
            <Column field="service_charge" :header="$t('table.header.amount')">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.amount, slotProps.data) }}
                </template>
            </Column>
            <Column :header="$t('table.header.unit_price')">
                <template #body="{data}">
                    <span>{{ data.qty }}</span>
                    <span> / {{ data.unit_price }}</span>
                </template>
            </Column>
            <Column :header="$t('table.header.start_end_date')">
                <template #body="{data}">
                    <span style="color: rgb(4, 4, 209)">{{ data.from_date }}</span>
                    <span style="color: red"> / {{ data.to_date }}</span>
                </template>
            </Column>
            <Column field="status" :header="$t('table.header.status')"></Column>
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
                            @click="editItem(data)"
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

        <payment-service-component ref="createForm" />
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
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column'; 
    import Button from 'primevue/button';
    import PaymentServiceComponent from '../components/PaymentService.Component.vue';
    import UpdatePaymentServiceComponent from '../components/UpdatePaymentService.Component.vue';
    import { paymentStore } from '../stores/payment.store';
    import { PaymentEntity } from '../entities/payment.entity';

    const { getAll, state, setStateFilter } = paymentStore();
    
    const createForm = ref();
    const editForm = ref();
    const customers = ref();
    const editData = ref();

    onMounted(async() => {
        await getAll();
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

    const formatCurrency = (value: any, data: any) => {
        return value.toLocaleString('en-US') + ' ' + data.currency;
    };

    const onSuccess = async () => {
        await getAll();
    }
</script>
<style scoped>
    .btn-right {
        display: flex;
        justify-content: flex-end;
    }
</style>