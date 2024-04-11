<template>
     <Dialog 
        v-model:visible="visible" 
        modal 
        @hide="clearData"
        :header="$t('messages.change_password')" 
        :style="{ width: '50vw'}" 
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
        <form @submit.prevent="onSubmit()" class="flex flex-column gap-3 h-full">
            <div class="columns is-multiline">
                <div class="column is-12">
                    <my-input-password 
                        name="password"
                        :label="$t('messages.password')" 
                        :placeholder="$t('placeholder.inputText')"  
                    />
                </div>
                <div class="column is-12" style="margin-top: -10px;">
                    <my-input-password 
                        name="password_confirmation"
                        :label="$t('messages.confirm_password')" 
                        :placeholder="$t('placeholder.inputText')"  
                    />
                </div>
            </div>
            <div style="text-align: right;">
                <Button
                    type="submit"
                    severity="warning" 
                    :loading="btnLoading"
                    style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'"
                >
                    <i class="pi pi-lock" style="margin-right: 5px;"></i>
                    {{ $t('button.change_password') }}
                </Button>
            </div>
        </form>
    </Dialog>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Dialog from 'primevue/dialog';
    import MyInputPassword from '@/components/customComponents/FormInputPassword.vue';
    import Button from 'primevue/button';
    import { useForm } from 'vee-validate';
    import { useI18n } from 'vue-i18n';
    import { changePasswordSchema } from '../schema/change-user-password.schema';
    import { useToast } from 'primevue/usetoast';

    const { t } = useI18n();
    const toast = useToast();

    const btnLoading = ref(false);
    const visible = ref<boolean>(false);
    defineExpose({ visible });
    const emit = defineEmits<{ (e: 'onSuccess'): void; (e: 'onHide'): void }>();

    const props = defineProps<{
        form: any,
        userId: any,
        changeUserPassword: any,
        state: any,
    }>()

    const clearData = async () => {
        emit('onSuccess');
        visible.value = false;
        handleReset();
    }

    const translatedErrorMessages = {
        password: t('placeholder.inputText'),
        password_confirmation: t('placeholder.inputText'),
    }

    const { handleSubmit, handleReset } = useForm<any>({
        validationSchema: changePasswordSchema(translatedErrorMessages)
    })

    const onSubmit = handleSubmit(async (value: any) => {
        props.form.user_id = props.userId;
        props.form.password = value.password;
        props.form.password_confirmation = value.password_confirmation;

        await props.changeUserPassword();

        if (props.state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
            await clearData();
        }   
    })

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${props.state.error}`, life: 3000 });
    }
</script>

<style scoped>

</style>