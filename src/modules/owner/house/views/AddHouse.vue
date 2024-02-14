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
                        placeholder="Select a City" 
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
                        placeholder="Select a City" 
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
                        placeholder="Select a City" 
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
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="zipcode" 
                        label="zipcode" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="wide" 
                        label="ລວງກວ້າງ" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <my-input-text 
                        name="long" 
                        label="ລວງຍາວ" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-6">
                    <my-input-text 
                        name="location" 
                        label="ລີ້ງເເຜນທີ່" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                    />
                </div>
                <div class="column is-mobile-12 is-12">
                    <my-input-text-area 
                        name="remark" 
                        label="ລາຍລະອຽດ" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                    />
                    <!-- <label>
                        ລາຍລະອຽດ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Editor editorStyle="height: 320px" /> -->
                </div>

                <div class="column is-12">
                    <Panel header="ຕັ້ງຄ່າລາຄາ ຊື້ຂາຍ - ເຊົ່າ">
                        <div class="columns is-12" v-for="(input, index) in createInputs" :key="index">
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
                        <div class="column is-mobile-12 is-12">
                            <label>
                                ເລືອກໂປຮໄຟລ
                                <span class="text-red-500"> *</span>
                            </label>
                            <label 
                                class="upload-box" 
                                @click="handleClick"
                                :style="{ border: isShowFileImage ? '1px dashed #029217' : '1px dashed red' }"
                            >
                                <div v-if="!isShowFileImage">
                                    ກະລຸນາເລືອກໄຟລກ່ອນ...
                                </div>
                                <div v-else style="color: #029217">
                                    {{ isShowFileImage }}
                                </div>
                            </label>
                            <input type="file" id="fileInput" style="display: none" @change="handleFileChangess">
                        </div>
                        <Divider/>
                        <div class="column is-mobile-12 is-12">
                            <label>
                                ເລືອກເເກເລີເລີ່
                                <span class="text-red-500"> *</span>
                            </label>
                            <label 
                                class="upload-box" 
                                @click="handleClickGalleryFile"
                                :style="{ border: isShowFileGallery ? '1px dashed #029217' : '1px dashed red' }"
                            >
                                <div v-if="!isShowFileGallery">
                                    ກະລຸນາເລືອກໄຟລກ່ອນ...
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
                        ບັນທຶກ ຂໍ້ມູນ
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
    import { realEstateServiceStore } from '../../../rent_house/memberServices/stores/real-estate-service.store';
    import { houseStore } from '../../../owner/house/stores/house.store'
    import { provinceStore } from '../../../address/stores/province.store';
    import { districtStore } from '../../../address/stores/district.store';
    import { useToast } from "primevue/usetoast";
    import { HouseEntity } from '../entities/house.entity';
    import { useConfirm } from "primevue/useconfirm";
    import { useRouter } from 'vue-router';

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

    const handleFileChangess = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        isShowFileImage.value = 'ກຳລັງອັບໂຫຼດໂປຮໄຟລເຂົ້າລະບົບ ກະລຸນາລໍຖ້າ';
        await uploadFileImage(file);
        isShowFileImage.value = 'ອັບໂຫຼດສຳເລັດເເລ້ວ.';
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
        isShowFileGallery.value = 'ກຳລັງອັບໂຫຼດ ' + files.length + ' ໄຟລເຂົ້າລະບົບ ກະລຸນາລໍຖ້າ...';
        await uploadFileGallery(files);
        isShowFileGallery.value = 'ອັບໂຫຼດສຳເລັດເເລ້ວ ' + files.length + ' ໄຟລ.';
      }
    };


    const createInputs = ref<HouseEntity['prices']>([
        { price: '', unit_price: '', detail: '' }
    ]);


    const addInput = async () => {
        if (createInputs.value) {
            createInputs.value.push({ price: '', unit_price: '', detail: '' });
        }
    }

    const removeInput  = async (index: any) => {
        if (createInputs.value) {
            createInputs.value.splice(index, 1);
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
        form.village = value.village;
        form.zip_code = value.zipcode;
        form.wide = value.wide;
        form.long = value.long;
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

            const response = await axios.post('http://159.223.42.254/api/upload_file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMjA2LjE4OS4xOTAuNDcvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDc0ODQ1NDgsIm5iZiI6MTcwNzQ4NDU0OCwianRpIjoidEtMRnEyczNVaFVJUHhjdSIsInN1YiI6IjkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ljoD1A9QkJnBPCmt7TxZj-6n7n5gQojgszX-INFPi-o`
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

            const response = await axios.post('http://159.223.42.254/api/upload/multiple/files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMjA2LjE4OS4xOTAuNDcvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDc0ODQ1NDgsIm5iZiI6MTcwNzQ4NDU0OCwianRpIjoidEtMRnEyczNVaFVJUHhjdSIsInN1YiI6IjkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ljoD1A9QkJnBPCmt7TxZj-6n7n5gQojgszX-INFPi-o`
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

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: 'ເກີດຂໍ້ຜິດພາດ.', detail: `${state.error}`, life: 3000 });
    }

    const confirmDuplicate = async () => {
        confirm.require({
            message: 'ທ່ານຕ້ອງການສຳເນົາຂໍ້ມູນບໍ?',
            header: 'ຢືນຢັນເພື່ອທຳການສຳເນົາຂໍ້ມູນ',
            acceptLabel: 'ຕ້ອງການ',
            rejectLabel: 'ບໍ່ຕ້ອງການ',
            rejectClass: 'p-button-danger',
            acceptClass: 'p-button-info',
            accept: async () => {
                await clearAllFileUpload();
                toast.add({ severity: 'success', summary: 'ໄດ້ທຳການສຳເນົາຂໍ້ມູນເເລ້ວ.', detail: 'ສຳເນົາຂໍ້ມູນສຳເລັດ.', life: 3000 });
            },
            reject: async () => {
                window.location.reload();
                toast.add({ severity: 'error', summary: 'ບໍ່ຕ້ອງການສຳເນົາຂໍ້ມູນ.', detail: 'ຖືກຍົກເລີກການສຳເນົາເເລ້ວ.', life: 3000 });
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
</style>