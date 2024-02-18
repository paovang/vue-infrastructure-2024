<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 style="font-weight: bold; font-size: 20px;" class="arrow-left" @click="goBack()">
                    <i class="pi pi-arrow-left" style="color: green"></i>
                    ຟອມລົງທະບຽນຂໍ້ມູນ
                </h2>
            </span>
        </div>
        <br/>
        <Divider/>
        <form @submit.prevent="onSubmit()" class="flex flex-column gap-3 h-full">
            <div class="columns is-12 is-multiline" style="margin-top: 20px;">
                <div class="column is-mobile-12 is-2">
                    <label>
                        ປະເພດ ບໍລິການ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        name="real_estate_type"
                        style="margin-top: 8px;"
                        v-model="form.real_estate_type_id" 
                        :options="realestateType.props" 
                        optionLabel="name" 
                        placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                    />
                    <!-- <small class="p-error">{{ errors.real_estate_type }}</small> -->
                </div>
                <div class="column is-mobile-12 is-2">
                    <label>
                        ຮູບເເບບ ບໍລິການ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.service_model" 
                        :options="servicemodels" 
                        optionLabel="name" 
                        placeholder="ກະລຸນາເລືອກ" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        class="w-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <label>
                        ປະເພດຫ້ອງ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.room_type" 
                        :options="roomTypes" 
                        optionLabel="name" 
                        placeholder="ກະລຸນາເລືອກ" 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <label>
                        ເເຂວງ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.province_id" 
                        :options="stateProvince.data.props" 
                        optionLabel="name" 
                        placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        filter
                        @change="filterDistrictByid(form.province_id)"
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <label>
                        ເມືອງ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.district_id" 
                        :options="stateDistrict.data.props" 
                        optionLabel="name" 
                        placeholder="ກະລຸນາເລືອກ..." 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        filter
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="village" 
                        label="ບ້ານ" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                        :value="form.village"
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="zipcode" 
                        label="zipcode" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                        :value="form.zip_code"
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="wide" 
                        label="ລວງກວ້າງ" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                        :value="form.wide"
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="long" 
                        label="ລວງຍາວ" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                        :value="form.long"
                    />
                </div>
                <div class="column is-mobile-12 is-6">
                    <my-input-text 
                        name="location" 
                        label="ລີ້ງເເຜນທີ່" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                        :value="form.location"
                    />
                </div>
                <div class="column is-mobile-12 is-12">
                    <my-input-text-area 
                        name="remark" 
                        label="ລາຍລະອຽດ" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                        :value="form.remark"
                    />
                    <!-- <label>
                        ລາຍລະອຽດ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Editor editorStyle="height: 320px" /> -->
                </div>

                <div class="column is-12">
                    <Panel header="ຕັ້ງຄ່າລາຄາ ຊື້ຂາຍ - ເຊົ່າ">
                        <div class="columns is-12" v-for="(input, index) in form.prices" :key="index">
                            <div class="column is-3">
                                <label>
                                    ຮູບເເບບ ບໍລິການ
                                    <span class="text-red-500"> *</span>
                                </label>
                                <Dropdown 
                                    v-model="input.unit_price" 
                                    :options="unitPrices" 
                                    optionLabel="name" 
                                    placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                                    class="w-full" 
                                    optionValue="id"
                                    :highlightOnSelect="true" 
                                    required
                                />
                            </div>
                            <div class="column is-3">
                                <label>
                                    ລາຄາ
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
                                    ລາຍລະອຽດ
                                </label>
                                <input 
                                    name="detail"
                                    type="text" 
                                    class="input" 
                                    v-model="input.detail" 
                                    placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                                    required 
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
                            <a @click="addInput" class="button is-primary">ເພີ່ມລາຍການ</a>
                        </div>
                    </Panel>
                </div>

                <div class="column is-12">
                    <Panel header="ເລືອກໂປຮໄຟລ ເເລະ ເເກເລີລີ່">
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
                    <Panel header="ໂປຮໄຟລ ເເລະ ເເກເລີລີ່">
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
                        ອັບເດດ ຂໍ້ມູນ
                    </Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    // import MyInputText from '@/components/customComponents/FormInputText.vue';
    import MyInputText from '@/components/customComponents/FormEditInputText.vue';
    import MyInputTextArea from '@/components/customComponents/FormEditTextArea.vue';
    import Dropdown from 'primevue/dropdown';
    import { ref, onMounted } from 'vue';
    import Button from 'primevue/button';
    // import Editor from 'primevue/editor';
    import InputNumber from 'primevue/inputnumber';
    import { useForm } from 'vee-validate';
    import { houseSchema } from '../schema/house.schema';
    import Panel from 'primevue/panel';
    import Divider from 'primevue/divider';
    import { realEstateServiceStore } from '@/modules/realEstate/rentHouse/memberServices/stores/real-estate-service.store';
    import { houseStore } from '@/modules/realEstate/owner/house/stores/house.store';
    import { provinceStore } from '@/modules/realEstate/address/stores/province.store';
    import { districtStore } from '@/modules/realEstate/address/stores/district.store';
    import { useRouter, useRoute } from 'vue-router';
    import { useToast } from "primevue/usetoast";
    import axios from 'axios';

    const toast = useToast();
    const router = useRouter();
    const route = useRoute();

    const { form, state, update, getOne, houseGetByOne, deleteGallery, updateGallery, addGallery } = houseStore();
    const { getOne: getOneRealEstateService, realestateType } = realEstateServiceStore();
    const { getAll: getAllProvince, state: stateProvince, setStateFilter: setStateProvinceFilter } = provinceStore();
    const { getAll: getAllDistrict, state: stateDistrict, setStateFilter: setStateDistrictFilter } = districtStore();

    const isShowFileImage = ref();
    const selectedImage = ref();
    
    const isShowFileGallery = ref([{
        id: '',
        image: ''
    }]);
    const selectedGallery = ref();
    const isMethod = ref();
    
    const goBack = async () => {
        router.push({ name: 'owner.house'});
    }
    
    const addInput = async () => {
        if (form.prices) {
            form.prices.push({ price: '', unit_price: '', detail: '' });
        }
    }

    const removeInput  = async (index: any) => {
        if (form.prices) {
            form.prices.splice(index, 1);
        }
    }


    const { handleSubmit } = useForm<any>({
        validationSchema: houseSchema
    })

    const servicemodels = ref([
        { id: 'sale', name: 'ຂາຍ' },
        { id: 'rent', name: 'ເຊົ່າ' }
    ]);
    
    const roomTypes = ref([
        { id: 'air', name: 'ເເອ' },
        { id: 'fan', name: 'ພັດລົມ' },
        { id: 'no', name: 'ບໍ່ມີ' },
    ]);

    const unitPrices = ref([
        { id: 'day', name: 'ມື້' },
        { id: 'month', name: 'ເດືອນ' },
        { id: 'year', name: 'ປີ' },
    ]);

    onMounted(async() => {
        await initComponent();
    })

    const initComponent = async () => {
        const id = Number(route.params.id);
        state.btnLoading = true;
        await getOne(id);
        await fetchAll();
        state.btnLoading = false;
    }

    const fetchAll = async() => {
        const house = houseGetByOne.data.props;

        form.room_type = house.room_type;
        form.service_model = house.service_model;
        form.village = house.village;
        form.zip_code = house.zip_code;
        form.wide = house.wide;
        form.long = house.long;
        form.remark = house.remark;
        form.location = house.location;
        form.prices = house.price;
        form.prices = house.price;

        isShowFileImage.value = house.image;
        isShowFileGallery.value = house.gallery;

        // ใช้ split('/') เพื่อแยกส่วนของ URL ตามเครื่องหมาย '/'
        // const parts = house.image.split('/');

        // // เลือกส่วนสุดท้ายของ URL ซึ่งเป็นชื่อไฟล์
        // const filename = parts[parts.length - 1];

        setStateProvinceFilter.limit = 1000;
        await getAllProvince();
        await getOneRealEstateService();

        form.real_estate_type_id = house.real_estate_type ? house.real_estate_type.id : undefined;
        form.province_id = house.province ? house.province.id : undefined;

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
        form.district_id = houseGetByOne.data.props.district ? houseGetByOne.data.props.district.id : undefined;
    }

    const onSubmit = handleSubmit(async (value) => {
        form.id = String(route.params.id);
        form.village = value.village;
        form.zip_code = value.zipcode;
        form.wide = value.wide;
        form.long = value.long;
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
        await uploadFileImage(file, 'image');
        isShowFileImage.value = URL.createObjectURL(file);
      }
    };


    const handleClickGalleryFile = (id: string, method: string) => {
        form.id = id;
        isMethod.value = method;

        if (isMethod.value === 'update') {
            const input = document.getElementById('updateGalleryInput') as HTMLInputElement;
            input.click();
        } else {
            const input = document.getElementById('addGalleryInput') as HTMLInputElement;
            input.click();
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

    const addHandleFileGalleryChange = async (event: any) => {
        const target = event.target as HTMLInputElement;
        const files = target.files;
        if (files) {
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
        }
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: 'ເກີດຂໍ້ຜິດພາດ.', detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: 'ສຳເລັດເເລ້ວ.', detail: 'ການດຳເນີນສຳເລັດເເລ້ວ', life: 3000 });
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

            const response = await axios.post('http://159.223.42.254/api/upload/multiple/files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTU5LjIyMy40Mi4yNTQvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDc5MjgwMDksIm5iZiI6MTcwNzkyODAwOSwianRpIjoia25Ma3BqRHdObUh4a2dyUyIsInN1YiI6IjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.FDSN40oY148SrIvrc0oj51Ln8dgwlYj8KDCEjvUPZ1U`
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

            const response = await axios.post('http://159.223.42.254/api/upload_file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTU5LjIyMy40Mi4yNTQvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDc5MjgwMDksIm5iZiI6MTcwNzkyODAwOSwianRpIjoia25Ma3BqRHdObUh4a2dyUyIsInN1YiI6IjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.FDSN40oY148SrIvrc0oj51Ln8dgwlYj8KDCEjvUPZ1U`
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

</style>../../../real-estate/address/stores/province.store../../../real-estate/address/stores/district.store@/modules/realEstate/owner/house/stores/house.store@/modules/realEstate/rent_house/memberServices/stores/real-estate-service.store@/modules/realEstate/rentHouse/memberServices/stores/real-estate-service.store