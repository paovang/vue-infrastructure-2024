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
                        <form-calendar
                            name="date"
                            :label="$t('messages.date_rent_buy')"
                            :placeholder="$t('placeholder.calendarSelect')"
                            required
                            selection-mode="single"
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12" style="margin-top: -20px;">
                    <div class="flex flex-column">
                        <form-calendar
                            name="start_date"
                            :label="$t('messages.start_date')"
                            :placeholder="$t('placeholder.calendarSelect')"
                            selection-mode="single"
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12" style="margin-top: -20px;">
                    <label>
                        {{ $t('messages.service_model') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px;"
                        v-model="form.service_model" 
                        :options="servicemodels" 
                        optionLabel="name" 
                        :placeholder="$t('placeholder.dropdownSelect')" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        class="w-full" 
                    />
                </div>
                <div class="col-12 md:col-12">
                    <label>
                        {{ $t('messages.service_model') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        v-model="form.unit_price" 
                        :options="unitPrices" 
                        optionLabel="name" 
                        :placeholder="$t('placeholder.dropdownSelect')"  
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        required
                    />
                </div>
                <div class="col-12 md:col-12">
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
                    <Button type="submit" :label="$t('button.save') +  ' ' + $t('button.rent_buy')" :loading="btnLoading"/>
                </div>
            </div>
        </form>
    </Dialog>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import Dialog from 'primevue/dialog';
    import InputTextArea from '@/components/customComponents/FormTextArea.vue';
    import FormCalendar from '@/components/customComponents/FormCalendar.vue';
    import { useForm } from 'vee-validate';
    import Button from 'primevue/button';
    import { useI18n } from 'vue-i18n';
    import { appointmentStore } from '../stores/appointment.store';
    import { useToast } from 'primevue/usetoast';
    import { rentBuyServiceSchema } from '../schemas/rent-buy.schema';
    import Dropdown from 'primevue/dropdown';
    import MyInputNumber from '@/components/customComponents/FormInputNumber.vue';

    const { t } = useI18n();
    const toast = useToast();

    const visible = ref<boolean>(false);
    defineExpose({ visible });
    const emit = defineEmits<{ (e: 'onSuccess'): void; (e: 'onHide'): void }>();
    const btnLoading = ref<boolean>(false);

    const props = defineProps<{
      id?: string
    }>()

    const servicemodels = ref([
        { id: 'buy', name: 'ຊື້-ຂາຍ' },
        { id: 'rent', name: 'ເຊົ່າ' }
    ]);

    const unitPrices = ref([
        { id: 'sale', name: 'ບໍລິການ ຊື້-ຂາຍ' },
        { id: 'day', name: 'ເຊົ່າເປັນມື້' },
        { id: 'month', name: 'ເຊົ່າເປັນເດືອນ' },
        { id: 'year', name: 'ເຊົ່າເປັນປີ' },
    ]);

    const translatedErrorMessages = {
        reason: t('placeholder.inputText'),
        date: t('placeholder.calendarSelect'),
    }

    const { form, update, state } = appointmentStore();

    const { handleSubmit, handleReset } = useForm<any>({
        validationSchema: rentBuyServiceSchema(translatedErrorMessages)
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

    onMounted(async() => {
        form.service_model = 'buy';
        form.unit_price = 'sale';
    })

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }
</script>../stores/rent-buy.store