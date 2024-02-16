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
        <DataTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" style="width: 25%"></Column>
            <Column field="country.name" header="Country" style="width: 25%"></Column>
            <Column field="company" header="Company" style="width: 25%"></Column>
            <Column field="representative.name" header="Representative" style="width: 25%"></Column>
        </DataTable>

        <payment-service-component ref="createForm" />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column'; 
    import Button from 'primevue/button';
    import PaymentServiceComponent from '../components/PaymentService.Component.vue';

    const createForm = ref();
    const customers = ref();

    const paymentService = async () => {
        createForm.value.visible = true;
    }
</script>