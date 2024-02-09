<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 style="font-weight: bold; font-size: 18px;">
                    ຟອມລົງທະບຽນຂໍ້ມູນ
                </h2>
            </span>
        </div>
        <form @submit.prevent="onSubmit()" class="flex flex-column gap-3 h-full">
            <div class="columns is-12 is-multiline" style="margin-top: 20px;">
                <div class="column is-mobile-12 is-2">
                    <label>
                        ປະເພດ ບໍລິການ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="selectedServiceModel" 
                        :options="servicemodels" 
                        optionLabel="name" 
                        placeholder="Select a City" 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                    />
                </div>
                <div class="column is-mobile-12 is-2">
                    <label>
                        ຮູບເເບບ ບໍລິການ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="selectedServiceModel" 
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
                        v-model="selectedRoomType" 
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
                        ເມືອງ
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="selectedRoomType" 
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
                        v-model="selectedRoomType" 
                        :options="roomTypes" 
                        optionLabel="name" 
                        placeholder="Select a City" 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
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

                <div class="column is-12" v-for="(input, index) in inputs" :key="index">
                    <div class="columns is-12">
                        <div class="column is-3">
                            <input type="text" class="input" v-model="input.price" required>
                        </div>
                        <div class="column is-3">
                            <input type="text" class="input" v-model="input.remark" required>
                        </div>
                        <div class="column is-5">
                            <input type="text" class="input" v-model="input.detail" required>
                        </div>
                        <div class="column is-1">
                            <a @click="removeInput(index)" class="remove-btn" v-if="index > 0">Remove</a>
                        </div>
                    </div>
                </div>
                <div class="column is-mobile-12 is-12">
                    <a @click="addInput">Add Input</a>
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
                <div class="column is-mobile-12 is-12">
                    <my-input-file 
                        name="image" 
                        label="ເລືອກໂປຮໄຟລ" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full" 
                        @change="handleFileChange"
                    />
                </div>
                <div class="column is-mobile-12 is-12">
                    <my-input-file 
                        name="gallery" 
                        label="ເລືອກ gallery" 
                        required 
                        placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                        class="h-full"
                        @change="handleFileGalleryChange"
                    />
                </div>
                <div class="column is-mobile-12 is-12 text-right">
                    <Button 
                        style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'"
                        type="submit"
                        severity="info" 
                        :loading="false"
                    >
                        <i class="pi pi-save" style="margin-right: 8px;"></i>
                        ບັນທຶກ
                    </Button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import MyInputText from '@/components/customComponents/FormInputText.vue';
    import MyInputFile from '@/components/customComponents/FormInputFile.vue';
    import MyInputTextArea from '@/components/customComponents/FormTextArea.vue';
    import Dropdown from 'primevue/dropdown';
    import { ref } from "vue";
    import Button from 'primevue/button';
    // import Editor from 'primevue/editor';
    import { useForm } from 'vee-validate';
    import { houseSchema } from '../schema/house.schema';
    import axios from 'axios';


    interface Input {
        price: string;
        remark: string;
        detail: string;
    }

    const inputs = ref<Input[]>([{ price: '', remark: '', detail: '' }]);

    const addInput = async () => {
        inputs.value.push({ price: '', remark: '', detail: '' });
    }

    const removeInput  = async (index: any) => {
        inputs.value.splice(index, 1);
    }


    const { handleSubmit } = useForm<any>({
        validationSchema: houseSchema
    })

    const selectedServiceModel = ref();
    const servicemodels = ref([
        { id: 'sale', name: 'ຂາຍ' },
        { id: 'rent', name: 'ເຊົ່າ' }
    ]);

    const selectedRoomType = ref();
    const roomTypes = ref([
        { id: 'air', name: 'ເເອ' },
        { id: 'fan', name: 'ພັດລົມ' }
    ]);

    const selectedGallery = ref();
    const selectedImage = ref();

    const onSubmit = handleSubmit(async (value) => {
        console.log(inputs);

        // try {
        //     const response = await axios.post('http://206.189.190.47/api/owner/realestate/list', {
        //         real_estate_type_id: 1, 
        //         service_model: 'sale', 
        //         image: selectedImage.value, 
        //         room_type: 'air', 
        //         village: 'ບ້ານ ໜອງນາກ',
        //         district_id: 3,
        //         location: 'fastwasdgas', 
        //         zip_code: '00110', 
        //         wide: 50, 
        //         long: 50, 
        //         remark: 'ຫ້ອງກວ້າງ ເເລະ ພື້ນທີ່ເເມ່ນສະດວກໃນການອາໃສ 2024.',
        //         prices: [
        //             {
        //                 price: 50, 
        //                 unit_price: 'day',
        //                 detail: ''
        //             },
        //             {
        //                 price: 80,
        //                 unit_price: 'month',
        //                 detail: ''
        //             }
        //         ],
        //         gallery: selectedGallery.value
        //     }, {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMjA2LjE4OS4xOTAuNDcvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDc0ODQ1NDgsIm5iZiI6MTcwNzQ4NDU0OCwianRpIjoidEtMRnEyczNVaFVJUHhjdSIsInN1YiI6IjkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ljoD1A9QkJnBPCmt7TxZj-6n7n5gQojgszX-INFPi-o'
        //         }
        //     });

        //     console.log(response.data);
        // } catch (error) {
        //     console.error('Upload failed:', error);
        // }
    })

    const handleFileGalleryChange = async (event: any) => {
        const files = event.target.files;
        if (files) {
            await uploadFileGallery(files);
        }
    }

    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];
        if (file) {
            await uploadFileImage(file);
        }
    }

    const uploadFileImage = async (file: any) => {
        try {
            let formData = new FormData();
            formData.append('file', file);

            const response = await axios.post('http://206.189.190.47/api/upload_file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMjA2LjE4OS4xOTAuNDcvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDc0ODQ1NDgsIm5iZiI6MTcwNzQ4NDU0OCwianRpIjoidEtMRnEyczNVaFVJUHhjdSIsInN1YiI6IjkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ljoD1A9QkJnBPCmt7TxZj-6n7n5gQojgszX-INFPi-o`
                }
            });

            selectedImage.value = response.data?.filename;
        } catch (error) {
            console.error('Upload failed:', error);
        }
    }

    const uploadFileGallery = async (files: any) => {
        try {
            let formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append('files[]', files[i]);
            }

            const response = await axios.post('http://206.189.190.47/api/upload/multiple/files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMjA2LjE4OS4xOTAuNDcvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDc0ODQ1NDgsIm5iZiI6MTcwNzQ4NDU0OCwianRpIjoidEtMRnEyczNVaFVJUHhjdSIsInN1YiI6IjkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ljoD1A9QkJnBPCmt7TxZj-6n7n5gQojgszX-INFPi-o`
                }
            });

            const gallery: { image: string }[] = response.data.filename.map((filename: string) => ({
                image: `${filename}`
            }));

            selectedGallery.value = gallery;
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
</style>