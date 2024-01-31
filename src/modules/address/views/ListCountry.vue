<template>
    <div>
        <!-- Right Card -->
        <div class="card card-first">
            <form @submit="onSubmit" class="flex flex-column gap-3 h-full">
                <div class="col-12 md:col-12 flex flex-row">
                    <div class="col-12 md:col-10">
                        <div class="flex flex-column h-full">
                            <my-input-text 
                                name="name" 
                                label="ຊື່" 
                                required 
                                placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                                class="h-full" 
                            />
                        </div>
                    </div>
                    <div class="col-12 md:col-2 flex flex-column">
                        <Button type="submit" severity="warning">
                            <i class="pi pi-plus-circle" style="margin-right: 8px;"></i>
                            ບັນທຶກ ປະເທດ
                        </Button>
                    </div>
                </div>
            </form>
        </div>


        <div class="card">
            <h2 class="mb-3">
                ລາຍການ ປະເທດທັງໝົດ
            </h2>
            <DataTable 
                :value="state.data.props" 
                :loading="state.isLoading" 
                lazy
                tableStyle="min-width: 50rem"
                :totalRecords="state.data.total"
                @page="onPageChange"
                paginator
                :first="first"
                :rows="stateCountry.limit"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25]"
                currentPageReportTemplate="ສະແດງ {first} ຫາ {last} ຈາກ {totalRecords} ແຖວ"
            >
                <template #header>
                    <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                        <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                        <i class="pi pi-search" style="margin-top: -10px"/>
                        <input-text
                            v-model="filteredName"
                            placeholder="ຄົ້ນຫາ..."
                            style="font-family: NotoSansLao, Montserrat"
                            class="w-full"
                            @keyup.enter="onSearch"
                            @input="onClearSearch"
                        />
                        </span>
                    </div>
                    </template>
                    <Column field="id" header="ລຳດັບ" style="width: 25%">
                        <template #body="item">
                            {{ item.index + 1 }}
                        </template>
                    </Column>
                <Column field="name" header="ຊື່ປະເທດ" style="width: 25%"></Column>
            </DataTable>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import { onMounted, computed } from 'vue';
    import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
    import Column from 'primevue/column';
    import InputText from 'primevue/inputtext'
    import Button from 'primevue/button'
    import { countryStore } from '../stores/country.store';
    import { useToast } from "primevue/usetoast";
    import { useForm } from 'vee-validate'
    import { createCountrySchema } from '../schema/country.shema'
    import MyInputText from '../../../components/customComponents/FormInputText.vue'
    import { useRoute, useRouter } from 'vue-router'
    const toast = useToast();

    const { push } = useRouter()
    const { query } = useRoute()

    const { register, getAll, form, state, stateCountry } = countryStore();

    const { handleSubmit, handleReset } = useForm<any>({
        validationSchema: createCountrySchema
    })

    const onSubmit = handleSubmit(async (values) => {
        form.name = values.name;
        await register();
        
        if (state.error) {
            showWarningValidateBackend();
        } else {
            showToastSuccess();
            handleReset();
        }
    })

    async function onPageChange(event: DataTablePageEvent) {
        stateCountry.page = event.page + 1;
        stateCountry.limit = event.rows;

        const { page, limit, filter } = stateCountry
        push({ name: 'country', query: { page, limit, search: filter?.name ? filter.name : undefined } })

        await getAll();
    }

    const first = computed(() => {
        let result: number = 0

        if(stateCountry.page && stateCountry.limit){
            result = (stateCountry.page - 1) * stateCountry.limit
        }
        return result
    })

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: 'Error Message', detail: `${state.error}`, life: 3000 });
    }

    async function initComponent() {
        if (Object.keys(query).length !== 0) {
            stateCountry.page = query.page ? Number(query.page) : 1
            stateCountry.limit = query.limit ? Number(query.limit) : 10

            if (stateCountry.filter?.name === '') {
                stateCountry.filter.name = query.search ? (query.search as string) : '';
                push({ query: { page: stateCountry.page, limit: stateCountry.limit, search: undefined } })
            } else {
                push({
                    query: {
                        page: stateCountry.page,
                        limit: stateCountry.limit,
                        search: stateCountry.filter?.name,
                    }
                })
            }
        }
        await getAll()
    }

    await initComponent()

    onMounted(() => {
        getAll();
    })

    const filteredName = computed<string>({
        get: () => stateCountry.filter!.name,
        set: (value) => {
            if (stateCountry.filter) {
                stateCountry.filter.name = value;
            } else {
                stateCountry.filter = { name: value };
            }
        }
    })


    async function onSearch() {
        if (stateCountry.filter?.name !== undefined) {
            const filterText = stateCountry.filter.name.toLowerCase(); 
            const filteredData = state.data.props.filter((item) =>
                item.name.toLowerCase().includes(filterText)
            );
            state.data.props = filteredData;

            push({ query: { search: stateCountry.filter?.name } })
        } 
    }

    async function onClearSearch(e: any) {
        if (e.target.value === '') {
            if (stateCountry.filter?.name !== undefined) {
                stateCountry.filter.name = ''
            }
            
            push({ query: { name: undefined } })

            await getAll()
        }
    }
</script>

<style>
    .card-first {
      height: 100px;
      border: 1px solid #ccc;
      padding: 10px;
    }
</style>