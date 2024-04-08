<template>
    <Dialog 
        v-model:visible="visible" 
        modal 
        :header="$t('dialog.header.service_charge')" 
        :style="{ width: '50vw'}" 
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
        <form @submit.prevent="onSubmit()" class="flex flex-column gap-3 h-full">
            <div class="columns is-multiline">
                <div class="column is-12">
                    <label>
                        {{ $t('messages.select')}} {{ $t('messages.realestate_type')}}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px; width: 100% !important"
                        v-model="form.real_estate_type_id" 
                        :options="props.realestateType.props" 
                        optionLabel="name" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        :placeholder="$t('placeholder.dropdownSelect')" 
                        class="w-full md:w-14rem" 
                    />
                </div>
                <div class="column is-12" style="margin-top: -10px;">
                    <label>
                        {{ $t('messages.select')}} {{ $t('messages.unit_price')}}
                        <span class="text-red-500"> *</span>
                    </label>
                    <Dropdown 
                        style="margin-top: 8px; width: 100% !important"
                        v-model="form.unit_price" 
                        :options="unitPrices" 
                        optionLabel="name" 
                        optionValue="id"
                        :highlightOnSelect="true" 
                        :placeholder="$t('placeholder.dropdownSelect')"  
                        class="w-full md:w-14rem" 
                    />
                </div>
                <div class="column is-12">
                    <Divider />
                    <br/>
                    <div class="columns is-12" v-for="(input, index) in createInputs" :key="index">
                        <div class="column is-6" style="margin-top: -10px;">
                            <label>
                                {{ $t('messages.select')}} {{ $t('messages.currency')}}
                                <span class="text-red-500"> *</span>
                            </label>
                            <Dropdown 
                                style="margin-top: 8px; width: 100% !important"
                                v-model="input.currency_id" 
                                :options="props.currencies.data.props" 
                                optionLabel="short_name" 
                                optionValue="id"
                                :highlightOnSelect="true" 
                                :placeholder="$t('placeholder.dropdownSelect')"  
                                class="w-full md:w-14rem" 
                            />
                        </div>
                        <div class="column is-5" style="margin-top: -8px;">
                            <label>
                                {{ $t('messages.service_charge') }}
                                <span class="text-red-500"> *</span>
                            </label>
                            <input-number 
                                v-model="(input.service_charge as number)" 
                                :placeholder="$t('placeholder.inputNumber')" 
                                required 
                                style="margin-top:5px; font-family: 'NotoSansLao','Montserrat', 'sans-serif'; width: 100% !important;" 
                            />
                        </div>
                        <div class="column is-1" style="margin-top: 20px" v-if="index == 0">
                            <Button icon="pi pi-plus-circle" severity="info" @click="addInput" />
                        </div>
                        <div class="column is-1" style="margin-top: 20px" v-if="index > 0">
                            <Button icon="pi pi-times-circle" severity="danger" @click="removeInput" />
                        </div>
                    </div>
                </div>
            </div>
            <Divider style="margin-top: -20px;" />
            <div style="text-align: right;">
                <Button
                    type="submit"
                    severity="warning" 
                    :loading="btnLoading"
                    style="font-family: 'NotoSansLao','Montserrat', 'sans-serif'"
                >
                    <i class="pi pi-plus-circle" style="margin-right: 5px;"></i>
                    {{ $t('button.save') }} {{ $t('messages.service')}}
                </Button>
            </div>
        </form>
    </Dialog>
</template>

<script setup lang="ts">
    import Dialog from 'primevue/dialog';
    import { useI18n } from 'vue-i18n';
    import { useToast } from 'primevue/usetoast';
    import { onMounted, ref } from 'vue';
    import { realEstateServiceStore } from '../stores/real-estate-service.store';
    import Dropdown from 'primevue/dropdown';
    import Button from 'primevue/button';
    import Divider from 'primevue/divider';
    import { RealEstateServiceEntity } from '../entities/real-estate-service.entity';
    import InputNumber from 'primevue/inputnumber'

    
    const { form, register, state } = realEstateServiceStore();
    

    const toast = useToast();
    const { t } = useI18n();

    const btnLoading = ref<boolean>(false);
    const visible = ref<boolean>(false);
    defineExpose({ visible });
    const emit = defineEmits<{ (e: 'onSuccess'): void; (e: 'onHide'): void }>();

    const props = defineProps<{
        realestateType: any,
        unitPrices: any,
        currencies: any,
    }>()

    const createInputs = ref<RealEstateServiceEntity['serviceChargePrices']>([
        { service_charge: '', currency_id: '' }
    ]);

    const addInput = async () => {
        if (createInputs.value) {
            if (createInputs.value?.length > 2) {
                toast.add({ severity: 'error', summary: t('toast.summary.must_be_length_three'), detail: t('toast.detail.cancel_delete'), life: 3000 });
            } else {
                createInputs.value.push({ service_charge: '', currency_id: '' });
            }
        }
    }

    const removeInput  = async (index: any) => {
        if (createInputs.value) {
            createInputs.value.splice(index, 1);
        }
    }


    const onSubmit = async () => {
        form.serviceChargePrices = createInputs.value;

        await register();

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
            
            emit('onSuccess');
            visible.value = false;
        }   
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    onMounted(async () => {
        form.unit_price = 'day';
    })
</script>

<style scoped>
    @import 'bulma/css/bulma.css';
</style>