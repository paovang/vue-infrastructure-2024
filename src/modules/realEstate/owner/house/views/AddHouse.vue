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
                    <!-- <small class="p-error">{{ errors.real_estate_type }}</small> -->
                </div>
                <div class="column is-mobile-12 is-2">
                    <label>
                        {{ $t('messages.service_model') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.service_model" 
                        :options="servicemodels" 
                        optionLabel="name" 
                        :placeholder="$t('placeholder.dropdownSelect')" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        class="w-full" 
                        @change="checkServiceModel(form.service_model)"
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
                        :label="$t('messages.name')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-2">
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
                </div>
                <div class="column is-mobile-12 is-2 set-margin-top">
                    <my-input-text 
                        name="village" 
                        :label="$t('messages.village')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-2 set-margin-top">
                    <my-input-text 
                        name="zipcode" 
                        :label="$t('messages.zip_code')" 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
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
                        name="wide" 
                        :label="$t('messages.wide')"  
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-2 set-margin-top">
                    <my-input-text 
                        name="long" 
                        :label="$t('messages.long')"  
                        :placeholder="$t('placeholder.inputText')"  
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
                <div class="column is-mobile-12 is-10 set-margin-top">
                    <my-input-text 
                        name="location" 
                        :label="$t('messages.location')" 
                        required 
                        :placeholder="$t('placeholder.inputTextLocation')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-12 set-margin-top">
                    <my-input-text-area 
                        name="remark" 
                        :label="$t('messages.details')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                    <!-- <label>
                        ລາຍລະອຽດ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Editor editorStyle="height: 320px" /> -->
                </div>

                <div class="column is-12">
                    <Panel :header="$t('messages.setting_price_for_rent')">
                        <div class="columns is-12" v-for="(input, index) in createInputs" :key="index">
                            <div class="column is-3">
                                <label>
                                    {{ $t('messages.service_model') }}
                                    <span class="text-red-500"> *</span>
                                </label>
                                <Dropdown 
                                    v-model="input.unit_price" 
                                    :options="unitPrices" 
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
                                    placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                                    required 
                                    style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'; width: 100% !important;" 
                                />
                            </div>
                            <div class="column is-5">
                                <label>
                                    {{ $t('messages.est_m') }}
                                </label>
                                <input 
                                    name="detail"
                                    type="text" 
                                    class="input" 
                                    v-model="input.detail" 
                                    placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                                    style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'" 
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
                                class="button is-primary" 
                                style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'" 
                                :disabled="!isCheckForRent"
                            >
                                {{ $t('button.add_item') }}
                            </Button>
                        </div>
                    </Panel>
                </div>
                <div class="column is-12">
                    <Panel :header="$t('messages.profile_and_gallery')">
                        <div class="column is-mobile-12 is-12">
                            <label>
                                {{ $t('messages.profile') }}
                                <span class="text-red-500"> *</span>
                            </label>
                            <label 
                                class="upload-box" 
                                @click="handleClick"
                                :style="{ border: isShowFileImage ? '1px dashed #029217' : '1px dashed red' }"
                            >
                                <div v-if="!isShowFileImage">
                                    {{ $t('placeholder.inputFile') }}
                                </div>
                                <div v-else style="color: #029217">
                                    {{ isShowFileImage }}
                                </div>
                            </label>
                            <input type="file" id="fileInput" style="display: none" @change="handleFileChange">
                        </div>
                        <Divider/>
                        <div class="column is-mobile-12 is-12">
                            <label>
                                {{ $t('messages.gallery') }}
                                <span class="text-red-500"> *</span>
                            </label>
                            <label 
                                class="upload-box" 
                                @click="handleClickGalleryFile"
                                :style="{ border: isShowFileGallery ? '1px dashed #029217' : '1px dashed red' }"
                            >
                                <div v-if="!isShowFileGallery">
                                    {{ $t('placeholder.inputFile') }}
                                </div>
                                <div v-else style="color: #029217">
                                    {{ isShowFileGallery }}
                                </div>
                            </label>
                            <input type="file" id="galleryInput" multiple style="display: none" @change="handleFileChangeGallery">
                        </div>
                    </Panel>
                </div>
                
                <div class="column is-mobile-12 is-12 text-right">
                    <Button 
                        style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'"
                        type="submit"
                        severity="info" 
                        :loading="state.btnLoading"
                    >
                        <i class="pi pi-save" style="margin-right: 8px;"></i>
                        {{ $t('button.save_data') }}
                    </Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import MyInputText from '@/components/customComponents/FormInputText.vue';
    import MyInputTextArea from '@/components/customComponents/FormTextArea.vue';
    import Dropdown from 'primevue/dropdown';
    import { ref, onMounted } from 'vue';
    import Button from 'primevue/button';
    // import Editor from 'primevue/editor';
    import InputNumber from 'primevue/inputnumber'
    import { useForm } from 'vee-validate';
    import { houseSchema } from '../schema/house.schema';
    import axios from 'axios';
    import Panel from 'primevue/panel';
    import Divider from 'primevue/divider';
    import { realEstateServiceStore } from '@/modules/realEstate/rentHouse/memberServices/stores/real-estate-service.store';
    import { houseStore } from '@/modules/realEstate/owner/house/stores/house.store'
    import { provinceStore } from '@/modules/realEstate/address/stores/province.store';
    import { districtStore } from '@/modules/realEstate/address/stores/district.store';
    import { useToast } from "primevue/usetoast";
    import { HouseEntity } from '../entities/house.entity';
    import { useConfirm } from "primevue/useconfirm";
    import { useRouter } from 'vue-router';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
    const toast = useToast();
    const confirm = useConfirm();
    const router = useRouter();

    const { form, state, register, } = houseStore();
    const { getOne, realestateType } = realEstateServiceStore();
    const { getAll: getAllProvince, state: stateProvince, setStateFilter: setStateProvinceFilter } = provinceStore();
    const { getAll: getAllDistrict, state: stateDistrict, setStateFilter: setStateDistrictFilter } = districtStore();

    const isShowFileImage = ref<string | null>(null);
    const isShowFileGallery = ref<string>();
    
    const goBack = async () => {
        router.push({ name: 'owner.house'});
    }

    const handleClick = () => {
        const input = document.getElementById('fileInput') as HTMLInputElement;
        input.click();
    };

    const handleFileChange = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        isShowFileImage.value = t('uploadFile.uploading');
        await uploadFileImage(file);
        isShowFileImage.value = t('uploadFile.upload_success');
      }
    };

    const handleClickGalleryFile = () => {
        const input = document.getElementById('galleryInput') as HTMLInputElement;
        input.click();
    };

    const handleFileChangeGallery = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const files = target.files;
      if (files) {
        isShowFileGallery.value = t('uploadFile.uploading') + files.length;
        await uploadFileGallery(files);
        isShowFileGallery.value = t('uploadFile.upload_success') + '(' + files.length + ' ' + t('uploadFile.file') + ')';
      }
    };


    const createInputs = ref<HouseEntity['prices']>([
        { price: '', unit_price: '', detail: '' }
    ]);


    const addInput = async () => {
        if (createInputs.value) {
            if (createInputs.value?.length > 2) {
                toast.add({ severity: 'error', summary: t('toast.summary.must_be_length_three'), detail: t('toast.detail.cancel_delete'), life: 3000 });
            } else {
                createInputs.value.push({ price: '', unit_price: '', detail: '' });
            }
        }
    }

    const removeInput  = async (index: any) => {
        if (createInputs.value) {
            createInputs.value.splice(index, 1);
        }
    }

    const isCheckForRent = ref<boolean>(false);
    const checkServiceModel = async (value: any) => {
        if (value === 'rent') {
             // Find index of item with id 'sale'
            // const index = unitPrices.value.findIndex(unit => unit.id === 'sale');
            // // If found, remove it from unitPrices
            // if (index !== -1) {
            //     unitPrices.value.splice(index, 1);
            // }
            isCheckForRent.value = true;
        } else {
            isCheckForRent.value = false;
        }
    }

    const { handleSubmit } = useForm<any>({
        validationSchema: houseSchema
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
        { id: 'sale', name: 'ບໍລິການຂາຍ' },
        { id: 'day', name: 'ບໍລິການ ເຊົ່າເປັນມື້' },
        { id: 'month', name: 'ບໍລິການ ເຊົ່າເປັນເດືອນ' },
        { id: 'year', name: 'ບໍລິການ ເຊົ່າເປັນປີ' },
    ]);

    const accessToken = localStorage.getItem('token');

    const selectedGallery = ref();
    const selectedImage = ref();

    onMounted(async() => {
        await fetchAll();
    })

    const fetchAll = async() => {
        form.room_type = 'air';
        form.service_model = 'sale';
        
        setStateProvinceFilter.limit = 1000;
        await getAllProvince();
        await getOne();

        form.real_estate_type_id = realestateType.props.length > 0 ? realestateType.props[0].id : undefined;
        form.province_id = stateProvince.data.props.length > 0 ? stateProvince.data.props[0].id : undefined;

        if (setStateDistrictFilter.filter) {
            setStateDistrictFilter.filter.province_id = form.province_id;
            await getAllDistrict();
            await selectedDistrict();
        }
    }

    const filterDistrictByid = async (id: any) => {
        if (setStateDistrictFilter.filter) {
            setStateDistrictFilter.filter.province_id = id;
            await getAllDistrict();
            await selectedDistrict();
        }
    }

    const selectedDistrict = async () => {
        form.district_id = stateDistrict.data.props.length > 0 ? stateDistrict.data.props[0].id : undefined;
    }

    const onSubmit = handleSubmit(async (value) => {
        if(!form.district_id) {
            await showErrorValidate(t('placeholder.dropdownSelect') + ' ' + t('messages.district'))
        } else if(!selectedImage.value) {
            await showErrorValidate(t('placeholder.dropdownSelect') + ' ' + t('messages.image'))
        } else if(!selectedGallery.value) {
            await showErrorValidate(t('placeholder.dropdownSelect') + ' ' + t('messages.gallery'))
        } else {
            form.village = value.village;
            form.zip_code = value.zipcode;
            form.wide = value.wide;
            form.long = value.long;
            form.total_bath = value.bath;
            form.total_bed = value.bed;
            form.garage = value.garage;
            form.name = value.name;
            form.remark = value.remark;
            form.location = value.location;
            form.prices = createInputs.value;
            form.image = selectedImage.value;
            form.gallery = selectedGallery.value;

            await register();

            if (state.error) {
                await showWarningValidateBackend();
            } else {
                await confirmDuplicate();
            }   
        }
    })

    const clearAllFileUpload = async () => {
        isShowFileImage.value = '';
        isShowFileGallery.value = '';
        selectedImage.value = '';
        selectedGallery.value = '';

        const inputFile = document.getElementById('fileInput') as HTMLInputElement;
        inputFile.value = '';

        const inputFileGallery = document.getElementById('galleryInput') as HTMLInputElement;
        inputFileGallery.value = '';
    }

    const uploadFileImage = async (file: any) => {
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

            selectedImage.value = response.data?.filename;
            state.btnLoading = false;
        } catch (error) {
            console.error('Upload failed:', error);
        }
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

    const showErrorValidate = (erorr: string) => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: erorr, life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const confirmDuplicate = async () => {
        confirm.require({
            message: t('confirmDuplicate.message'),
            header: t('confirmDuplicate.header'),
            rejectLabel: t('confirmDuplicate.rejectLabel'),
            acceptLabel: t('confirmDuplicate.acceptLabel'),
            rejectClass: 'p-button-danger',
            acceptClass: 'p-button-info',
            accept: async () => {
                await clearAllFileUpload();
                toast.add({ severity: 'success', summary: t('toast.summary.duplicate'), detail: t('toast.detail.success_duplicate'), life: 3000 });
            },
            reject: async () => {
                window.location.reload();
                toast.add({ severity: 'error', summary: t('toast.summary.not_duplicate'), detail: t('toast.detail.cancel_duplicate'), life: 3000 });
            }
        });
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

    .set-margin-top {
        margin-top: -20px;
    }
</style>