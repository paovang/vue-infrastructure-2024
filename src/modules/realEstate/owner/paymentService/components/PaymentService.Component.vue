<template>
    <Dialog 
        v-model:visible="visible" 
        modal 
        @hide="clearData"
        :header="$t('messages.payment_service')" 
        :style="{ width: '50vw' }" 
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
        <form @submit.prevent="onSubmit()" class="flex flex-column gap-3 h-full">
            <div class="flex flex-column align-items-center justify-content-center">
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <label>
                            {{ $t('messages.house') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            name="real_estate_type"
                            style="margin-top: 8px;"
                            v-model="form.id" 
                            :options="stateHouse.data.props" 
                            :optionLabel="option => `${option.real_esate_number} - ${option.real_estate_type.name} - ${option.room_type} - ${option.service_model} (${formatNumber(option.price[0].price, '')})`" 
                            :placeholder="$t('placeholder.dropdownSelect')" 
                            class="w-full" 
                            optionValue="id"
                            :highlightOnSelect="true" 
                            @change="filterRealEstateService(form.id)"
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <label>
                            {{ $t('messages.service_model') }} / {{ $t('messages.price') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            name="real_estate_type"
                            style="margin-top: 8px;"
                            v-model="form.service_charge_id" 
                            :options="findRealEstateService.data.props" 
                            :optionLabel="option => `${option.unit_price} - ${conCatServiceChargePrices(option.service_charges)}`" 
                            :placeholder="$t('placeholder.dropdownSelect')" 
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
                            :label="$t('messages.qty')"
                            required
                            :placeholder="$t('placeholder.inputText')" 
                        />
                    </div>
                </div>
                <!-- <div class="col-12 md:col-12" style="margin-top: -20px">
                    <div class="flex flex-column" style="border: 1px solid #029217; padding: 10px;">
                        <p>
                            {{ $t('messages.amount') }} :
                            <span>23423</span>
                        </p>
                    </div>
                </div> -->
                <div class="col-12 md:col-12" style="margin-top: -20px">
                    <div class="flex flex-column">
                        <label>
                            {{ $t('messages.date') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <Calendar 
                            v-model="form.fromDate" 
                            showIcon 
                            iconDisplay="input" 
                            inputId="icondisplay" 
                            style="width: 100%;" 
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <label>
                            {{ $t('messages.file_reference') }}
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
                </div>
                <br/>
                <Divider/>
                <br/>
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <Button type="submit" :label="$t('messages.payment_service')" :loading="btnLoading"/>
                    </div>
                </div>
            </div>
        </form>
    </Dialog>
</template>

<script setup lang="ts">
    import Dialog from 'primevue/dialog';
    import { ref, onMounted, watch } from 'vue';
    import { houseStore } from '@/modules/realEstate/owner/house/stores/house.store'
    import Dropdown from 'primevue/dropdown';
    // import { HouseEntity } from '../../house/entities/house.entity';
    import { paymentStore } from '../stores/payment.store';
    import MyInputNumber from '@/components/customComponents/FormInputNumber.vue';
    import Calendar from 'primevue/calendar';
    import Button from 'primevue/button';
    import axios from 'axios';
    import Divider from 'primevue/divider';
    import { useForm } from 'vee-validate';
    import { paymentSchema } from '../schemas/payment.schema';
    import { useToast } from 'primevue/usetoast';
    import { useI18n } from 'vue-i18n';
    import { formatNumber } from '@/common/utils/format.currency';
    import { conCatServiceChargePrices } from '@/common/utils/concat';

    const { t } = useI18n();
    const toast = useToast();
    const visible = ref<boolean>(false);
    defineExpose({ visible });
    const emit = defineEmits<{ (e: 'onSuccess'): void; (e: 'onHide'): void }>();

    const isShowFileImage = ref<string | null>(null);
    const selectedImage = ref();
    const btnLoading = ref(false);
    const accessToken = localStorage.getItem('token');

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

    const filterRealEstateService = async (id: any) => {
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
        isShowFileImage.value = t('uploadFile.uploading');
        await uploadFileImage(file);
        isShowFileImage.value = t('uploadFile.upload_success');
      }
    };

    const uploadFileImage = async (file: any) => {
        btnLoading.value = true;
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
        await findRealEstateServiceById(form.id as any);
        form.service_charge_id = findRealEstateService.data.props ? findRealEstateService.data.props[0].id : undefined;
    }

    const showWarningValidate = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: t('placeholder.dropdownSelect'), life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
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