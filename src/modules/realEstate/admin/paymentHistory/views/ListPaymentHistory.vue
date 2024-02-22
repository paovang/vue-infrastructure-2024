<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 class="mb-3">
                    ປະຫວັດ ການຊຳລະຄ່າບໍລິການ
                </h2>
            </span>
            <span>
                <Button icon="pi pi-plus-circle" rounded />
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
            :rows="setStateFilter.limit"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :currentPageReportTemplate="`${$t('table.pagination.show')} {first} ${$t('table.pagination.to')} {last} ${$t('table.pagination.from')} {totalRecords} ${$t('table.pagination.row')}`"
        >
            <template #header>
                <div class="col-12 md:col-12 flex flex-row">
                    <div class="col-12 md:col-3">
                        <label>
                            ເຈົ້າຂອງ
                        </label>
                        <Dropdown 
                            name="status"
                            v-model="form.status" 
                            :options="paymentStatues" 
                            :optionLabel="option => `${option.name}`" 
                            placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                            class="w-full" 
                            optionValue="id"
                            :highlightOnSelect="true" 
                            @change="onSearch"
                        />
                    </div>
                    <div class="col-12 md:col-2">
                        <label>
                            ວັນທີຊຳລະ
                        </label>
                        <Calendar 
                            v-model="paymentDate" 
                            showIcon iconDisplay="input" 
                            inputId="icondisplay" 
                            style="width: 100%;" 
                            @date-select="onSearch"
                            @input="onSearch"
                        />
                    </div>
                    <div class="col-12 md:col-2">
                        <label>
                            ສະຖານະ
                        </label>
                        <Dropdown 
                            name="status"
                            v-model="form.status" 
                            :options="paymentStatues" 
                            :optionLabel="option => `${option.name}`" 
                            placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                            class="w-full" 
                            optionValue="id"
                            :highlightOnSelect="true" 
                            @change="onSearch"
                        />
                    </div>
                    <div class="col-12 md:col-5" style="text-align: right;">
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
            <Column :header="$t('table.header.name') +  ' / ' + $t('table.header.owner')">
                <template #body="{data}">
                    <span>{{ data.real_estate_list.account.name }}</span>
                    <span> - {{ data.real_estate_list.account.owner }}</span>
                </template>
            </Column>
            <Column field="date_payment" :header="$t('table.header.date_payment')"></Column>
            <Column field="service_charge" :header="$t('table.header.amount')">
                <template #body="slotProps">
                    {{ formatNumber(slotProps.data.amount, slotProps.data) }}
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
                            :icon="data.status === 'confirm' ? 'pi pi-check-square' : 'pi pi-calculator'" 
                            rounded 
                            :severity="data.status === 'confirm' ? 'success' : 'danger'"
                            style="color: white" 
                            @click="editItem(data)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <payment-history-component
            ref="createForm"
            :data="dataEdit"
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
    import { PaymentEntity } from '../entities/payment.entity';
    // import { useConfirm } from "primevue/useconfirm";
    // import { useToast } from "primevue/usetoast";
    // import { useI18n } from 'vue-i18n';
    import { formatCurrency } from '@/common/utils/format.currency';
    import { paymentServiceHistoryStore } from '../stores/payment-history.store';
    import PaymentHistoryComponent from '../components/PaymentHistory.Component.vue';

    // const { t } = useI18n();
    // const toast = useToast();
    // const confirm = useConfirm();

    const { form, getAll, state, setStateFilter } = paymentServiceHistoryStore();

    const paymentStatues = ref([
        { id: 'all', name: 'All' },
        { id: 'pending', name: 'Pending' },
        { id: 'confirm', name: 'Confirm' },
        { id: 'reject', name: 'Reject' },
    ]);

    const paymentDate = ref();
    const createForm = ref();
    const dataEdit = ref();

    const editItem = async (data: PaymentEntity) => {
        dataEdit.value = data;
        createForm.value.visible = true;
    }

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

    const onSuccess = async () => {
        await getAll();
    }

    async function onPageChange(event: DataTablePageEvent) {
        setStateFilter.page = event.page + 1; 
        setStateFilter.limit = event.rows;

        await getAll();
    }

    const first = computed(() => {
        let result: number = 0

        if(setStateFilter.page && setStateFilter.limit){
            result = (setStateFilter.page - 1) * setStateFilter.limit
        }
        return result
    })

    const formatNumber = (value: any, data: any) => {
        return formatCurrency(value, data);
    };

    onMounted(async() => {
        await getAll();
        form.status = 'all';
    });
</script>   
<style scoped>
    .btn-right {
        display: flex;
        justify-content: flex-end;
    }
</style>