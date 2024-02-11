<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 class="mb-3">
                    ລາຍການ ຂໍ້ມູນທັງໝົດ
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

        <DataTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" style="width: 25%"></Column>
            <Column field="country.name" header="Country" style="width: 25%"></Column>
            <Column field="company" header="Company" style="width: 25%"></Column>
            <Column field="representative.name" header="Representative" style="width: 25%"></Column>
        </DataTable>
    </div>
</template>
<script setup lang="ts">
    import Button from 'primevue/button';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const customers = ref();


    const pushRouteAddHouse = async () => {
        router.push({ name: 'owner.add.house' });
    }
</script>