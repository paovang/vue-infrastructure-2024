<template>
    <div class="signup-form">
      <h2 style="font-size: 20px; font-weight: bold;">{{ $t('messages.sign_up')}}</h2>
      <Divider/>
      <br/>
      <form @submit.prevent="submitForm">
            <div class="columns is-12 is-multiline">
                <div class="column is-6 is-mobile-12">
                    <label>
                        {{ $t('messages.country') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        name="countries"
                        v-model="formSignUp.country_id" 
                        :options="countries.data.props" 
                        optionLabel="name" 
                        :placeholder="$t('placeholder.dropdownSelect')" 
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                    />
                </div>
                <div class="column is-6 is-mobile-12" style="margin-top: -10px;">
                    <my-input-text 
                        name="name" 
                        :label="$t('messages.name')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-6 is-mobile-12 is-margin-top">
                    <my-input-text 
                        name="owner" 
                        :label="$t('messages.owner')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-6 is-mobile-12 is-margin-top">
                    <my-input-text 
                        name="address" 
                        :label="$t('messages.address')" 
                        required 
                        :placeholder="$t('placeholder.inputTextAddress')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-6 is-mobile-12 is-margin-top">
                    <my-input-text 
                        name="phone_number" 
                        :label="$t('messages.phone_number')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-6 is-mobile-12 is-margin-top">
                    <my-input-text 
                        name="email" 
                        :label="$t('messages.email')" 
                        required 
                        :placeholder="$t('placeholder.inputText')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-6 is-mobile-12 is-margin-top">
                    <my-input-password 
                        name="password"
                        :label="$t('messages.password')" 
                        :placeholder="$t('placeholder.inputText')"  
                    />
                </div>
                <div class="column is-6 is-mobile-12 is-margin-pass-confirm">
                    <my-input-password 
                        name="password_confirmation"
                        :label="$t('messages.confirm_password')" 
                        :placeholder="$t('placeholder.inputText')"  
                    />
                </div>
                <div class="column is-12 is-mobile-12" style="margin-top: -10px;">
                    <my-input-text 
                        name="id_no" 
                        :label="$t('messages.id_no')" 
                        required 
                        :placeholder="$t('placeholder.inputTextIdNo')"  
                        class="h-full" 
                    />
                </div>
                <div class="column is-12 is-mobile-12 is-margin-top">
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
            <Divider/>
            <br/>
            <Button
                class="w-full surface-500 border-none"
                type="submit"
                :label="$t('button.sign_up')"
                :loading="state.btnLoading"
            />
      </form>
    </div>
  </template>
  
<script setup lang="ts">
    import MyInputText from '@/components/customComponents/FormInputText.vue';
    import MyInputFile from '@/components/customComponents/FormInputFile.vue';
    import Divider from 'primevue/divider';
    import MyInputPassword from '@/components/customComponents/FormInputPassword.vue';
    import Button from 'primevue/button';
    import { useI18n } from 'vue-i18n';
    import { useForm } from 'vee-validate'
    import { signUpSchema } from '../schemas/sign-up.schema';
    import { homerealEstateStore } from '../stores/home.store';
    import { onMounted, ref } from 'vue';
    import Dropdown from 'primevue/dropdown';
    import { useToast } from 'primevue/usetoast';
    import axios from 'axios';


    const { formSignUp, countries, getAllData, state, register } = homerealEstateStore();

    const { t } = useI18n();
    const toast = useToast();

    const translatedErrorMessages = {
        name: t('placeholder.inputText'),
        owner: t('placeholder.inputText'),
        address: t('placeholder.inputText'),
        phone_number: t('placeholder.inputText'),
        email: t('placeholder.inputText'),
        password: t('placeholder.inputText'),
        password_confirmation: t('placeholder.inputText'),
    }
    const { handleSubmit, handleReset } = useForm<any>({
        validationSchema: signUpSchema(translatedErrorMessages)
    })

    onMounted(async() => {
        await getAllData();
        formSignUp.country_id = countries.data.props.length > 0 ? countries.data.props[0].id : null;
    })

    const submitForm = handleSubmit(async (value: any) => {
        formSignUp.name = value.name;
        formSignUp.owner = value.owner;
        formSignUp.address = value.address;
        formSignUp.email = value.email;
        formSignUp.phone_number = value.phone_number;
        formSignUp.password = value.password;
        formSignUp.password_confirmation = value.password_confirmation;
        formSignUp.id_no = value.id_no;
        formSignUp.id_image = selectedImage.value;

        await register();

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
            await handleReset();
            await getAllData();
            selectedImage.value = "";
            const inputFile = document.getElementById('id_image') as HTMLInputElement;
            inputFile.value = '';

            formSignUp.country_id = countries.data.props.length > 0 ? countries.data.props[0].id : null;
        }
    });

    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];

        if (! await isValidFileType(file)) {
            await showValidationFileMimes();
            event.target.value = '';
            return;
        }
        if (! await isValidFileSize(file)) {
            await showValidationFileSize();
            event.target.value = '';
            return;
        }

        await uploadFileImage(file);
    }

    const isValidFileType = async (file: any) => {
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        return allowedTypes.includes(file.type);
    }

    const isValidFileSize = async (file: any) => {
      const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB
      return file.size <= maxSizeInBytes;
    }

    const selectedImage = ref();

    const uploadFileImage = async (file: any) => {
        state.btnLoading = true;
        try {
            let formData = new FormData();
            formData.append('file', file);

            const response = await axios.post(import.meta.env.VITE_APP_BASE_API_URL + 'customer/upload-file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            selectedImage.value = response.data?.filename;
            state.btnLoading = false;
        } catch (error) {
            await showFailUploadFile(error);
        }
    }

    const showFailUploadFile = (error: any) => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: error, life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }

    const showValidationFileMimes = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: t('toast.summary.sign_up_valid_file_mimes'), life: 3000 });
    }
    const showValidationFileSize = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: t('toast.summary.sign_up_valid_file_size'), life: 3000 });
    }
</script>
  
<style scoped>
    @import 'bulma/css/bulma.css';

    .signup-form {
        width: 40%;
        margin: 0 auto;
    }

    .is-margin-top {
        margin-top: -30px;
    }
    .is-margin-pass-confirm {
        margin-top: -30px;
    }

    @media screen and (max-width: 768px) {
        .is-margin-pass-confirm {
            margin-top: -30px;
        }
        .signup-form {
            width: 100% !important;
        }
    }
</style>
  