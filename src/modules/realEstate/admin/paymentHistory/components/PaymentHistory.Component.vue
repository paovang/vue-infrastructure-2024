<template>
    <Dialog 
        v-model:visible="visible" 
        modal 
        :header="$t('dialog.header.update_payment_service')" 
        :style="{ width: '50vw'}" 
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
    <div>
        <br/>
        <Fieldset :legend="$t('messages.info') + ' ' + $t('messages.owner')">
            <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                <span>
                    {{$t('messages.name')}}: {{ props.data.real_estate_list.account.name }}
                </span>
                <span>
                    {{$t('messages.owner')}}: {{ props.data.real_estate_list.account.owner }}
                </span>
                <span>
                    {{$t('messages.phone_number')}}: {{ props.data.real_estate_list.account.tel }}
                </span>
                <span>
                    {{$t('messages.address')}}: {{ props.data.real_estate_list.account.address }}
                </span>
            </div>
            <br/>
            <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                <span>
                    {{$t('messages.realestate_type')}}: {{ props.data.service_charge_list.real_estate_type.name }}
                </span>
                <span>
                    {{ $t('messages.service_model') }}: {{ props.data.real_estate_list.service_model }}
                </span>
                <span>
                    {{$t('messages.room_type')}}: {{ props.data.real_estate_list.room_type }}
                </span>
                <span>
                    {{$t('messages.zip_code')}}: {{ props.data.real_estate_list.zip_code }}
                </span>
            </div>
            <br/>
            <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                <span>
                    {{ $t('messages.wide') }}: {{ props.data.real_estate_list.wide }}
                </span>
                <span>
                    {{$t('messages.long')}}: {{ props.data.real_estate_list.long }}
                </span>
                <span>
                    {{$t('messages.country')}}: {{ props.data.service_charge_list.country.name }}
                </span>
                <span>
                    {{$t('messages.village')}}: {{ props.data.real_estate_list.village }}
                </span>
            </div>
        </Fieldset>
        <br/>
        <Fieldset :legend="$t('messages.info') + ' ' + $t('messages.service_charge')">
            <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                <span>
                    {{$t('messages.service_charge')}}: {{ props.data.service_charge }}
                </span>
                <span>
                    {{$t('messages.qty')}}: {{ props.data.qty }} / {{ props.data.unit_price }}
                </span>
                <span>
                    {{$t('messages.amount')}}: {{ props.data.amount }}
                </span>
                <span>
                    {{$t('messages.status')}}: {{ props.data.status }}
                </span>
            </div>
            <br/>
            <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                <span>
                    {{$t('messages.payment_date')}}: {{ props.data.date_payment }}
                </span>
                <span>
                    {{$t('messages.from_date')}}: {{ props.data.from_date }}
                </span>
                <span>
                    {{$t('messages.to_date')}}: {{ props.data.to_date }}
                </span>
            </div>
        </Fieldset>
        <br/>
        <Divider/>
        <br/>
        <div style="text-align: right;">
            <Button label="ອະນຸມັດ" @click="updatePayment(props.data.id, 'confirm')" />
            <span style="margin-left: 10px;">
                <Button label="ປະຕິເສດ" severity="danger" @click="updatePayment(props.data.id, 'reject')" />
            </span>
        </div>
    </div>
    </Dialog>
</template>
<script setup lang="ts">
    import Dialog from 'primevue/dialog';
    import { ref } from 'vue';
    import Fieldset from 'primevue/fieldset';
    import Divider from 'primevue/divider';
    import Button from 'primevue/button';
    import { paymentServiceHistoryStore } from '../stores/payment-history.store';
    // import Button from 'primevue/button';
    import { useI18n } from 'vue-i18n';
    import { useToast } from 'primevue/usetoast';

    const { form, state, updatePaymentService } = paymentServiceHistoryStore();

    const toast = useToast();
    const { t } = useI18n();
    
    const visible = ref<boolean>(false);
    defineExpose({ visible });
    const emit = defineEmits<{ (e: 'onSuccess'): void; (e: 'onHide'): void }>();

    const props = defineProps<{
      data: any
    }>()

    const updatePayment = async (id: string, type: string) => {
        form.id = id;
        form.type = type;

        await updatePaymentService(form);

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await clearData();
            await showToastSuccess();
            visible.value = false;
        }
    }

    const clearData = async () => {
        emit('onSuccess');

        form.id = "";
        form.type = "";
    }
    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: 'ເກີດຂໍ້ຜິດພາດ.', detail: `${state.error}`, life: 3000 });
    }
    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }
</script>