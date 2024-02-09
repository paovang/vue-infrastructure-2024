<template>
    <div>
        <div class="card">
            <form @submit.prevent="isEditing ? onUpdate() : onSubmit()" class="flex flex-column gap-3 h-full">
                <div class="columns is-12">
                    <div class="column is-mobile-12 is-3">
                        <label>
                            ເລືອກປະເທດ
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            style="margin-top: 8px; width: 100% !important"
                            v-model="form.country_id" 
                            :options="stateCountry.data.props" 
                            optionLabel="name" 
                            optionValue="id"
                            :highlightOnSelect="true" 
                            placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                            class="w-full md:w-14rem" 
                        />
                    </div>
                    <div class="column is-mobile-12 is-2">
                        <label>
                            ເລືອກປະເພດບໍລິການ
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            style="margin-top: 8px; width: 100% !important"
                            v-model="form.real_estate_type_id" 
                            :options="realestateType.props" 
                            optionLabel="name" 
                            optionValue="id"
                            :highlightOnSelect="true" 
                            placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                            class="w-full md:w-14rem" 
                        />
                    </div>
                    <div class="column is-mobile-12 is-2">
                        <label>
                            ປະເພດຄ່າບໍລິການ
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            style="margin-top: 8px; width: 100% !important"
                            v-model="form.unit_price" 
                            :options="unitPrices" 
                            optionLabel="name" 
                            optionValue="id"
                            :highlightOnSelect="true" 
                            placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                            class="w-full md:w-14rem" 
                        />
                    </div>
                    <div class="column is-mobile-12 is-3">
                        <my-input-number
                            ref="autoFocusCursor"
                            name="service_charge"
                            label="ລາຄາ"
                            required
                            placeholder="ປ້ອນລາຄາ x,xxx"
                        />
                    </div>
                    <div class="column is-mobile-12 is-2">
                        <Button
                            type="submit"
                            severity="warning" 
                            :loading="state.btnLoading"
                            style="margin-top: 30px; font-family: 'NotoSansLao','Montserrat', 'sans-serif'"
                        >
                            <i :class="isEditing ? 'pi pi-pencil' : 'pi pi-plus-circle' " style="margin-right: 5px;"></i>
                            {{ isEditing ? 'ເເກ້ໄຂ' : 'ບັນທຶກ' }} ບໍລິການ
                        </Button>
                    </div>
                </div>
            </form>
            <hr style="margin-top: 5px;"/>
            <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                    <h2 class="mb-3" style="font-weight: bold; font-size: 24px;">
                        ລາຍການ ຄ່າບໍລິການທັງໝົດ
                    </h2>
                </span>
                <span class="w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0">
                    <Button 
                        style="color: white;"
                        icon="pi pi-refresh"
                        rounded 
                        severity="warning" 
                        :loading="state.btnLoading"
                        @click="refreshData()"
                    />
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
                currentPageReportTemplate="ສະແດງ {first} ຫາ {last} ຈາກ {totalRecords} ແຖວ"
            >
                <Column field="country.name" header="ປະເທດ" style="width: 15%"></Column>
                <Column field="real_estate_type.name" header="ປະເພດບໍລິການ"></Column>
                <Column field="service_charge" header="ຄ່າບໍລິການ" style="width: 25%;">
                    <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.service_charge, slotProps.data) }}
                    </template>
                </Column>
                <Column field="unit_price" header="ປະເພດຄ່າບໍລິການ" style="width: 25%"></Column>
                <Column headerStyle="width: 10rem">
                    <template #body="{ data }">
                        <div class="flex flex-wrap gap-2 btn-right">
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
                                @click="confirmDelete(data.id)" 
                            />
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue';
    import MyInputNumber from '../../../../components/customComponents/FormInputNumber.vue';
    import Dropdown from 'primevue/dropdown';
    import { realEstateServiceStore } from '../stores/real-estate-service.store';
    import { countryStore } from '../../../address/stores/country.store';
    import { useRoute, useRouter } from 'vue-router';
    import Button from 'primevue/button';
    import { useForm } from 'vee-validate';
    import { realEstateServiceSchema } from '../schema/real-estate-service.schema';
    import { useToast } from "primevue/usetoast";
    import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
    import Column from 'primevue/column';
    import { RealEstateServiceEntity } from '../entities/real-estate-service.entity';
    import { useConfirm } from "primevue/useconfirm";

    const toast = useToast();
    const confirm = useConfirm();

    const isEditing = ref(false);   
    const autoFocusCursor = ref();

    const { register, update, remove, getOne, getAll, form, state, setStateFilter, realestateType, unitPrices } = realEstateServiceStore();
    const { getAll: getAllCountry, state: stateCountry, setStateFilter: setStateCountyFilter } = countryStore();

    const { push } = useRouter()
    const { query } = useRoute()

    const { handleSubmit, handleReset, setFieldValue } = useForm<any>({
        validationSchema: realEstateServiceSchema
    })

    const onSubmit = handleSubmit(async(value) => {
        form.service_charge = value.service_charge;

        await register();
        
        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
            await handleReset();
            await fetchCountry();
        }
    })

    const onUpdate = handleSubmit(async(value) => {
        form.service_charge = value.service_charge;

        await update();
        
        if (state.error) {
            await showWarningValidateBackend();
        } else {
            isEditing.value = false;
            await showToastSuccess();
            await handleReset();
            await fetchCountry();
        }
    })

    const editItem = async(value: RealEstateServiceEntity) => {
        isEditing.value = true;
        setFieldValue('service_charge', value.service_charge);
        form.id = value.id;
        form.country_id = value.country?.id;
        form.real_estate_type_id = value.real_estate_type?.id;
        form.unit_price = value.unit_price;
        await scrollToInput();
    }

    async function onPageChange(event: DataTablePageEvent) {
        setStateFilter.page = event.page + 1; 
        setStateFilter.limit = event.rows;
        
        const { page, limit, filter } = setStateFilter
        push({ name: 'real.estate.services', query: { page, limit, search: filter?.country_id ? filter.country_id : undefined } })

        await getAll();
    }

    const first = computed(() => {
        let result: number = 0

        if(setStateFilter.page && setStateFilter.limit){
            result = (setStateFilter.page - 1) * setStateFilter.limit
        }
        return result
    })

    onMounted(async () => {
        await initComponent();
        await fetchData();
    })


    const fetchData = async () => {
        await fetchCountry();
    }

    const fetchCountry = async () => {
        setStateCountyFilter.limit = 200;
        await getAllCountry();
        form.country_id = stateCountry.data.props.length > 0 ? stateCountry.data.props[0].id : undefined;

        await getOne();
        form.real_estate_type_id = realestateType.props.length > 0 ? realestateType.props[0].id : undefined;
    }

    async function initComponent() {
        if (Object.keys(query).length !== 0) {
            setStateFilter.page = query.page ? Number(query.page) : 1
            setStateFilter.limit = query.limit ? Number(query.limit) : 10
            
            if (setStateFilter.filter?.country_id === '') {
                setStateFilter.filter.country_id = query.search ? (query.search as string) : '';
                push({ query: { page: setStateFilter.page, limit: setStateFilter.limit, search: undefined } })
            } else {
                push({
                    query: {
                        page: setStateFilter.page,
                        limit: setStateFilter.limit,
                        search: setStateFilter.filter?.country_id,
                    }
                })
            }
        }
        await getAll()
    }

    const deleteItem = async (id: RealEstateServiceEntity) => {
        await remove(id);
        await fetchData();
        await handleReset();
        await fetchCountry();
    }

    const confirmDelete = async (id: RealEstateServiceEntity) => {
        confirm.require({
            message: 'ທ່ານຕ້ອງການລຶບບັນທຶກນີ້ບໍ?',
            header: 'ຢືນຢັນການລຶບຂໍ້ມູນ',
            rejectLabel: 'ຍົກເລີກ',
            acceptLabel: 'ຕົກລົງ',
            rejectClass: 'p-button-secondary p-button-outlined',
            acceptClass: 'p-button-danger',
            accept: async () => {
                await deleteItem(id)

                toast.add({ severity: 'success', summary: 'ການລຶບຂໍ້ມູນສຳເລັດເເລ້ວ.', detail: 'ຖືກລຶບອອກເເລ້ວ', life: 3000 });
            },
            reject: () => {
                toast.add({ severity: 'error', summary: 'ຍົກເລີກການລຶບຂໍ້ມູນເເລ້ວ.', detail: 'ຖືກຍົກເລີກເເລ້ວ', life: 3000 });
            }
        });
    }

    const refreshData = async () => {
        state.btnLoading = true;
        await handleReset();
        await getAll();
        await fetchCountry();
        form.unit_price = 'day';
        isEditing.value = false;
        state.btnLoading = false;
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: 'ສຳເລັດເເລ້ວ.', detail: 'ການດຳເນີນສຳເລັດເເລ້ວ', life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: 'ເກີດຂໍ້ຜິດພາດ.', detail: `${state.error}`, life: 3000 });
    }

    const formatCurrency = (value: any, data: any) => {
        return  data.country.currency + value.toLocaleString('en-US');
        // return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const scrollToInput = async () => {
        // Ensure nameInput is available
        if (autoFocusCursor.value) {
            const inputElement = autoFocusCursor.value.$el;
            const inputRect = inputElement.getBoundingClientRect();

            // Check if the input is already in the viewport
            if (inputRect.top >= 0 && inputRect.bottom <= window.innerHeight) {
                inputElement.querySelector('input')?.focus();
            } else {
                // If not, scroll to the input element
                window.scrollTo({
                    top: window.scrollY + inputRect.top - window.innerHeight / 2,
                    behavior: 'smooth',
                });

                // Focus on the input after scrolling completes
                setTimeout(() => {
                    inputElement.querySelector('input')?.focus();
                }, 500); // Adjust the timeout based on your scroll duration
            }
        }
    };

</script>

<style scoped>
    @import 'bulma/css/bulma.css';
    
    .btn-right {
        display: flex;
        justify-content: flex-end;
    }
</style>