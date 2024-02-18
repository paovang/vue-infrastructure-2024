<template>
    <Dialog 
        v-model:visible="visible" 
        modal 
        @hide="clearData"
        header="ຊຳລະ ຄ່າບໍລິການ" 
        :style="{ width: '50vw' }" 
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
        <form @submit.prevent="onSubmit()" class="flex flex-column gap-3 h-full">
            <div class="flex flex-column align-items-center justify-content-center">
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <label>
                            ເຮືອນ / ຫ້ອງເເຖວ
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            name="real_estate_type"
                            style="margin-top: 8px;"
                            v-model="form.id" 
                            :options="stateHouse.data.props" 
                            :optionLabel="option => `${option.real_estate_type.name} - ${option.room_type} - ${option.service_model}`" 
                            placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                            class="w-full" 
                            optionValue="id"
                            :highlightOnSelect="true" 
                            @change="filterRealEstateService(form.id as HouseEntity)"
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <label>
                            ປະເພດ ບໍລິການ / ລາຄາ
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            name="real_estate_type"
                            style="margin-top: 8px;"
                            v-model="form.service_charge_id" 
                            :options="findRealEstateService.data.props" 
                            :optionLabel="option => `${option.unit_price} - ${option.service_charge}`" 
                            placeholder="ກະລຸນາເລືອກກ່ອນ..." 
                            class="w-full" 
                            optionValue="id"
                            :highlightOnSelect="true" 
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <my-input-number
                            name="quantity"
                            label="ຈຳນວນ"
                            required
                            placeholder="ກະລຸນາປ້ອນ ຈຳນວນ..."
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12" style="margin-top: -20px;">
                    <div class="flex flex-column">
                        <label>
                            ເລືອກວັນທີ
                            <span class="text-red-500"> *</span>
                        </label>
                        <Calendar 
                            v-model="form.fromDate" 
                            showIcon iconDisplay="input" 
                            inputId="icondisplay" 
                            style="width: 100%;" 
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <label>
                            ເລືອກໄຟລ
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
                        <input type="file" id="fileInput" style="display: none" @change="handleFileChange">
                    </div>
                </div>
                <br/>
                <Divider/>
                <br/>
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <Button type="submit" label="ຊຳລະ ຄ່າບໍລິການ" :loading="btnLoading"/>
                    </div>
                </div>
            </div>
        </form>
    </Dialog>
</template>

<script setup lang="ts">
    import Dialog from 'primevue/dialog';
    import { ref, onMounted, watch } from 'vue';
    import { houseStore } from '../../../owner/house/stores/house.store'
    import Dropdown from 'primevue/dropdown';
    import { HouseEntity } from '../../house/entities/house.entity';
    import { paymentStore } from '../stores/payment.store';
    import MyInputNumber from '../../../../components/customComponents/FormInputNumber.vue';
    import Calendar from 'primevue/calendar';
    import Button from 'primevue/button';
    import axios from 'axios';
    import Divider from 'primevue/divider';
    import { useForm } from 'vee-validate';
    import { paymentSchema } from '../schemas/payment.schema';
    import { useToast } from 'primevue/usetoast';
    import { useI18n } from 'vue-i18n';


    const { t } = useI18n();
    const toast = useToast();
    const visible = ref<boolean>(false);
    defineExpose({ visible });
    const emit = defineEmits<{ (e: 'onSuccess'): void; (e: 'onHide'): void }>();

    const isShowFileImage = ref<string | null>(null);
    const selectedImage = ref();
    const btnLoading = ref(false);

    watch(visible, (newValue, oldValue) => {
        if (newValue === true) {
            fetchAll();
        }
        if (oldValue) {
            return;
        }
    });

    const { handleSubmit, handleReset } = useForm<any>({
        validationSchema: paymentSchema
    })

    const { getAll, state: stateHouse, findRealEstateServiceById, findRealEstateService } = houseStore();
    const { form, state, paymentService } = paymentStore();

    const onSubmit = handleSubmit(async (value) => {
        form.quantity = value.quantity;
        form.paySlip = selectedImage.value;
        
        if (selectedImage.value) {
            await paymentService();

            if (state.error) {
                await showWarningValidateBackend();
            } else {
                await clearData();
                await fetchAll();
                await showToastSuccess();
                visible.value = false;
            }
        } else {
            await showWarningValidate();
        }
    })

    const clearData = async () => {
        await handleReset();
        emit('onSuccess');
        selectedImage.value = "";
        isShowFileImage.value = "";

        form.id = "";
        form.quantity = 0;
        form.paySlip = "";
        form.fromDate = new Date();
    }

    const filterRealEstateService = async (id: HouseEntity) => {
        await findRealEstateServiceById(id);
        form.service_charge_id = findRealEstateService.data.props ? findRealEstateService.data.props[0].id : undefined;
    }

    const handleClick = () => {
        const input = document.getElementById('fileInput') as HTMLInputElement;
        input.click();
    };

    const handleFileChange = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        isShowFileImage.value = 'ກຳລັງອັບໂຫຼດໄຟລເຂົ້າລະບົບ ກະລຸນາລໍຖ້າ';
        await uploadFileImage(file);
        isShowFileImage.value = 'ອັບໂຫຼດສຳເລັດເເລ້ວ.';
      }
    };

    const uploadFileImage = async (file: any) => {
        btnLoading.value = true;
        try {
            let formData = new FormData();
            formData.append('file', file);

            const response = await axios.post('http://159.223.42.254/api/upload_file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTU5LjIyMy40Mi4yNTQvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDc5MjgwMDksIm5iZiI6MTcwNzkyODAwOSwianRpIjoia25Ma3BqRHdObUh4a2dyUyIsInN1YiI6IjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.FDSN40oY148SrIvrc0oj51Ln8dgwlYj8KDCEjvUPZ1U`
                }
            });

            selectedImage.value = response.data?.filename;
            btnLoading.value = false;
        } catch (error) {
            console.error('Upload failed:', error);
        }
    }

    onMounted(async() => {
        await fetchAll();
    });

    const fetchAll = async() => {
        await getAll();
        form.id = stateHouse.data.props ? stateHouse.data.props[0].id : undefined;
        await findRealEstateServiceById(form.id as HouseEntity);
        form.service_charge_id = findRealEstateService.data.props ? findRealEstateService.data.props[0].id : undefined;
    }

    const showWarningValidate = () => {
        toast.add({ severity: 'error', summary: 'ກະລຸນາກວດສອບກ່ອນ.', detail: `ກະລຸນາເລືອກໄຟລກ່ອນ...`, life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: 'ເກີດຂໍ້ຜິດພາດ.', detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }
</script>

<style scoped>
    .upload-box {
        position: relative;
        display: block;
        height: 45px;
        background-color: #fff;
        padding: 10px;
    }
    .upload-box:hover {
        cursor: pointer;
    }
</style>