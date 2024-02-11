<template>
    <div>
        <transition name="fade" mode="out-in">
            <div class="card" v-if="isCardVisible">
                <Fieldset>
                    <template #legend>
                        <div class="flex align-items-center pl-2">
                            <i class="pi pi-users" style="font-size: 20px;"></i>
                            <span class="font-bold">ຟອມລົງທະບຽນ ຂໍ້ມູນລູກຄ້າ</span>
                        </div>
                    </template>
                    <form @submit.prevent="isEditing ? onUpdate() : onSubmit()" class="flex flex-column gap-3 h-full">
                        <div class="col-12 md:col-12 flex flex-row">
                            <div class="col-12 md:col-3">
                                <label>
                                    ກະລຸນາເລືອກ
                                    <span class="text-red-500"> *</span>
                                </label>
                                <Dropdown 
                                    style="margin-top: 8px;"
                                    v-model="form.country_id" 
                                    :options="stateCountry.data.props" 
                                    optionLabel="name" 
                                    optionValue="id"
                                    :highlightOnSelect="true" 
                                    placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                                    class="w-full md:w-14rem" 
                                />
                            </div>
                            <div class="col-12 md:col-3">
                                <my-input-text 
                                    ref="autoFocusCursor"
                                    name="name" 
                                    label="ຊື່" 
                                    required 
                                    placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                                    class="h-full" 
                                />
                            </div>
                            <div class="col-12 md:col-3">
                                <my-input-text 
                                    name="owner" 
                                    label="ເຈົ້າຂອງ" 
                                    required 
                                    placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                                    class="h-full" 
                                />
                            </div>
                            <div class="col-12 md:col-3">
                                <my-input-text 
                                    name="address" 
                                    label="ເບີໂທລະສັບ" 
                                    required 
                                    placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                                    class="h-full" 
                                />
                            </div>
                        </div>

                        <div class="col-12 md:col-12 flex flex-row" style="margin-top: -35px;">
                            <div class="col-12 md:col-4">
                                <my-input-text 
                                    name="tel" 
                                    label="ທີ່ຢູ່ປະຈຸບັນ" 
                                    required 
                                    placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                                    class="h-full" 
                                />
                            </div>
                            <div class="col-12 md:col-4">
                                <my-input-text 
                                    name="email" 
                                    label="ອີເມວ" 
                                    required 
                                    placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                                    class="h-full" 
                                    :isEditing="isEditing"
                                />
                            </div>
                            <div class="col-12 md:col-2">
                                <my-input-text 
                                    name="password" 
                                    label="ລະຫັດຜ່ານ" 
                                    required 
                                    placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                                    class="h-full" 
                                />
                            </div>
                            <div class="col-12 md:col-2">
                                <my-input-text 
                                    name="password_confirmation" 
                                    label="ຢືນຢັນລະຫັດຜ່ານ" 
                                    required 
                                    placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                                    class="h-full" 
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
                                {{ isEditing ? 'ເເກ້ໄຂ' : 'ບັນທຶກ' }} ລູກຄ້າ
                            </Button>
                            <Button 
                                severity="danger" 
                                :loading="state.btnLoading"
                                @click="clearForm()"
                            >
                                <i class="pi pi-sync" style="margin-right: 8px;"></i>
                                ລົບລ້າງ
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
                        ລາຍການ ລູກຄ້າທັງໝົດ
                    </h2>
                </span>
                <span class="w-full sm:w-auto flex-order-0 sm:flex-order-1 mb-4 sm:mb-0">
                    <Button 
                        :icon="isCardVisible ? 'pi pi-chevron-up' : 'pi pi-user-plus'"
                        rounded 
                        :severity="isCardVisible ? 'warning' : 'info'" 
                        @click="toggleIsCardVisible"
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
                currentPageReportTemplate="ສະແດງ {first} ຫາ {last} ຈາກ {totalRecords} ແຖວ"
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
                                    placeholder="ກະລຸນາເລືອກກ່ອນ..." 
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
                                    placeholder="ຄົ້ນຫາ ( ຊື່, ເຈົ້າຂອງ ) ..."
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
                                    placeholder="ຄົ້ນຫາ ດ້ວຍເບີໂທລະສັບ..."
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
                <Column field="id" header="ລຳດັບ">
                    <template #body="item">
                        {{ item.index + 1 }}
                    </template>
                </Column>
                <Column field="country.name" header="ປະເທດ"></Column>
                <Column field="name" header="ຊື່ລູກຄ້າ"></Column>
                <Column field="owner" header="ເຈົ້າຂອງ"></Column>
                <Column field="address" header="ທີ່ຢູ່"></Column>
                <Column field="tel" header="ເບີໂທ"></Column>
                <Column field="email" header="ອີເມວ"></Column>
                <Column field="status" header="ສະຖານະ"></Column>
                <Column field="created" header="ວັນທີສ້າງ"></Column>
                <Column field="updated" header="ອັບເດດລ່າສຸດ"></Column>
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
    import DataTable, { type DataTablePageEvent } from 'primevue/datatable';
    import Column from 'primevue/column';
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';
    import { customerStore } from '../stores/customer.store';
    import { countryStore } from '../../../address/stores/country.store';
    import { useToast } from "primevue/usetoast";
    import { useRoute, useRouter } from 'vue-router';
    import { useConfirm } from "primevue/useconfirm";
    import Dropdown from 'primevue/dropdown';
    import { CustomerEntity } from '../entities/customer.entity';
    import Fieldset from 'primevue/fieldset';
    import MyInputText from '../../../../components/customComponents/FormInputText.vue';
    import { useForm } from 'vee-validate';
    import { customerSchema } from '../schema/customer.shema';

    const toast = useToast();
    const confirm = useConfirm();

    const isEditing = ref(false);   
    const autoFocusCursor = ref();
    const isCardVisible = ref(false);
    const { push } = useRouter()
    const { query } = useRoute()

    const { register, update, remove, getAll, form, state, setStateFilter } = customerStore();
    const { getAll: getAllCountry, state: stateCountry, setStateFilter: setStateCountyFilter } = countryStore();


    const { handleSubmit, handleReset, setFieldValue } = useForm<any>({
        validationSchema: customerSchema
    })

    const onUpdate = handleSubmit(async(values) => {
        form.id = values.id;
        form.name = values.name;
        form.owner = values.owner;
        form.address = values.address;
        form.tel = values.tel;

        await update();
        
        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
            await handleReset();
            await fetchCountry();
            isCardVisible.value = false;
        }
    })

    const onSubmit = handleSubmit(async(values) => {
        form.name = values.name;
        form.owner = values.owner;
        form.address = values.address;
        form.email = values.email;
        form.tel = values.tel;
        form.password = values.password;
        form.password_confirmation = values.password_confirmation;

        await register();
        
        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
            await handleReset();
            await fetchCountry();
            isCardVisible.value = false;
        }
    })

    const fetchCountry = async () => {
        setStateCountyFilter.limit = 200;
        await getAllCountry();
        form.country_id = stateCountry.data.props.length > 0 ? stateCountry.data.props[0].id : undefined;
    }

    const toggleIsCardVisible = async () => {
        if (isCardVisible.value) {
            isCardVisible.value = false;
        } else {
            isCardVisible.value = true;
        }
    }

    const clearForm = async () => {
        state.btnLoading = false;
        await handleReset(); 
        await fetchCountry();
        state.btnLoading = false;
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

    const editItem = async (value: CustomerEntity) => {
        setFieldValue('id', value.id);
        setFieldValue('name', value.name);
        setFieldValue('owner', value.owner);
        setFieldValue('address', value.address);
        setFieldValue('email', value.email);
        setFieldValue('tel', value.tel);
        form.country_id = value.country?.id

        isEditing.value = true;
        isCardVisible.value = true;
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

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: 'ສຳເລັດເເລ້ວ.', detail: 'ການດຳເນີນສຳເລັດເເລ້ວ', life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: 'ເກີດຂໍ້ຜິດພາດ.', detail: `${state.error}`, life: 3000 });
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
        await fetchData();
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