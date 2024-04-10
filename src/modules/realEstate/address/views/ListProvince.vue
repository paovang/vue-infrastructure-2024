<template>
    <div>
        <div class="card card-first">
            <form @submit.prevent="isEditing ? onUpdate() : onSubmit()" class="flex flex-column gap-3 h-full">
                <div class="col-12 md:col-12 flex flex-row">
                    <div class="col-12 md:col-5">
                        <div class="flex flex-column h-full">
                            <my-input-text 
                                ref="autoFocusCursor"
                                name="name" 
                                :label="$t('messages.name')"
                                required 
                                :placeholder="$t('placeholder.inputText')" 
                                class="h-full" 
                            />
                        </div>
                    </div>
                    <div class="col-12 md:col-5">
                        <div class="flex flex-column h-full">
                            <Dropdown 
                                v-model="form.country_id" 
                                :options="stateCountry.data.props" 
                                optionLabel="name" 
                                :placeholder="$t('placeholder.dropdownSelect')" 
                                optionValue="id"
                                :highlightOnSelect="true" 
                                class="w-full md:w-14rem" 
                            />
                        </div>
                    </div>
                    <div class="col-12 md:col-2 flex flex-column">
                        <Button 
                            type="submit"
                            v-if="!isEditing"
                            :disabled="validationPermissions(GET_PERMISSIONS.PROVINCE.CREATE)"
                        >
                            <i class="pi pi-plus-circle" style="margin-right: 8px;"></i>
                            {{ $t('button.save') }} {{ $t('messages.province') }}
                        </Button>

                        <Button 
                            type="submit"
                            severity="warning"
                            v-if="isEditing"
                            :disabled="validationPermissions(GET_PERMISSIONS.PROVINCE.UPDATE)"
                        >
                            <i class="pi pi-plus-circle" style="margin-right: 8px;"></i>
                            {{ $t('button.edit') }} {{ $t('messages.province') }}
                        </Button>
                    </div>
                </div>
            </form>
        </div>

        <div class="card">
            <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                    <h2 class="mb-3">
                        {{ $t('table.title.province') }}
                    </h2>
                </span>
                <span class="w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0">
                    <Button 
                        icon="pi pi-refresh" 
                        rounded 
                        severity="warning" 
                        @click="RefreshData()"
                        :loading="state.btnLoading"
                    />
                </span>
            </div>
            <DataTable 
                :value="state.data.props" 
                :loading="state.isLoading" 
                lazy
                tableStyle="min-width: 50rem"
                :totalRecords="state.data.total"
                @page="onPageChange"
                paginator
                :first="first"
                :rows="setStateFilter.limit"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25]"
                :currentPageReportTemplate="`${$t('table.pagination.show')} {first} ${$t('table.pagination.to')} {last} ${$t('table.pagination.from')} {totalRecords} ${$t('table.pagination.row')}`"
            >
                <template #header>
                    <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                        <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                        <i class="pi pi-search" style="margin-top: -10px"/>
                        <input-text
                            v-model="filteredName"
                            :placeholder="$t('placeholder.textSearch')" 
                            style="font-family: NotoSansLao, Montserrat"
                            class="w-full"
                            @keyup.enter="onSearch"
                            @input="onClearSearch"
                        />
                        </span>
                    </div>
                    </template>
                    <Column field="id" :header="$t('table.header.index')" style="width: 25%">
                        <template #body="item">
                            {{ item.index + 1 }}
                        </template>
                    </Column>
                <Column field="name" :header="$t('table.header.province')" style="width: 25%"></Column>
                <Column field="country.name" :header="$t('table.header.country')" style="width: 25%"></Column>
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
                                :disabled="validationPermissions(GET_PERMISSIONS.PROVINCE.UPDATE)"
                            />
                            <Button 
                                type="button" 
                                icon="pi pi-trash" 
                                rounded 
                                severity="danger"
                                @click="confirmDelete(data.id)" 
                                :disabled="validationPermissions(GET_PERMISSIONS.PROVINCE.DELETE)"
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
    import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
    import Column from 'primevue/column';
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';
    import { provinceStore } from '../stores/province.store';
    import { countryStore } from '../stores/country.store';
    import { useToast } from "primevue/usetoast";
    import { useForm } from 'vee-validate';
    import { createProvinceSchema } from '../schema/province.shema';
    import MyInputText from '@/components/customComponents/FormInputText.vue';
    import { useRoute, useRouter } from 'vue-router';
    import { ProvinceEntity } from '../entities/province.entity';
    import { useConfirm } from "primevue/useconfirm";
    import Dropdown from 'primevue/dropdown';
    import { useI18n } from 'vue-i18n';
    import { validationPermissions } from '@/common/utils/validation-permissions';
    import { GET_PERMISSIONS } from '@/common/utils/const';

    const { t } = useI18n();
    const toast = useToast();
    const confirm = useConfirm();

    const isEditing = ref(false);
    const autoFocusCursor = ref();
    const { push } = useRouter()
    const { query } = useRoute()

    const { register, update, remove, getAll, form, state, setStateFilter } = provinceStore();
    const { getAll: getAllCountry, state: stateCountry, setStateFilter: setStateCountyFilter } = countryStore();

    const translatedErrorMessages = {
        name: t('placeholder.inputText')
    }
    const { handleSubmit, handleReset, setFieldValue } = useForm<any>({
        validationSchema: createProvinceSchema(translatedErrorMessages)
    })

    const RefreshData = async() => {
        state.btnLoading = true;
        isEditing.value = false;

        if (setStateFilter.filter) {
            setStateFilter.filter.name = '';
        }
        
        await handleReset();
        await initComponent();
        await fetchCountry();
        state.btnLoading = false;
    }

    const deleteItem = async (id: ProvinceEntity) => {
        await remove(id);
        await handleReset();
        await fetchCountry();
    }

    const editItem = async (value: ProvinceEntity) => {
        isEditing.value = true;
        form.country_id = value.country?.id;
        setFieldValue('id', value.id);
        setFieldValue('name', value.name);
        await scrollToInput();
    }

    const onUpdate = handleSubmit(async(values) => {
        form.id = values.id;
        form.name = values.name;

        await update();

        if (state.error) {
            showWarningValidateBackend();
        } else {
            await showToastSuccess();
            await handleReset();
            await fetchCountry();
            isEditing.value = false;
        }
    });
    
    const onSubmit = handleSubmit(async (values) => {
        form.name = values.name;

        await register();
        
        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
            await handleReset();
            await fetchCountry();
        }
    })

    async function onPageChange(event: DataTablePageEvent) {
        setStateFilter.page = event.page + 1;
        setStateFilter.limit = event.rows;

        const { page, limit, filter } = setStateFilter
        push({ name: 'province', query: { page, limit, search: filter?.name ? filter.name : undefined } })

        await getAll();
    }

    const first = computed(() => {
        let result: number = 0

        if(setStateFilter.page && setStateFilter.limit){
            result = (setStateFilter.page - 1) * setStateFilter.limit
        }
        return result
    })

    const confirmDelete = async (id: ProvinceEntity) => {
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

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    async function initComponent() {
        if (Object.keys(query).length !== 0) {
            setStateFilter.page = query.page ? Number(query.page) : 1
            setStateFilter.limit = query.limit ? Number(query.limit) : 10
            
            if (setStateFilter.filter?.name === '') {
                setStateFilter.filter.name = query.search ? (query.search as string) : '';
                push({ query: { page: setStateFilter.page, limit: setStateFilter.limit, search: undefined } })
            } else {
                push({
                    query: {
                        page: setStateFilter.page,
                        limit: setStateFilter.limit,
                        search: setStateFilter.filter?.name,
                    }
                })
            }
        }
        await getAll()
    }

    


    onMounted(async () => {
        await initComponent();
        await fetchCountry();
    })

    const fetchCountry = async () => {
        setStateCountyFilter.limit = 200;
        await getAllCountry();
        form.country_id = stateCountry.data.props.length > 0 ? stateCountry.data.props[0].id : undefined;
    }

    const filteredName = computed<string>({
        get: () => setStateFilter.filter!.name,
        set: (value) => {
            if (setStateFilter.filter) {
                setStateFilter.filter.name = value;
            } else {
                setStateFilter.filter = { name: value };
            }
        }
    })


    async function onSearch() {
        await getAll();
    }

    async function onClearSearch(e: any) {
        if (e.target.value === '') {
            if (setStateFilter.filter?.name !== undefined) {
                setStateFilter.filter.name = ''
            }
            
            push({ query: { name: undefined } })

            await getAll()
        }
    }

    const scrollToInput = () => {
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
    .card-first {
      height: 100px;
      border: 1px solid #ccc;
      padding: 10px;
    }
    .btn-right {
        display: flex;
        justify-content: flex-end;
    }
    .md\:w-20rem {
        width: auto !important;
    }
    .md\:w-14rem {
        width: auto !important;
    }
</style>