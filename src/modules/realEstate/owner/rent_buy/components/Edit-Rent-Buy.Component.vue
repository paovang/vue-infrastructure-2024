<template>
    <Dialog 
        v-model:visible="visible" 
        modal 
        @hide="clearData"
        :header="$t('dialog.header.manage_Rent_Buy')" 
        :style="{ width: '50vw' }" 
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
        <form @submit.prevent="onSubmit()" class="flex flex-column gap-3 h-full">
            <div class="flex flex-column align-items-center justify-content-center">
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <my-input-text
                            name="customer_name" 
                            :label="$t('messages.customer_name')" 
                            required 
                            :placeholder="$t('placeholder.inputText')" 
                            class="h-full" 
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12" style="margin-top: -20px;">
                    <div class="flex flex-column">
                        <my-input-text
                            name="customer_tel"
                            :label="$t('messages.customer_tel')"
                            required
                            :placeholder="$t('placeholder.inputText')" 
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12" style="margin-top: -20px;">
                    <div class="flex flex-column">
                        <form-calendar
                            name="date"
                            :label="$t('messages.date_rent_buy')"
                            :placeholder="$t('placeholder.calendarSelect')"
                            required
                            selection-mode="single"
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12" style="margin-top: -20px;" v-if="isShow">
                    <div class="flex flex-column">
                        <form-calendar
                            name="from_date"
                            :label="$t('messages.start_date')"
                            :placeholder="$t('placeholder.calendarSelect')"
                            selection-mode="single"
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12" style="margin-top: -20px;" v-if="isShow">
                    <div class="flex flex-column">
                        <my-input-number
                            name="quantity"
                            :label="$t('messages.qty')"
                            :placeholder="$t('placeholder.inputText')" 
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12" style="margin-top: -20px;">
                    <div class="flex flex-column">
                        <input-text-area
                            name="remark"
                            :label="$t('messages.remark')"
                            required
                            :placeholder="$t('placeholder.inputText')" 
                        />
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-12">
                <div class="flex flex-column">
                    <Button type="submit" :label="$t('button.edit') +  ' ' + $t('button.rent_buy')" :loading="btnLoading"/>
                </div>
            </div>
        </form>
    </Dialog>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue';
    import Dialog from 'primevue/dialog';
    import InputTextArea from '@/components/customComponents/FormTextArea.vue';
    import FormCalendar from '@/components/customComponents/FormCalendar.vue';
    import myInputText from '@/components/customComponents/FormInputText.vue';
    import { useForm } from 'vee-validate';
    import Button from 'primevue/button';
    import { useI18n } from 'vue-i18n';
    import { rentAndBuyStore } from '../stores/rent-buy.store';
    import { useToast } from 'primevue/usetoast';
    import MyInputNumber from '@/components/customComponents/FormInputNumber.vue';
    import { rentBuyServiceSchema } from '../schemas/rent-buy.schema';



    const { form, update, state } = rentAndBuyStore();

    const { t } = useI18n();
    const toast = useToast();

    const visible = ref<boolean>(false);
    defineExpose({ visible });
    const emit = defineEmits<{ (e: 'onSuccess'): void; (e: 'onHide'): void }>();
    const btnLoading = ref<boolean>(false);
    const isShow = ref<boolean>(true);

    const props = defineProps<{
      form?: any
    }>()

    const translatedErrorMessages = {
        remark: t('placeholder.inputText'),
        date: t('placeholder.calendarSelect')
    }

    const { handleSubmit, handleReset, setFieldValue } = useForm<any>({
        validationSchema: rentBuyServiceSchema(translatedErrorMessages)
    })

    const onSubmit = handleSubmit(async (value) => {
        form.id = props.form.id;
        form.qty = value.quantity;
        form.detail = value.remark;
        form.date_appointment = value.date;
        form.from_date = value.from_date;
        form.customer_name = value.customer_name;
        form.customer_tel = value.customer_tel;
        form.service_model = props.form.service_model;
        
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

    watch(() => props.form, (newValue) => {
        if (newValue) {
            setFieldValue('customer_name', newValue.customer_name || '');
            setFieldValue('customer_tel', newValue.customer_tel || '');
            setFieldValue('date', newValue.date || '');
            setFieldValue('from_date', newValue.from_date || '');
            setFieldValue('quantity', newValue.qty || '');
            setFieldValue('remark', newValue.detail || '');

            console.log(newValue.service_model);
            if (newValue.service_model === 'buy') {
                isShow.value = false;
            } else {
                isShow.value = true;
            }
        }
    });

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }
</script>