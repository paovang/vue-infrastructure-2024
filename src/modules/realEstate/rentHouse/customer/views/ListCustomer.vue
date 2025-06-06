<template>
    <div>
        <transition name="fade" mode="out-in">
            <div class="card" v-if="isCardVisible">
                <Fieldset>
                    <template #legend>
                        <div class="flex align-items-center pl-2">
                            <i class="pi pi-users" style="font-size: 20px;"></i>
                            <span class="font-bold">{{ $t('messages.form_register_customer') }}</span>
                        </div>
                    </template>
                    <form @submit.prevent="isEditing ? onUpdate() : onSubmit()" class="flex flex-column gap-3 h-full">
                        <div class="col-12 md:col-12 flex flex-row">
                            <div class="col-12 md:col-3">
                                <label>
                                    {{ $t('messages.select')}} {{ $t('messages.country')}}
                                    <span class="text-red-500"> *</span>
                                </label>
                                <Dropdown 
                                    style="margin-top: 8px;"
                                    v-model="form.country_id" 
                                    :options="stateCountry.data.props" 
                                    optionLabel="name" 
                                    optionValue="id"
                                    :highlightOnSelect="true" 
                                    :placeholder="$t('placeholder.dropdownSelect')" 
                                    class="w-full md:w-14rem" 
                                />
                            </div>
                            <div class="col-12 md:col-3">
                                <my-input-text 
                                    ref="autoFocusCursor"
                                    name="name" 
                                    :label="$t('messages.full_name')"
                                    required 
                                    :placeholder="$t('placeholder.inputText')" 
                                    class="h-full" 
                                />
                            </div>
                            <div class="col-12 md:col-6">
                                <my-input-text 
                                    name="address" 
                                    :label="$t('messages.address')"
                                    required 
                                    :placeholder="$t('placeholder.inputTextAddress')" 
                                    class="h-full" 
                                />
                            </div>
                        </div>

                        <div class="col-12 md:col-12 flex flex-row is-margin-top">
                            <div class="col-12 md:col-3">
                                <my-input-text 
                                    name="tel" 
                                    :label="$t('messages.phone_number')"
                                    required 
                                    :placeholder="$t('placeholder.inputText')" 
                                    class="h-full" 
                                />
                            </div>
                            <div class="col-12 md:col-3">
                                <my-input-text 
                                    name="email" 
                                    :label="$t('messages.email')"
                                    required 
                                    :placeholder="$t('placeholder.inputText')" 
                                    class="h-full" 
                                    :isEditing="isEditing"
                                />
                            </div>
                            <div class="col-12 md:col-3">
                                <my-input-password 
                                    name="password"
                                    :label="$t('messages.password')" 
                                    :placeholder="$t('placeholder.inputText')"
                                    :disabled="isEditing"  
                                />
                            </div>
                            <div class="col-12 md:col-3">
                                <my-input-password 
                                    name="password_confirmation"
                                    :label="$t('messages.confirm_password')" 
                                    :placeholder="$t('placeholder.inputText')"  
                                    :disabled="isEditing"  
                                />
                            </div>
                        </div>
                        <div class="col-12 md:col-12 flex flex-row is-margin-top">
                            <div class="col-12 md:col-4">
                                <my-input-file 
                                    name="profile" 
                                    :label="$t('messages.profile')" 
                                    required 
                                    :multiple="true"
                                    class="h-full" 
                                    @change="handleProfileFileChange"
                                />
                            </div>
                            <div class="col-12 md:col-4">
                                <my-input-text 
                                    name="id_no" 
                                    :label="$t('messages.id_no')" 
                                    required 
                                    :placeholder="$t('placeholder.inputTextIdNo')"  
                                    class="h-full" 
                                />
                            </div>
                            <div class="col-12 md:col-4">
                                <my-input-file 
                                    name="id_image" 
                                    :label="$t('messages.id_image')" 
                                    required 
                                    :multiple="true"
                                    class="h-full" 
                                    @change="handleFileChange"
                                />
                            </div>
                        </div>
                        
                        <div class="custom-button-container">
                            <Button 
                                type="submit"
                                severity="warning" 
                                :loading="state.btnLoading"
                                style="margin-right: 8px;"
                            >
                                <i :class="isEditing ? 'pi pi-pencil' : 'pi pi-plus-circle' " style="margin-right: 8px;"></i>
                                {{ isEditing ? $t('button.edit') : $t('button.save') }} {{ $t('messages.customer')}}
                            </Button>
                            <Button 
                                severity="danger" 
                                :loading="state.btnLoading"
                                @click="clearForm()"
                            >
                                <i class="pi pi-sync" style="margin-right: 8px;"></i>
                                {{ $t('button.clear')}}
                            </Button>
                        </div>
                    </form>
                </Fieldset>
            </div>
        </transition>
            
        <div class="card">
            <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                    <h2 class="mb-3">
                        {{ $t('table.title.customer')}}
                    </h2>
                </span>
                <span class="w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0">
                    <Button 
                        :label="!isCardVisible ? $t('button.add') + ' ' + $t('messages.customer') : $t('button.close')"
                        rounded 
                        :severity="!isCardVisible ? 'info' : 'danger'" 
                        @click="toggleIsCardVisible"
                        :loading="state.btnLoading"
                        :disabled="validationPermissions(GET_PERMISSIONS.CUSTOMER.CREATE)"
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
                scrollable
                :rows="setStateFilter.limit"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25]"
                :currentPageReportTemplate="`${$t('table.pagination.show')} {first} ${$t('table.pagination.to')} {last} ${$t('table.pagination.from')} {totalRecords} ${$t('table.pagination.row')}`"
            >
                <template #header>
                    <div class="col-12 md:col-12 flex flex-row">
                        <div class="col-12 md:col-3">
                            <span class="p-input-icon-left w-full flex-order-1 sm:flex-order-0">
                                <Dropdown 
                                    v-model="filterCountry" 
                                    :options="stateCountry.data.props" 
                                    optionLabel="name" 
                                    optionValue="id"
                                    :highlightOnSelect="true" 
                                    :placeholder="$t('placeholder.dropdownSelect')" 
                                    class="w-full md:w-14rem" 
                                    @change="onSearch"
                                />
                            </span>
                        </div>
                        <div class="col-12 md:col-3">
                            <span class="p-input-icon-left w-full flex-order-1 sm:flex-order-0">
                                <i class="pi pi-search" style="margin-top: -10px"/>
                                <input-text
                                    v-model="filteredName"
                                    :placeholder="`${$t('placeholder.textSearch')} (${$t('messages.full_name')})`"  
                                    style="font-family: NotoSansLao, Montserrat"
                                    class="w-full"
                                    @keyup.enter="onSearch"
                                    @input="onClearSearch"
                                />
                            </span>
                        </div>
                        <div class="col-12 md:col-4">
                            <span class="p-input-icon-left w-full flex-order-1 sm:flex-order-0">
                                <i class="pi pi-search" style="margin-top: -10px"/>
                                <input-text
                                    v-model="filterTel"
                                    :placeholder="`${$t('placeholder.textSearch')} ${$t('messages.phone_number')}`" 
                                    style="font-family: NotoSansLao, Montserrat"
                                    class="w-full"
                                    @keyup.enter="onSearch"
                                    @input="onClearSearch"
                                />
                            </span>
                        </div>
                        <div class="col-12 md:col-2">
                            <span class="p-input-icon-left w-full flex-order-1 sm:flex-order-0">
                                <Button 
                                    icon="pi pi-refresh"
                                    severity="warning" 
                                    @click="RefreshData()"
                                    :loading="state.btnLoading"
                                />
                            </span>
                        </div>
                    </div>
                </template>
                <Column field="id" :header="$t('table.header.index')">
                    <template #body="item">
                        {{ item.index + 1 }}
                    </template>
                </Column>
                <Column headerStyle="min-width: 18rem" frozen>
                    <template #body="{ data }">
                        <div class="flex flex-wrap gap-2 btn-right">
                            <Button 
                                type="button" 
                                :label="data.status === 'open' ? $t('messages.open') : $t('messages.close')"
                                rounded
                                :severity="data.status === 'open' ? 'success' : 'danger'"
                                @click="confirmUpdateStatus(data.id)" 
                                :disabled="validationPermissions(GET_PERMISSIONS.CUSTOMER.UPDATE)"
                            />
                            <Button 
                                type="button" 
                                icon="pi pi-eye" 
                                rounded 
                                severity="info"  
                                style="color: white;" 
                                @click="viewItem(data)"
                            />
                            <Button 
                                type="button" 
                                icon="pi pi-lock" 
                                rounded 
                                severity="danger"  
                                style="color: white;" 
                                @click="changePassword(data.user.id)"
                            />
                            <Button 
                                type="button" 
                                icon="pi pi-pencil" 
                                rounded 
                                severity="warning"  
                                style="color: white;" 
                                @click="editItem(data)"
                                :disabled="validationPermissions(GET_PERMISSIONS.CUSTOMER.UPDATE)"
                            />
                            <Button 
                                type="button" 
                                icon="pi pi-trash" 
                                rounded 
                                severity="danger"
                                @click="confirmDelete(data.id)" 
                                :disabled="validationPermissions(GET_PERMISSIONS.CUSTOMER.DELETE)"
                            />
                        </div>
                    </template>
                </Column>
                <Column :header="$t('table.header.profile')" headerStyle="min-width: 8rem" frozen>
                    <template #body="{ data }">
                        <Image :src="data.user.profile" alt="Image" preview style="max-width: 80px;"/>
                    </template>
                </Column>
                <Column field="id_image" :header="$t('table.header.id_image')" headerStyle="min-width: 8rem" frozen>
                    <template #body="{ data }">
                        <Image :src="data.id_image" alt="Image" preview style="max-width: 80px;"/>
                    </template>
                </Column>
                <Column field="id_no" :header="$t('table.header.id_no')" headerStyle="min-width: 10rem"></Column>
                <Column field="country.name" :header="$t('table.header.country')" headerStyle="min-width: 5rem"></Column>
                <Column field="customer_number" :header="$t('table.header.customer_number')" headerStyle="min-width: 8rem"></Column>
                <Column field="name" :header="$t('table.header.full_name')" headerStyle="min-width: 8rem"></Column>
                <Column field="address" :header="$t('table.header.address')" headerStyle="min-width: 10rem"></Column>
                <Column field="tel" :header="$t('table.header.phone_number')" headerStyle="min-width: 8rem"></Column>
                <Column field="email" :header="$t('table.header.email')"></Column>
                <Column field="status" :header="$t('table.header.status')" headerStyle="min-width: 5rem"></Column>
                <Column field="created" :header="$t('table.header.created_at')" headerStyle="min-width: 8rem"></Column>
                <Column field="updated" :header="$t('table.header.updated_at')" headerStyle="min-width: 8rem"></Column>
            </DataTable>
        </div>

        <change-user-password
            ref="editForm" 
            :form="form"
            :user-id="userId"
            :change-user-password="changeUserPassword"
            :state="state"
            @on-success="onSuccess"
        />

        <view-customer
            ref="createForm" 
            :data="dataEdit"
            @on-success="onSuccess"
        />
    </div>
  </template>
  
  <script setup lang="ts">
    import { ref, onMounted, computed, watch } from 'vue';
    import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
    import Column from 'primevue/column';
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';
    import { customerStore } from '../stores/customer.store';
    import { countryStore } from '@/modules/realEstate/address/stores/country.store';
    import { useToast } from "primevue/usetoast";
    import { useRoute, useRouter } from 'vue-router';
    import { useConfirm } from "primevue/useconfirm";
    import Dropdown from 'primevue/dropdown';
    import { CustomerEntity } from '../entities/customer.entity';
    import Fieldset from 'primevue/fieldset';
    import MyInputText from '@/components/customComponents/FormInputText.vue';
    import { useForm } from 'vee-validate';
    import { customerSchema } from '../schema/customer.shema';
    import { useI18n } from 'vue-i18n';
    import MyInputPassword from '@/components/customComponents/FormInputPassword.vue';
    import MyInputFile from '@/components/customComponents/FormInputFile.vue';
    import axios from 'axios';
    import Image from 'primevue/image';
    import { validFileTypes, isValidFileSize } from '@/common/utils/validation.file';
    import { showNotificationToast } from '@/common/utils/toast';
    import { uploadFileToServer } from '@/common/utils/upload-file';
    import { validationPermissions } from '@/common/utils/validation-permissions';
    import { GET_PERMISSIONS } from '@/common/utils/const';
    import ChangeUserPassword from '../components/Change-User-Password.Component.vue';
    import ViewCustomer from '../components/ViewCustomer.vue';


    const { t } = useI18n();
    const toast = useToast();
    const confirm = useConfirm();

    const isEditing = ref(false);   
    const autoFocusCursor = ref();
    const isCardVisible = ref(false);
    const isValidate = ref<boolean>(true); 
    const createForm = ref();

    const { push } = useRouter()
    const { query } = useRoute()

    const { register, update, remove, getAll, form, state, setStateFilter, updateStatus, changeUserPassword } = customerStore();
    const { getAll: getAllCountry, state: stateCountry, setStateFilter: setStateCountyFilter } = countryStore();

    const translatedErrorMessages = {
        name: t('placeholder.inputText'),
        address: t('placeholder.inputText'),
        tel: t('placeholder.inputText'),
        email: t('placeholder.inputText'),
        password: t('placeholder.inputText'),
        password_confirmation: t('placeholder.inputText'),
        id_no: t('placeholder.inputText'),
        id_image: t('placeholder.inputText'),
    }

    const editForm = ref();
    const userId = ref();
    const dataEdit = ref();

    const viewItem = async (data: CustomerEntity) => {
        dataEdit.value = data;
        createForm.value.visible = true;
    }

    const changePassword = async (id: any) => {
        userId.value = id;
        editForm.value.visible = true;
    }

    const onSuccess = async () => {
        await initComponent();
        await fetchData();
        stateCountry.data.props.unshift({ id: 'all', name: t('messages.all') });
    }

    // Define a reactive property to hold the validation schema
    const validationSchema = ref(customerSchema(translatedErrorMessages, isValidate.value));

    // Function to update the validation schema
    const updateValidationSchema = () => {
        validationSchema.value = customerSchema(translatedErrorMessages, isValidate.value);
    };

    // When isValidate.value changes, update the validation schema
    watch(isValidate, () => {
        updateValidationSchema();
    });

    // Now, use validationSchema in useForm
    const { handleSubmit, handleReset, setFieldValue } = useForm<any>({
        validationSchema: validationSchema
    });

    const onUpdate = handleSubmit(async(values) => {
        form.id = values.id;
        form.name = values.name;
        form.address = values.address;
        form.tel = values.tel;
        form.email = values.email;
        form.id_no = values.id_no;
        form.id_image = selectedImage.value;
        form.profile = selectedProfile.value;

        await update();
        
        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
            await handleReset();
            await fetchCountry();
            isCardVisible.value = false;
            isEditing.value = false;
            isValidate.value = true;
            
            selectedImage.value = "";
            const inputFile = document.getElementById('id_image') as HTMLInputElement;
            inputFile.value = '';

            selectedProfile.value = "";
            const inputProfileFile = document.getElementById('profile') as HTMLInputElement;
            inputProfileFile.value = '';
        }
    })

    const onSubmit = handleSubmit(async(values) => {
        form.name = values.name;
        form.address = values.address;
        form.email = values.email;
        form.tel = values.tel;
        form.password = values.password;
        form.password_confirmation = values.password_confirmation;
        form.id_no = values.id_no;
        form.id_image = selectedImage.value;
        form.profile = selectedProfile.value;

        await register();
        
        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
            await handleReset();
            await fetchCountry();
            selectedImage.value = "";
            const inputFile = document.getElementById('id_image') as HTMLInputElement;
            inputFile.value = '';
            isCardVisible.value = false;
        }
    })

    const fetchCountry = async () => {
        setStateCountyFilter.limit = 200;
        await getAllCountry();
        form.country_id = stateCountry.data.props.length > 0 ? stateCountry.data.props[0].id : undefined;
    }

    const toggleIsCardVisible = async () => {
        isEditing.value = false;
        isValidate.value = true;

        if (isCardVisible.value) {
            isCardVisible.value = false;
        } else {
            isCardVisible.value = true;
        }
    }

    const clearForm = async () => {
        state.btnLoading = false;
        await handleReset(); 
        isEditing.value = false;
        isCardVisible.value = false;
    }

    const RefreshData = async() => {
        state.btnLoading = true;
        isEditing.value = false;

        if (setStateFilter.filter) {
            setStateFilter.filter.name = '';
            setStateFilter.filter.country_id = '';
            setStateFilter.filter.tel = '';
        }
        
        await initComponent();
        await fetchData();
        state.btnLoading = false;
    }

    const deleteItem = async (id: CustomerEntity) => {
        await remove(id);
        await fetchData();
    }

    const updateStatusItem = async (id: CustomerEntity) => {
        await updateStatus(id);
        await fetchData();
    }

    const editItem = async (value: CustomerEntity) => {
        setFieldValue('id', value.id);
        setFieldValue('name', value.name);
        setFieldValue('address', value.address);
        setFieldValue('email', value.email);
        setFieldValue('tel', value.tel);
        setFieldValue('id_no', value.id_no);
        form.country_id = value.country?.id;
        if (value.user) {
            form.user_id = value.user.id;
        }

        isEditing.value = true;
        isCardVisible.value = true;
        isValidate.value = false;

        await scrollToInput();
        await scrollToInput();
    }

    async function onPageChange(event: DataTablePageEvent) {
        setStateFilter.page = event.page + 1;
        setStateFilter.limit = event.rows;

        const { page, limit, filter } = setStateFilter
        push({ name: 'customer', query: { page, limit, search: filter?.name ? filter.name : undefined } })

        await getAll();
    }

    const first = computed(() => {
        let result: number = 0

        if(setStateFilter.page && setStateFilter.limit){
            result = (setStateFilter.page - 1) * setStateFilter.limit
        }
        return result
    })

    const confirmDelete = async (id: CustomerEntity) => {
        confirm.require({
            message: t('confirmDelete.message'),
            header: t('confirmDelete.header'),
            rejectLabel: t('confirmDelete.rejectLabel'),
            acceptLabel: t('confirmDelete.acceptLabel'),
            rejectClass: 'p-button-secondary p-button-outlined',
            acceptClass: 'p-button-danger',
            accept: async () => {
                await deleteItem(id);

                toast.add({ severity: 'success', summary: t('toast.summary.delete'), detail: t('toast.detail.delete'), life: 3000 });
            },
            reject: () => {
                toast.add({ severity: 'error', summary: t('toast.summary.cancel_delete'), detail: t('toast.detail.cancel_delete'), life: 3000 });
            }
        });
    }

    const confirmUpdateStatus = async (id: CustomerEntity) => {
        confirm.require({
            message: t('confirmUpdateStatus.message'),
            header: t('confirmUpdateStatus.header'),
            rejectLabel: t('confirmUpdateStatus.rejectLabel'),
            acceptLabel: t('confirmUpdateStatus.acceptLabel'),
            rejectClass: 'p-button-secondary p-button-outlined',
            acceptClass: 'p-button-danger',
            accept: async () => {
                await updateStatusItem(id);

                toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
            },
            reject: () => {
                toast.add({ severity: 'error', summary: t('toast.summary.cancel_update'), detail: t('toast.detail.cancel_update'), life: 3000 });
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
        await getAll();
    }


    onMounted(async () => {
        await initComponent();
        await fetchData();
        stateCountry.data.props.unshift({ id: 'all', name: t('messages.all') });
        form.country_id = stateCountry.data.props.length > 0 ? stateCountry.data.props[0].id : undefined;
    })

    const fetchData = async () => {
        await fetchCountry();
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

    const filterCountry = computed<string>({
        get: () => setStateFilter.filter!.country_id || '',
        set: (value) => {
            if (setStateFilter.filter) {
                setStateFilter.filter.country_id = value;
            }
        }
    })

    const filterTel = computed({
        get: () => setStateFilter.filter?.tel || '',
        set: (value) => {
            if (setStateFilter.filter) {
                setStateFilter.filter.tel = value;
            }
        },
    });

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
    }

    const selectedImage = ref();
    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];

        if (! await validFileTypes(file)) {
            await showNotificationToast({ toast, error: 'error', summary: t("toast.summary.error"), detail: t("toast.summary.profile_valid_file_mimes") });
            event.target.value = '';
            return;
        }
        if (! await isValidFileSize(file)) {
            await showNotificationToast({ toast, error: 'error', summary: t("toast.summary.error"), detail: t("toast.summary.profile_valid_file_size") });
            event.target.value = '';
            return;
        }

        await uploadFileToServer({ axios, file, state, selectedImage, toast, t });
    }

    const selectedProfile = ref();
    const handleProfileFileChange = async (event: any) => {
        const file = event.target.files[0];

        if (! await validFileTypes(file)) {
            await showNotificationToast({ toast, error: 'error', summary: t("toast.summary.error"), detail: t("toast.summary.profile_valid_file_mimes") });
            event.target.value = '';
            return;
        }
        if (! await isValidFileSize(file)) {
            await showNotificationToast({ toast, error: 'error', summary: t("toast.summary.error"), detail: t("toast.summary.profile_valid_file_size") });
            event.target.value = '';
            return;
        }

        await uploadFileToServer({ axios, file, state, selectedImage: selectedProfile, toast, t });
    }
</script>

<style scoped>
    .is-margin-top {
        margin-top: -50px;
    }
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
    .font-bold {
        margin-left: 10px;
    }

    .custom-button-container {
        text-align: right;
    }
    .custom-button {
        margin-left: 8px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>

<!-- https://froala.com/wysiwyg-editor/docs/overview/ -->