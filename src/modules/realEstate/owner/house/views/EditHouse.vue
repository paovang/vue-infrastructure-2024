<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 style="font-weight: bold; font-size: 20px;" class="arrow-left" @click="goBack()">
                    <i class="pi pi-arrow-left" style="color: green"></i>
                    {{ $t('messages.form_register') }}
                </h2>
            </span>
        </div>
        <br/>
        <Divider/>
        <form @submit.prevent="onSubmit()" class="flex flex-column gap-3 h-full">
            <div class="columns is-12 is-multiline" style="margin-top: 20px;">
                <div class="column is-mobile-12 is-2">
                    <label>
                        {{ $t('messages.realestate_type') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        name="real_estate_type"
                        style="margin-top: 8px;"
                        v-model="form.real_estate_type_id" 
                        :options="realestateType.props" 
                        optionLabel="name" 
                        :placeholder="$t('placeholder.dropdownSelect')" 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <label>
                        {{ $t('messages.service_model') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.service_model" 
                        :options="listServiceModel" 
                        optionLabel="name" 
                        :placeholder="$t('placeholder.dropdownSelect')" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        class="w-full"
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <label>
                        {{ $t('messages.room_type') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.room_type" 
                        :options="roomTypes" 
                        optionLabel="name" 
                        :placeholder="$t('placeholder.dropdownSelect')" 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="name" 
                        :label="$t('messages.real_estate_name')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <!-- <div class="column is-mobile-12 is-2">
                    <label>
                        {{ $t('messages.province') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.province_id" 
                        :options="stateProvince.data.props" 
                        optionLabel="name" 
                        :placeholder="$t('placeholder.dropdownSelect')" 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        filter
                        @change="filterDistrictByid(form.province_id)"
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <label>
                        {{ $t('messages.district') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.district_id" 
                        :options="stateDistrict.data.props" 
                        optionLabel="name" 
                        :placeholder="$t('placeholder.dropdownSelect')" 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        filter
                    />
                </div> -->
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="agent_name" 
                        :label="$t('messages.name')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="owner_name" 
                        :label="$t('messages.owner')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-4 set-margin-top">
                    <my-input-text 
                        name="village" 
                        :label="$t('messages.address')" 
                        required 
                        :placeholder="$t('placeholder.inputText')" 
                        class="h-full" 
                        :value="form.village"
                    />
                </div>
                <!-- <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="zipcode" 
                        :label="$t('messages.zip_code')" 
                        required 
                        :placeholder="$t('placeholder.inputText')" 
                        class="h-full" 
                        :value="form.zip_code"
                    />
                </div> -->
                <div class="column is-mobile-12 is-2 set-margin-top">
                    <my-input-text 
                        name="bed" 
                        :label="$t('messages.total_bed')"  
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-2 set-margin-top">
                    <my-input-text 
                        name="bath" 
                        :label="$t('messages.total_bath')"  
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-2 set-margin-top">
                    <my-input-text 
                        name="long" 
                        :label="$t('messages.long')" 
                        required 
                        :placeholder="$t('placeholder.inputText')" 
                        class="h-full" 
                        :value="form.long"
                    />
                </div>
                <div class="column is-mobile-12 is-2 set-margin-top">
                    <my-input-text 
                        name="wide" 
                        :label="$t('messages.wide')" 
                        required 
                        :placeholder="$t('placeholder.inputText')" 
                        class="h-full" 
                        :value="form.wide"
                    />
                </div>
                <div class="column is-mobile-12 is-2 set-margin-top">
                    <my-input-text 
                        name="build_in" 
                        :label="$t('messages.build_in')"  
                        required 
                        :placeholder="$t('placeholder.build_in')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-2 set-margin-top">
                    <my-input-text 
                        name="garage" 
                        :label="$t('messages.garage')"  
                        required 
                        :placeholder="$t('placeholder.inputTextGarage')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-8 set-margin-top">
                    <my-input-text 
                        name="location" 
                        :label="$t('messages.location')" 
                        required 
                        :placeholder="$t('placeholder.inputText')" 
                        class="h-full" 
                        :value="form.location"
                    />
                </div>
                <div class="column is-mobile-12 is-12 set-margin-top">
                    <my-input-text-area 
                        name="remark" 
                        :label="$t('messages.details')" 
                        required 
                        :placeholder="$t('placeholder.inputTextDetails')" 
                        class="h-full" 
                        :value="form.remark"
                    />
                </div>

                <div class="column is-12">
                    <Panel :header="$t('messages.setting_price_for_rent')">
                        <div class="columns is-12" v-for="(input, index) in form.prices" :key="index">
                            <div class="column is-3">
                                <label>
                                    {{ $t('messages.service_model') }}
                                    <span class="text-red-500"> *</span>
                                </label>
                                <Dropdown 
                                    v-model="input.unit_price" 
                                    :options="listServices" 
                                    optionLabel="name" 
                                    :placeholder="$t('placeholder.dropdownSelect')"  
                                    class="w-full" 
                                    optionValue="id"
                                    :highlightOnSelect="true" 
                                    required
                                />
                            </div>
                            <div class="column is-3">
                                <label>
                                    {{ $t('messages.price') }}
                                    <span class="text-red-500"> *</span>
                                </label>
                                <input-number 
                                    v-model="(input.price as number)" 
                                    :placeholder="$t('placeholder.inputText')"  
                                    required 
                                    style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'; width: 100% !important;" 
                                />
                            </div>
                            <div class="column is-5" v-if="form.service_model === 'rent'">
                                <label>
                                    {{ $t('messages.details') }}
                                </label>
                                <input 
                                    name="detail"
                                    type="text" 
                                    class="input" 
                                    v-model="input.detail" 
                                    :placeholder="$t('placeholder.inputText')"  
                                    style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'" 
                                />
                            </div>
                            <div class="column is-5" v-if="form.service_model === 'sale'">
                                <label>
                                    {{ $t('messages.est_m') }}
                                </label>
                                <input-number 
                                    v-model="(input.est_m as number)" 
                                    :placeholder="$t('placeholder.inputText')"  
                                    required 
                                    style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'; width: 100% !important;" 
                                />
                            </div>
                            <div class="column is-1">
                                <a @click="removeInput(index)" class="button is-danger remove-btn" v-if="index > 0" style="margin-top: 22px;">
                                    <i class="pi pi-times-circle"></i>
                                </a>
                            </div>
                        </div>
                        <div class="column is-mobile-12 is-12">
                            <Button 
                                @click="addInput" 
                                class="button is-info" 
                                :disabled="!isCheckForRent"
                                style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'" 
                            >
                                {{ $t('button.add_item') }}  
                            </Button>
                        </div>
                    </Panel>
                </div>

                <div class="column is-12">
                    <Panel :header="$t('messages.profile')">
                        <div class="columns is-12 is-multiline">
                            <div class="column is-mobile-12 is-3">
                                <div class="card" style="padding: 0rem !important;">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img :src="isShowFileImage" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="content" style="display: flex; justify-content: center">
                                        <span style="padding: 10px !important;">
                                        <Button 
                                            icon="pi pi-pencil" 
                                            severity="warning" 
                                            rounded 
                                            @click="handleClick"
                                            style="color: white;" 
                                        />
                                        <input type="file" id="fileInput" style="display: none" @change="handleFileChange">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Panel>
                </div>

                <div class="column is-12">
                    <Panel :header="$t('messages.profile_and_gallery')">
                        <div class="columns is-12 is-multiline">
                            <div class="column is-mobile-12 is-3" v-for="(item, index) in isShowFileGallery" :key="index">
                                <div class="card" style="padding: 0rem !important;">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img :src="item?.image" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="content" style="display: flex; justify-content: center">
                                       <span style="padding: 10px !important;">
                                        <Button 
                                            icon="pi pi-trash" 
                                            severity="danger" 
                                            rounded 
                                            @click="deleteImageGallery(item.id)" 
                                        />
                                        <span style="margin-left: 10px;"></span> 
                                        <Button 
                                            icon="pi pi-pencil" 
                                            severity="warning" 
                                            rounded 
                                            @click="handleClickGalleryFile(item.id, 'update')" 
                                            style="color: white;" 
                                        />
                                       </span>
                                       <input type="file" id="updateGalleryInput" style="display: none" @change="updateHandleFileGalleryChange">
                                       <input type="file" id="addGalleryInput" multiple style="display: none" @change="addHandleFileGalleryChange">
                                    </div>
                                </div>
                            </div>
                            <Divider/>
                            <div class="column is-mobile-12 is-12" style="text-align: right;">
                                <Button icon="pi pi-plus-circle"   @click="handleClickGalleryFile((route.params.id as string), 'add')" />
                            </div>
                            <Divider/>
                            <div class="column is-mobile-12 is-12" v-if="invalidFiles.length > 0">
                            <p style="color: red" v-for="(item, index) in invalidFiles" :key="index">
                                {{ index+1 }}. {{ item }}
                            </p>
                        </div>
                        </div>
                    </Panel>
                </div>
                
                
                <div class="column is-mobile-12 is-12 text-right">
                    <Button 
                        style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'"
                        type="submit"
                        severity="info" 
                        :loading="state.btnLoading"
                        :disabled="validationPermissions(GET_PERMISSIONS.REAL_ESTATE.UPDATE)"
                    >
                        <i class="pi pi-save" style="margin-right: 8px;"></i>
                        {{ $t('button.edit_data') }}
                    </Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import MyInputText from '@/components/customComponents/FormInputText.vue';
    import MyInputTextArea from '@/components/customComponents/FormEditTextArea.vue';
    import Dropdown from 'primevue/dropdown';
    import { ref, onMounted } from 'vue';
    import Button from 'primevue/button';
    import InputNumber from 'primevue/inputnumber';
    import { useForm } from 'vee-validate';
    import { houseSchema } from '../schema/house.schema';
    import Panel from 'primevue/panel';
    import Divider from 'primevue/divider';
    import { realEstateServiceStore } from '@/modules/realEstate/rentHouse/memberServices/stores/real-estate-service.store';
    import { houseStore } from '@/modules/realEstate/owner/house/stores/house.store';
    // import { provinceStore } from '@/modules/realEstate/address/stores/province.store';
    // import { districtStore } from '@/modules/realEstate/address/stores/district.store';
    import { useRouter, useRoute } from 'vue-router';
    import { useToast } from "primevue/usetoast";
    import axios from 'axios';
    import { useI18n } from 'vue-i18n';
    import { isValidFileSize, validFileTypesRealEstate } from '@/common/utils/validation.file';
    import { showNotificationToast } from '@/common/utils/toast';
    import { GET_PERMISSIONS } from '@/common/utils/const';
    import { validationPermissions } from '@/common/utils/validation-permissions';

    const { t } = useI18n();
    const toast = useToast();
    const router = useRouter();
    const route = useRoute();

    const { form, state, update, getOne, houseGetByOne, deleteGallery, updateGallery, addGallery } = houseStore();
    const { getOne: getOneRealEstateService, realestateType } = realEstateServiceStore();
    // const { getAll: getAllProvince, state: stateProvince, setStateFilter: setStateProvinceFilter } = provinceStore();
    // const { getAll: getAllDistrict, state: stateDistrict, setStateFilter: setStateDistrictFilter } = districtStore();

    const isShowFileImage = ref();
    const selectedImage = ref();
    
    const isShowFileGallery = ref([{
        id: '',
        image: ''
    }]);
    const selectedGallery = ref();
    const isMethod = ref();
    const accessToken = localStorage.getItem('token');


    const goBack = async () => {
        router.push({ name: 'owner.house'});
    }
    
    const addInput = async () => {
        if (form.prices) {
            if (form.prices.length > 2) {
                toast.add({ severity: 'error', summary: t('toast.summary.must_be_length_three'), detail: t('toast.detail.cancel_delete'), life: 3000 });
            } else {
                form.prices.push({ price: '', unit_price: '', detail: '' });
            }
        }
    }

    const removeInput  = async (index: any) => {
        if (form.prices) {
            form.prices.splice(index, 1);
        }
    }

    const translatedErrorMessages = {
        village: t('placeholder.inputText'),
        location: t('placeholder.inputText'),
        name: t('placeholder.inputText'),
        wide: t('placeholder.inputText')
    }

    const { handleSubmit, setFieldValue } = useForm<any>({
        validationSchema: houseSchema(translatedErrorMessages)
    })

    const servicemodels = ref([
        { id: 'sale', name: t('messages.service_sale') },
        { id: 'rent', name: t('messages.service_rent') },
    ]);
    
    const roomTypes = ref([
        { id: 'air', name: t('messages.air') },
        { id: 'fan', name: t('messages.fan') },
        { id: 'no', name: t('messages.none') },
    ]);

    const unitPrices = ref([
        { id: 'sale', name: t('messages.service_sale') },
        { id: 'day', name: t('messages.service_daily') },
        { id: 'month', name: t('messages.service_monthly') },
        { id: 'year', name: t('messages.service_yearly') },
    ]);

    const isCheckForRent = ref<boolean>(false);
    const listServices = ref();
    const listServiceModel = ref();

    onMounted(async() => {
        await initComponent();
    })

    const initComponent = async () => {
        const id = Number(route.params.id);
        state.btnLoading = true;
        await getOne(id);
        await fetchAll();
        state.btnLoading = false;

        if (form.service_model === 'rent') {
            isCheckForRent.value = true;
            listServices.value = unitPrices.value.slice(1, 4);
            listServiceModel.value = servicemodels.value.splice(1, 1);
        } else {
            isCheckForRent.value = false;
            listServices.value = unitPrices.value.slice(0, 1);
            listServiceModel.value = servicemodels.value.splice(0, 1);
        }
    }

    const fetchAll = async() => {
        const house = houseGetByOne.data.props;

        setFieldValue('village', house.village);
        setFieldValue('agent_name', house.agent_name);
        setFieldValue('owner_name', house.owner_name);
        setFieldValue('build_in', house.build_in);
        setFieldValue('wide', house.wide);
        setFieldValue('long', house.long);
        setFieldValue('location', house.location);
        setFieldValue('name', house.name);
        setFieldValue('bed', house.total_bed);
        setFieldValue('bath', house.total_bath);
        setFieldValue('garage', house.garage);

        form.room_type = house.room_type;
        form.service_model = house.service_model;
        form.remark = house.remark;
        form.prices = house.price;

        isShowFileImage.value = house.image;
        isShowFileGallery.value = house.gallery;
        await getOneRealEstateService();

        form.real_estate_type_id = house.real_estate_type ? house.real_estate_type.id : undefined;
        form.province_id = house.province ? house.province.id : undefined;
    }

    const onSubmit = handleSubmit(async (value) => {
        form.id = String(route.params.id);
        form.village = value.village;
        form.name = value.name;
        form.agent_name = value.agent_name;
        form.owner_name = value.owner_name;
        form.build_in = value.build_in;
        form.wide = value.wide;
        form.long = value.long;
        form.total_bed = value.bed;
        form.total_bath = value.bath;
        form.garage = value.garage;
        form.name = value.name;
        form.remark = value.remark;
        form.location = value.location;
        form.image = selectedImage.value;

        await update();

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await clearAllFileUpload();
            await initComponent();
            await showToastSuccess();
        }
    })

    const handleClick = () => {
        const input = document.getElementById('fileInput') as HTMLInputElement;
        input.click();
    };

    const handleFileChange = async (event: Event) => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];

        if (file) {
            if (! await validFileTypesRealEstate(file)) {
                await showNotificationToast({ toast, error: 'error', summary: t("toast.summary.error"), detail: t("toast.summary.real_estate_profile_valid_file_mimes") });
                target.value = '';
                selectedImage.value = '';
                return;
            }
            if (! await isValidFileSize(file)) {
                await showNotificationToast({ toast, error: 'error', summary: t("toast.summary.error"), detail: t("toast.summary.real_estate_profile_valid_file_size") });
                target.value = '';
                selectedImage.value = '';
                return;
            }

            const image = new Image();
            image.src = URL.createObjectURL(file);
            image.onload = async () => {
                const width = image.width;
                const height = image.height;

                if (width > minWidth.value || height > minHeight.value) {
                    selectedImage.value = '';
                    target.value = '';
                    await showDimensions(t('messages.dimensions'));
                } else {
                    await uploadFileImage(file, 'image');
                    await onSubmit();
                }
            }
        }
    }


    const handleClickGalleryFile = (id: string, method: string) => {
        form.id = id;
        isMethod.value = method;

        if (isMethod.value === 'update') {
            const input = document.getElementById('updateGalleryInput') as HTMLInputElement;
            input.click();
            invalidFiles.value = [];
        } else {
            const input = document.getElementById('addGalleryInput') as HTMLInputElement;
            input.click();
            invalidFiles.value = [];
        }
    };

    const deleteImageGallery = async (id: string) => {
        await deleteGallery(id);

        if (state.error) {
                await showWarningValidateBackend();
        } else {
            await clearAllFileUpload();
            await initComponent();
            await showToastSuccess();
        }
    }

    const updateHandleFileGalleryChange = async (event: any) => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];
        if (file) {
            if (! await validFileTypesRealEstate(file)) {
                await showNotificationToast({ toast, error: 'error', summary: t("toast.summary.error"), detail: t("toast.summary.real_estate_profile_valid_file_mimes") });
                target.value = '';
                isShowFileImage.value = "";
                selectedImage.value = '';
                return;
            }
            if (! await isValidFileSize(file)) {
                await showNotificationToast({ toast, error: 'error', summary: t("toast.summary.error"), detail: t("toast.summary.real_estate_profile_valid_file_size") });
                target.value = '';
                isShowFileImage.value = "";
                selectedImage.value = '';
                return;
            }

            const image = new Image();
            image.src = URL.createObjectURL(file);
            image.onload = async () => {
                const width = image.width;
                const height = image.height;

                if (width > minWidth.value || height > minHeight.value) {
                    selectedGallery.value = "";
                    target.value = '';
                    await showDimensions(t('messages.dimensions'));
                } else {
                    await uploadFileImage(file, 'gallery');
                    form.gallery = selectedGallery.value;
                    await updateGallery();

                    if (state.error) {
                        await showWarningValidateBackend();
                    } else {
                        await clearAllFileUpload();
                        await initComponent();
                        await showToastSuccess();
                    }
                }
            }
        }
    }

    const invalidFiles = ref<string[]>([]);
    const minWidth = ref<number>(2000);
    const minHeight = ref<number>(1900);

    const addHandleFileGalleryChange = async (event: any) => {
        const target = event.target as HTMLInputElement;
        const files = target.files;
        const maxSize = 1 * 1024 * 1024;  // 1 MB
        const totalMaxSize = 5 * 1024 * 1024;  // 5 MB


        if (files) {
            let totalSize = 0;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                totalSize += file.size;

                try {
                    await validateFile(file, maxSize);
                } catch (error: any) {
                    invalidFiles.value.push(error);
                }
            }

            if (totalSize > totalMaxSize) {
                invalidFiles.value.push(t('toast.summary.maximum_allowed_size_5MB'));
                target.value = "";
                return;
            }

            if (invalidFiles.value.length <= 0) {
                await uploadFileGallery(files);
                form.gallery = selectedGallery.value;
                await addGallery();
            

                if (state.error) {
                    await showWarningValidateBackend();
                } else {
                    await clearAllFileUpload();
                    await initComponent();
                    await showToastSuccess();
                }
            } else {
                target.value = "";
            }
        }
    }

    const validateFile = (file: any, maxSize: number) => {
        return new Promise((resolve, reject) => {
            if (file.size > maxSize) {
                reject(`${file.name}` + ' => ' + t('toast.summary.real_estate_profile_valid_file_size_1MB'));
            } else {
                const allowedTypes = ['image/jpeg', 'image/jpg'];

                if (!allowedTypes.includes(file.type)) {
                    reject(`${file.name}` + ' => ' + t('toast.summary.real_estate_profile_valid_file_mimes'));
                } else {
                    const image = new Image();
                    image.src = URL.createObjectURL(file);

                    image.onload = () => {
                        const width = image.width;
                        const height = image.height;

                        if (width > minWidth.value || height > minHeight.value) {
                            reject(`${file.name}` + ' => ' + t('messages.dimensions'));
                        } else {
                            resolve('');
                        }
                    }

                    image.onerror = () => {
                        reject(`Error loading image ${file.name}.`);
                    }
                }
            }
        })
    }


    const showDimensions = (erorr: string) => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: erorr, life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }

    const clearAllFileUpload = async () => {
        isShowFileImage.value = '';
        selectedImage.value = '';

        selectedGallery.value = '';

        const inputFile = document.getElementById('fileInput') as HTMLInputElement;
        inputFile.value = '';

        const updateInputGallery = document.getElementById('updateGalleryInput') as HTMLInputElement;
        updateInputGallery.value = '';

        const addInputGallery = document.getElementById('addGalleryInput') as HTMLInputElement;
        addInputGallery.value = '';
    }

    const uploadFileGallery = async (files: any) => {
        state.btnLoading = true;
        try {
            let formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append('files[]', files[i]);
            }

            const response = await axios.post(import.meta.env.VITE_APP_BASE_API_URL + 'upload/multiple/files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            const gallery: { image: string }[] = response.data.filename.map((filename: string) => ({
                image: `${filename}`
            }));

            selectedGallery.value = gallery;
            state.btnLoading = false;
        } catch (error) {
            console.error('Upload failed:', error);
        }
    }

    const uploadFileImage = async (file: any, type: string) => {
        state.btnLoading = true;
        try {
            let formData = new FormData();
            formData.append('file', file);

            const response = await axios.post(import.meta.env.VITE_APP_BASE_API_URL + 'upload_file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (type === 'image') {
                selectedImage.value = response.data?.filename;
            } else {
                selectedGallery.value = response.data?.filename;
            }
            
            state.btnLoading = false;
        } catch (error) {
            console.error('Upload failed:', error);
        }
    }
</script>

<style scoped>
    @import 'bulma/css/bulma.css';

    .p-badge.p-badge-warning {
        margin-left: 40px !important;
    }
    .upload-box {
        position: relative;
        display: block;
        height: 45px;
        background-color: #fff;
        padding: 10px;
    }

    .arrow-left:hover {
        cursor: pointer;
        color: green;
    }
    .card-image:hover {
        cursor: pointer;
    }
    .card-image img{
        object-fit: cover;
    }
    .upload-box:hover {
        cursor: pointer;
    }
    .set-margin-top {
        margin-top: -20px;
    }
</style>