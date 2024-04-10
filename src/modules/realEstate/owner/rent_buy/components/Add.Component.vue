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
                        {{ $t('messages.house') }}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        v-model="form.real_estate_id" 
                        :options="stateGetRealEstateOnline.data.props" 
                        :optionLabel="option => `${option.real_esate_number} - ${option.real_estate_type.name} - ${option.room_type} - ${option.service_model}`" 
                        :placeholder="$t('placeholder.dropdownSelect')"  
                        class="w-full" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        required
                        @change="filterRealEstateOnline(form.real_estate_id)"
                    />
                </div>
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
    import { formatNumber } from '@/common/utils/format.currency';
    import myInputText from '@/components/customComponents/FormInputText.vue';
import { GET_PERMISSIONS } from '@/common/utils/const';
import { validationPermissions } from '@/common/utils/validation-permissions';


    const { form, create, state, getRealEstatePrices, stateGetPrice, stateGetRealEstateOnline, getRealEstateOnline } = rentAndBuyStore();

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
        form.source_type = 'notAppointment';
        form.qty = value.quantity;
        form.detail = value.remark;
        form.date_appointment = value.date;
        form.from_date = value.from_date;
        form.customer_name = value.customer_name;
        form.customer_tel = value.customer_tel;

        await create();

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await clearData();
            await showToastSuccess();
            await getRealEstateOnline();
            visible.value = false;
        }
    });

    const filterRealEstateOnline = async (value: any) => {
        const filteredProps = stateGetRealEstateOnline.data.props.filter((option: any) => option.id == value);

        if (filteredProps) {
            showFromDate.value = filteredProps[0].service_model === 'rent' ? true : false;

            await getRealEstatePrices(filteredProps[0]?.id as number);
        }
    }

    const clearData = async () => {
        await handleReset();
        emit('onSuccess');
    }

    onMounted(async() => {
        await getRealEstateOnline();
    })

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }
</script>