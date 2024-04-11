<template>
    <div class="signup-form">
        <InputText hidden ref="autoFocusCursor"/>
        <h2 style="font-size: 20px; font-weight: bold;">
            {{ $t('messages.sign_up')}}
        </h2>
        <Divider />
        <br/>
        <div>
            <p v-html="policy.data.props.description" style="font-size: 18px;"></p>
        </div>
        <br/>
        <Divider />
        <br/>
        <div class="flex align-items-center">
            <Checkbox v-model="formSignUp.check_rule" inputId="ingredient1" name="rule" binary />
            <label for="ingredient1" class="ml-2"> {{ $t('messages.i_gree') }} </label>
        </div>
        <br/>
        <div class="column is-12 is-mobile-12" style="margin-top: -10px;">
            <my-input-text 
                name="id_no" 
                :label="$t('messages.id_no')" 
                required 
                :placeholder="$t('placeholder.inputTextIdNo')"  
                class="h-full" 
                :disabled="!formSignUp.check_rule"
            />
        </div>
        <div class="column is-12 is-mobile-12" style="margin-top: -30px;">
            <my-input-file 
                name="id_image" 
                :label="$t('messages.id_image')" 
                required 
                :multiple="true"
                class="h-full" 
                @change="handleFileChange"
                :disabled="!formSignUp.check_rule"
            />
        </div>
        <br/>
        <Button
            class="w-full surface-500 border-none"
            type="submit"
            :label="$t('button.sign_up')"
            :loading="state.btnLoading"
            @click="submitForm"
            :disabled="!formSignUp.check_rule"
        />
    </div>
</template>

<script setup lang="ts">
    import Checkbox from 'primevue/checkbox';
    import Divider from 'primevue/divider';
    import { ref } from 'vue';
    import { homerealEstateStore } from '../stores/home.store';
    import Button from 'primevue/button';
    import { onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useI18n } from 'vue-i18n';
    import { useToast } from 'primevue/usetoast';
    import { scrollToTop } from '@/common/utils/scroll-top';
    import InputText from 'primevue/inputtext';
    import { showNotificationToast } from '@/common/utils/toast';
    import { uploadFileToServer } from '@/common/utils/upload-file';
    import { isValidFileSize, validFileTypes } from '@/common/utils/validation.file';
    import axios from 'axios';
    import { useForm } from 'vee-validate';
    import MyInputFile from '@/components/customComponents/FormInputFile.vue';
    import MyInputText from '@/components/customComponents/FormInputText.vue';

    const { formSignUp, register, state, getAllPolicy, policy } = homerealEstateStore();
    const { query } = useRoute();
    const router = useRouter();
    const { t } = useI18n();
    const toast = useToast();

    const { handleSubmit, handleReset } = useForm<any>({})

    const submitForm = handleSubmit(async (value: any) => {
        if (formSignUp.check_rule === true && selectedImage.value) {
            formSignUp.isValidToServer = false;
            formSignUp.id_no = value.id_no;
            formSignUp.id_image = selectedImage.value;

            await register();

            if (state.error) {
                await showWarningValidateBackend();
            } else {
                await showToastSuccess();
                await handleReset();
                router.push({ name: 'sign.up'});
            }
        }
    })

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }

    const autoFocusCursor = ref();
    const scrollToInput = async () => {
        if (autoFocusCursor.value) {
            await scrollToTop(autoFocusCursor);
        }
    }

    onMounted(async() => {
        await getAllPolicy();
        await scrollToInput();

        formSignUp.check_rule = false;

        if (Object.keys(query).length !== 0) {
            const value = query;
            
            formSignUp.name = String(value.name);
            formSignUp.address = String(value.address);
            formSignUp.email = String(value.email);
            formSignUp.phone_number = String(value.phone_number);
            formSignUp.password = String(value.password);
            formSignUp.password_confirmation = String(value.password_confirmation);
            formSignUp.profile = String(value.profile);
            formSignUp.country_id = String(value.country_id);
        }
    })

    const selectedImage = ref();
    const handleFileChange = async (event: any) => {
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

        await uploadFileToServer({ axios, file, state, selectedImage, toast, t });
    }

</script>

<style scoped>
    @import 'bulma/css/bulma.css';
    
    .signup-form {
        width: 60%;
        margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
        .signup-form {
            width: 100% !important;
        }
    }
</style>