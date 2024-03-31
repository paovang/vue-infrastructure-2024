<template>
    <div class="signup-form">
      <h2 style="font-size: 20px; font-weight: bold;">
        {{ $t('messages.sign_up')}}
    </h2>
    <Divider/>
    <p style="font-weight: normal; font-size: 16px; color: brown; margin-top: 10px !important">
        * {{ $t('messages.warning_sign_up') }}
    </p>
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
                        ref="autoFocusCursor"
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
                <div class="column is-12 is-mobile-12 is-margin-top">
                    <my-input-file 
                        name="profile" 
                        :label="$t('messages.profile')" 
                        required 
                        :multiple="true"
                        class="h-full" 
                        @change="handleProfileFileChange"
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
    import { useForm } from 'vee-validate';
    import { signUpSchema } from '../schemas/sign-up.schema';
    import { homerealEstateStore } from '../stores/home.store';
    import { onMounted, ref } from 'vue';
    import Dropdown from 'primevue/dropdown';
    import { useToast } from 'primevue/usetoast';
    import axios from 'axios';
    import { uploadFileToServer } from '@/common/utils/upload-file';
    import { isValidFileSize, validFileTypes } from '@/common/utils/validation.file';
    import { showNotificationToast } from '@/common/utils/toast';
    import { useRouter } from 'vue-router';
    import { scrollToTop } from '@/common/utils/scroll-top';

    const { formSignUp, countries, getAllData, state, register } = homerealEstateStore();

    const { t } = useI18n();
    const toast = useToast();
    const router = useRouter();

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
        await scrollToInput();
        await handleReset();
        await getAllData();
        formSignUp.country_id = countries.data.props.length > 0 ? countries.data.props[0].id : null;
    })

    const submitForm = handleSubmit(async (value: any) => {
        formSignUp.name = String(value.name);
        formSignUp.owner = String(value.owner);
        formSignUp.address = String(value.address);
        formSignUp.email = String(value.email);
        formSignUp.phone_number = String(value.phone_number);
        formSignUp.password = String(value.password);
        formSignUp.password_confirmation = String(value.password_confirmation);
        formSignUp.profile = selectedProfile.value;
        formSignUp.isValidToServer = true;
        
        await register();

        if (state.error) {
                await showWarningValidateBackend();
        } else {
            router.push({ name: 'confirm.sign.up', query: { 
                name: value.name,
                owner: value.owner,
                address: value.address,
                email: value.email,
                phone_number: value.phone_number,
                password: value.password,
                password_confirmation: value.password_confirmation,
                profile: selectedProfile.value,
                country_id: formSignUp.country_id
            }})
        }
    })

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const selectedProfile = ref();
    const handleProfileFileChange = async (event: any) => {
        const file = event.target.files[0];

        if (! await validFileTypes(file)) {
            await showNotificationToast({ toast, error: 'error', summary: t("toast.summary.error"), detail: t("toast.summary.profile_valid_file_mimes") });
            event.target.value = '';
            return;
        }
        if (! await isValidFileSize(file)) {
            await showNotificationToast({ toast, error: 'error', summary: t("toast.summary.error"), detail: t("toast.summary.profile_valid_file_size") });
            event.target.value = '';
            return;
        }

        await uploadFileToServer({ axios, file, state, selectedImage: selectedProfile, toast, t });
    }

    const autoFocusCursor = ref();
    const scrollToInput = async () => {
        if (autoFocusCursor.value) {
            await scrollToTop(autoFocusCursor);
        }
    }
</script>
  
<style scoped>
    @import 'bulma/css/bulma.css';

    .signup-form {
        width: 60%;
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
  