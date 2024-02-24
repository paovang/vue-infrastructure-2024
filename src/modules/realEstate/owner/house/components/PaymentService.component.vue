
<template>
    <Dialog 
        v-model:visible="visible" 
        modal 
        :header="$t('messages.payment_service')" 
        @hide="clearData"
        :style="{ width: '50rem' }" 
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
        <form @submit.prevent="onSubmit()" class="flex flex-column gap-3 h-full">
            <div class="flex flex-column align-items-center justify-content-center">
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <label>
                            {{ $t('messages.service_model') }} / {{ $t('messages.price') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <Dropdown 
                            name="real_estate_type"
                            style="margin-top: 8px;"
                            v-model="props.form.service_charge_id" 
                            :options="props.realEstateService.data.props" 
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
                            :label="$t('messages.qty')"
                            required
                            :placeholder="$t('placeholder.inputText')" 
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12" style="margin-top: -20px;">
                    <div class="flex flex-column">
                        <label>
                            {{ $t('messages.date') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <Calendar 
                            v-model="props.form.payment.fromDate" 
                            showIcon iconDisplay="input" 
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
                        <Button type="submit" label="ຊຳລະ ຄ່າບໍລິການ" :loading="btnLoading"/>
                    </div>
                </div>
            </div>
        </form>
    </Dialog>
</template>

<script setup lang="ts">
    import Dialog from 'primevue/dialog';
    import { ref } from 'vue';
    import Dropdown from 'primevue/dropdown';
    import MyInputNumber from '@/components/customComponents/FormInputNumber.vue';
    import Calendar from 'primevue/calendar';
    import Button from 'primevue/button';
    import Divider from 'primevue/divider';
    import axios from 'axios';
    import { useForm } from 'vee-validate';
    import { paymentSchema } from '../schema/payment.schema';
    import { houseStore } from '../../../owner/house/stores/house.store'
    import { useToast } from "primevue/usetoast";
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const { paymentService, state } = houseStore();

    const visible = ref<boolean>(false);
    defineExpose({ visible });
    const emit = defineEmits<{ (e: 'onSuccess'): void; (e: 'onHide'): void }>()

    const props = defineProps<{
      id: boolean,
      form: any,
      onSubmit: any
      isLoading: boolean,
      realEstateService: any
    }>()
    
    const toast = useToast();

    const { handleSubmit, handleReset } = useForm<any>({
        validationSchema: paymentSchema
    })


    const onSubmit = handleSubmit(async (value) => {
        props.form.payment.quantity = value.quantity;
        props.form.payment.filezPaySlip = selectedImage.value;

        if (selectedImage.value) {
            await paymentService();

            if (state.error) {
                await showWarningValidateBackend();
            } else {
                await clearData();
            }
        } else {
            await showWarningValidate();
        }
    })

    const clearData = async () => {
        await handleReset();

        props.form.id = "";
        props.form.payment.quantity = "";
        props.form.payment.filezPaySlip = "";
        props.form.payment.fromDate = new Date();
    }

    const isShowFileImage = ref<string | null>(null);
    const selectedImage = ref();
    const btnLoading = ref(false);

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

    const showWarningValidate = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: t('toast.detail.choose_file'), life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
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