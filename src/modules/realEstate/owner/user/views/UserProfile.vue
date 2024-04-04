<template>
    <div class="card">
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span class="p-input-icon-left w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                <h2 style="font-weight: bold; font-size: 20px;" class="arrow-left">
                    {{ $t('messages.update') }} {{ $t('messages.profile') }}
                </h2>
            </span>
        </div>
        <Divider/>
        <br/>
        <form @submit.prevent="onSubmit()" class="flex flex-column gap-3 h-full">
            <div class="columns is-12 is-multiline">
                <div class="column is-4 is-mobile-12">
                    <my-input-text 
                        ref="autoFocusCursor"
                        name="name" 
                        :label="$t('messages.name')"
                        required 
                        :placeholder="$t('placeholder.inputText')" 
                        class="h-full" 
                    />
                </div>
                <div class="column is-4 is-mobile-12">
                    <my-input-text 
                        ref="autoFocusCursor"
                        name="owner" 
                        :label="$t('messages.owner')"
                        required 
                        :placeholder="$t('placeholder.inputText')" 
                        class="h-full" 
                    />
                </div>
                <div class="column is-4 is-mobile-12">
                    <my-input-text 
                        ref="autoFocusCursor"
                        name="phone_number" 
                        :label="$t('messages.phone_number')"
                        required 
                        :placeholder="$t('placeholder.inputText')" 
                        class="h-full" 
                    />
                </div>
                <div class="column is-8 is-mobile-12" style="margin-top: -30px;">
                    <my-input-text 
                        ref="autoFocusCursor"
                        name="address" 
                        :label="$t('messages.address')"
                        required 
                        :placeholder="$t('placeholder.inputText')" 
                        class="h-full" 
                    />
                </div>
                <div class="column is-4 is-mobile-12" style="margin-top: -30px;">
                    <my-input-text 
                        ref="autoFocusCursor"
                        name="id_no" 
                        :label="$t('messages.id_no')"
                        required 
                        :placeholder="$t('placeholder.inputText')" 
                        class="h-full" 
                    />
                </div>
                <div class="column is-12 is-mobile-12" style="margin-top: -30px;">
                    <my-input-file 
                        name="id_image" 
                        :label="$t('messages.id_image')" 
                        required 
                        :multiple="true"
                        class="h-full" 
                        @change="handleFileIdImageChange"
                    />
                </div>
                <div class="column is-4 is-mobile-12" style="margin-top: -30px;">
                    <my-input-text 
                        ref="autoFocusCursor"
                        name="email" 
                        :label="$t('messages.email')"
                        required 
                        :placeholder="$t('placeholder.inputText')" 
                        class="h-full" 
                    />
                </div>
                <div class="column is-8 is-mobile-12" style="margin-top: -30px;">
                    <my-input-file 
                        name="profile" 
                        :label="$t('messages.profile')" 
                        required 
                        :multiple="true"
                        class="h-full" 
                        @change="handleFileChange"
                    />
                </div>
            </div>
            <Divider style="margin-top: -20px;"/>
            <div style="text-align: right;">
                <Button type="submit" :label="$t('button.edit_data')" :loading="state.btnLoading" />
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import MyInputText from '@/components/customComponents/FormInputText.vue';
    import { useToast } from 'primevue/usetoast';
    import { useI18n } from 'vue-i18n';
    import { editUserServiceSchema } from '../schemas/user.schema';
    import { useForm } from 'vee-validate';
    import MyInputFile from '@/components/customComponents/FormInputFile.vue';
    import { showNotificationToast } from '@/common/utils/toast';
    import { isValidFileSize, validFileTypes } from '@/common/utils/validation.file';
    import { uploadFileToServer } from '@/common/utils/upload-file';
    import axios from 'axios';
    import Divider from 'primevue/divider';
    import { ownerUserStore } from '../stores/user.store';
    import Button from 'primevue/button';

    const toast = useToast();
    const { t } = useI18n();

    const { form, state, getUserProfile, getProfile, updateProfile  } = ownerUserStore();


    const translatedErrorMessages = {
        name: t('placeholder.inputText'),
        email: t('placeholder.inputText')
    }

    const { handleSubmit, setFieldValue } = useForm<any>({
        validationSchema: editUserServiceSchema(translatedErrorMessages)
    })

    const onSubmit = handleSubmit(async (value: any) => {
        form.customer_id = getUserProfile.data.props.real_estate_account.id;
        form.id = getUserProfile.data.props.id;
        form.name = value.name;
        form.owner = value.owner;
        form.email = value.email;
        form.id_no = value.id_no;
        form.tel = value.phone_number;
        form.address = value.address;
        form.profile = selectedProfile.value;
        form.id_image = selectedIdImage.value;

        await updateProfile();

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
            selectedIdImage.value = "";
            const inputIdImage = document.getElementById('id_image') as HTMLInputElement;
            inputIdImage.value = '';

            selectedProfile.value = "";
            const inputProfile = document.getElementById('profile') as HTMLInputElement;
            inputProfile.value = '';

            window.location.reload();
        }   
    })

    const selectedIdImage = ref();
    const handleFileIdImageChange = async (event: any) => {
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

        await uploadFileToServer({ axios, file, state, selectedImage: selectedIdImage, toast, t });
    }

    const selectedProfile = ref();
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

        await uploadFileToServer({ axios, file, state, selectedImage: selectedProfile, toast, t });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }

    onMounted(async () => {
        await getProfile();

        setFieldValue('name', getUserProfile.data.props.name);
        setFieldValue('owner', getUserProfile.data.props.real_estate_account.owner);
        setFieldValue('phone_number', getUserProfile.data.props.real_estate_account.tel);
        setFieldValue('id_no', getUserProfile.data.props.real_estate_account.id_no);
        setFieldValue('address', getUserProfile.data.props.real_estate_account.address);
        setFieldValue('email', getUserProfile.data.props.email);
    })
</script>

<style scoped>
    @import 'bulma/css/bulma.css';
</style>