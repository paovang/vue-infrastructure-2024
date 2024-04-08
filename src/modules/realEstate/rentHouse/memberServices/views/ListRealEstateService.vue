<template>
    <div>
        <div class="card">
            <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                    <h2 class="mb-3" style="font-weight: bold; font-size: 24px;">
                        {{ $t('table.title.service')}}
                    </h2>
                </span>
                <span class="w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0">
                    <Button 
                        style="color: white;"
                        :label="$t('button.add')"
                        severity="info" 
                        :loading="state.btnLoading"
                        @click="addItem()"
                    />
                    <span style="margin-left: 10px;"></span>
                    <Button 
                        style="color: white;"
                        icon="pi pi-refresh"
                        severity="warning" 
                        :loading="state.btnLoading"
                        @click="refreshData()"
                    />
                </span>
            </div>
            <hr style="margin-top: 5px;"/>
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
                <Column field="real_estate_type.name" :header="$t('table.header.realestate_type')"></Column>
                <Column field="service_charges" :header="$t('table.header.service')">
                    <template #body="{ data }">
                        {{ conCatServiceChargePrices(data.service_charges) }}
                    </template>
                </Column>
                <Column field="unit_price" :header="$t('table.header.unit_price')"></Column>
                <Column headerStyle="min-width: 6rem">
                    <template #body="{ data }">
                        <div class="flex flex-wrap gap-2 btn-right">
                            <Button 
                                type="button" 
                                icon="pi pi-pencil" 
                                rounded 
                                severity="warning"  
                                style="color: white;" 
                                @click="EditItem(data)"
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

        <add-real-estate-service-charge 
            ref="createForm" 
            @on-success="onSuccess"
            :realestate-type="realestateType"
            :unit-prices="unitPrices"
            :currencies="currencies"
        />

        <edit-real-estate-service-charge 
            ref="editForm" 
            @on-success="onSuccess"
            :data="data"
            :realestate-type="realestateType"
            :unit-prices="unitPrices"
            :currencies="currencies"
        />

    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue';
    import { realEstateServiceStore } from '../stores/real-estate-service.store';
    import { useRoute, useRouter } from 'vue-router';
    import Button from 'primevue/button';
    import { useToast } from "primevue/usetoast";
    import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
    import Column from 'primevue/column';
    import { RealEstateServiceEntity } from '../entities/real-estate-service.entity';
    import { useConfirm } from "primevue/useconfirm";
    import { useI18n } from 'vue-i18n';
    import { conCatServiceChargePrices } from '@/common/utils/concat';
    import addRealEstateServiceCharge from '../components/Add.Component.vue';
    import editRealEstateServiceCharge from '../components/Edit.Component.vue';
    import { homerealEstateStore } from '@/modules/realEstate/homepage/stores/home.store';

    const { t } = useI18n();
    const toast = useToast();
    const confirm = useConfirm();

    const isEditing = ref(false);   

    const unitPrices = ref([
        { id: 'day', name: t('messages.day') },
        { id: 'month', name: t('messages.month') },
        { id: 'year', name: t('messages.year') },
    ]);

    const { remove, getOne, getAll, form, state, setStateFilter, realestateType } = realEstateServiceStore();
    const { getCurrencies, currencies } = homerealEstateStore();

    const { push } = useRouter()
    const { query } = useRoute()

    const createForm = ref();
    const addItem = async () => {
        createForm.value.visible = true;
    }

    const onSuccess = async () => {
        await fetchData();
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
        await fetchData();
    })


    const fetchData = async () => {
        await initComponent();
        await fetchCountry();
        await getCurrencies();
    }

    const fetchCountry = async () => {
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

    const data = ref();
    const editForm = ref();
    const EditItem = async (value: any) => {
        data.value = value;
        editForm.value.visible = true;
    }   

    const deleteItem = async (id: RealEstateServiceEntity) => {
        await remove(id);
        await fetchData();
        await fetchCountry();
    }

    const confirmDelete = async (id: RealEstateServiceEntity) => {
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

    const refreshData = async () => {
        state.btnLoading = true;
        await getAll();
        await fetchCountry();
        form.unit_price = 'day';
        isEditing.value = false;
        state.btnLoading = false;
    }

</script>

<style scoped>
    @import 'bulma/css/bulma.css';
    
    .btn-right {
        display: flex;
        justify-content: flex-end;
    }
</style>../../../real-estate/address/stores/country.store../../../realEstate/address/stores/country.store