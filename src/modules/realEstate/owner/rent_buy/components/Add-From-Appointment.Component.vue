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
                    <label>
                        {{ $t('messages.appointment') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        v-model="form.appointment_id" 
                        :options="stateAppointment.data.props" 
                        :optionLabel="option => `${option.reserve_number} ( ${option.customer_name} - ${option.customer_tel} ) - ${option.estate_list.name} (${option.estate_list.service_model})`" 
                        :placeholder="$t('placeholder.dropdownSelect')"  
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        required
                        @change="filterAppointment(form.appointment_id)"
                    />
                </div>
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
                <div class="col-12 md:col-12" style="margin-top: -20px;" v-if="showFromDate">
                    <div class="flex flex-column">
                        <form-calendar
                            name="from_date"
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
                        v-model="form.unit_price" 
                        :options="stateGetPrice.data.props" 
                        :optionLabel="option => `${option.unit_price} - ${formatNumber(option.price, option.currency)}`" 
                        :placeholder="$t('placeholder.dropdownSelect')"  
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        required
                    />
                </div>
                <div class="col-12 md:col-12" v-if="showFromDate">
                    <div class="flex flex-column">
                        <my-input-number
                            name="quantity"
                            :label="$t('messages.qty')"
                            :placeholder="$t('placeholder.inputText')" 
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12" :style="{ marginTop: showFromDate === false ? '0px' : '-20px' }">
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
                    <Button 
                        type="submit" 
                        :label="$t('button.save') +  ' ' + $t('button.rent_buy')" 
                        :loading="btnLoading"
                        :disabled="validationPermissions(GET_PERMISSIONS.RENT_BUY.CREATE)"
                    />
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
    import { rentAndBuyStore } from '../stores/rent-buy.store';
    import { useToast } from 'primevue/usetoast';
    import { rentBuyServiceSchema } from '../schemas/rent-buy.schema';
    import Dropdown from 'primevue/dropdown';
    import MyInputNumber from '@/components/customComponents/FormInputNumber.vue';
    import { appointmentStore } from '@/modules/realEstate/owner/appointment/stores/appointment.store';
    import { formatNumber } from '@/common/utils/format.currency';
    import { GET_PERMISSIONS } from '@/common/utils/const';
    import { validationPermissions } from '@/common/utils/validation-permissions';


    const { state: stateAppointment, setStateFilter: setStateFilterAppointment, getAll: getAllAppointment } = appointmentStore();
    const { form, create, state, getRealEstatePrices, stateGetPrice } = rentAndBuyStore();

    const { t } = useI18n();
    const toast = useToast();

    const visible = ref<boolean>(false);
    defineExpose({ visible });
    const emit = defineEmits<{ (e: 'onSuccess'): void; (e: 'onHide'): void }>();
    const btnLoading = ref<boolean>(false);

    const showFromDate = ref<boolean>(true);

    const translatedErrorMessages = {
        remark: t('placeholder.inputText'),
        date: t('placeholder.calendarSelect'),
    }

    const { handleSubmit, handleReset } = useForm<any>({
        validationSchema: rentBuyServiceSchema(translatedErrorMessages)
    })

    const onSubmit = handleSubmit(async (value) => {
        form.source_type = 'fromAppointment';
        form.qty = value.quantity;
        form.detail = value.remark;
        form.date_appointment = value.date;
        form.from_date = value.from_date;

        await create();

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await clearData();
            await showToastSuccess();
            await getAllAppointment();
            visible.value = false;
        }
    });

    const filterAppointment = async (value: any) => {
        const filteredProps = stateAppointment.data.props.filter(option => option.id == value);

        if (filteredProps) {
            showFromDate.value = filteredProps[0].estate_list?.service_model === 'rent' ? true : false;

            await getRealEstatePrices(filteredProps[0].estate_list?.id as number);
        }
    }

    const clearData = async () => {
        await handleReset();
        if (setStateFilterAppointment.filter) {
            setStateFilterAppointment.filter.status = 'all';
            setStateFilterAppointment.limit = 10;
        }
        emit('onSuccess');
    }

    onMounted(async() => {
        if (setStateFilterAppointment.filter) {
            setStateFilterAppointment.filter.status = 'pending';
            setStateFilterAppointment.limit = 1000;
        }
        await getAllAppointment();
    })

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }
</script>