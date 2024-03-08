<template>
    <Dialog 
        v-model:visible="visible" 
        modal 
        @hide="clearData"
        :header="$t('messages.update_appointment')" 
        :style="{ width: '50vw' }" 
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
        <form @submit.prevent="onSubmit()" class="flex flex-column gap-3 h-full">
            <div class="flex flex-column align-items-center justify-content-center">
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <input-text-area
                            name="reason"
                            :label="$t('messages.reason')"
                            required
                            :placeholder="$t('placeholder.inputText')" 
                        />
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-12">
                <div class="flex flex-column">
                    <Button type="submit" severity="danger" :label="$t('button.update') +  ' ' + $t('button.appointment')" :loading="btnLoading"/>
                </div>
            </div>
        </form>
    </Dialog>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Dialog from 'primevue/dialog';
    import InputTextArea from '@/components/customComponents/FormTextArea.vue';
    import { useForm } from 'vee-validate';
    import { appointmentServiceSchema } from '../schemas/appointment.schema';
    import Button from 'primevue/button';
    import { useI18n } from 'vue-i18n';
    import { appointmentStore } from '../stores/appointment.store';
    import { useToast } from 'primevue/usetoast';


    const { t } = useI18n();
    const toast = useToast();

    const visible = ref<boolean>(false);
    defineExpose({ visible });
    const emit = defineEmits<{ (e: 'onSuccess'): void; (e: 'onHide'): void }>();
    const btnLoading = ref<boolean>(false);

    const props = defineProps<{
      id?: string
    }>()

    const translatedErrorMessages = {
        reason: t('placeholder.inputText')
    }

    const { form, update, state } = appointmentStore();

    const { handleSubmit, handleReset } = useForm<any>({
        validationSchema: appointmentServiceSchema(translatedErrorMessages)
    })

    const onSubmit = handleSubmit(async (value) => {
        form.id = props.id;
        form.reason = value.reason;
        await update();

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await clearData();
            await showToastSuccess();
            visible.value = false;
        }
    });

    const clearData = async () => {
        await handleReset();
        emit('onSuccess');
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }
</script>