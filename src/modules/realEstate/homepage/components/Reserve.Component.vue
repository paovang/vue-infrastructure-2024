<template>
    <Dialog 
        v-model:visible="visible" 
        modal 
        @hide="clearData"
        :header="$t('dialog.header.manage_appointment')" 
        :style="{ width: '50rem' }" 
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
        <form @submit.prevent="onSubmit()" class="flex flex-column gap-3 h-full">
            <div class="flex flex-column align-items-center justify-content-center">
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <my-input-text 
                            name="customer" 
                            :label="$t('messages.customer')" 
                            required 
                            :placeholder="$t('placeholder.inputText')"  
                            class="h-full" 
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12" style="margin-top: -30px">
                    <div class="flex flex-column">
                        <my-input-text
                            name="phone_number"
                            :label="$t('messages.phone_number')"
                            required
                            :use-group="true"
                            :placeholder="$t('placeholder.inputText')"  
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12" style="margin-top: -30px">
                    <div class="flex flex-column">
                        <label>
                            {{ $t('messages.date') }}
                            <span class="text-red-500"> *</span>
                        </label>
                        <Calendar 
                            v-model="form.date_appointment" 
                            showIcon iconDisplay="input" 
                            inputId="icondisplay" 
                            style="width: 100%;" 
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12" style="margin-top: -8px">
                    <div class="flex flex-column">
                        <my-input-text-area 
                            name="description" 
                            :label="$t('messages.details')" 
                            required 
                            :placeholder="$t('placeholder.inputTextDetails')"  
                            class="h-full" 
                        />
                    </div>
                </div>
                <div class="col-12 md:col-12">
                    <div class="flex flex-column">
                        <Button type="submit" :label="$t('button.appointment')" />
                    </div>
                </div>
            </div>
        </form>
    </Dialog>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import Dialog from 'primevue/dialog';
    import MyInputText from '@/components/customComponents/FormInputText.vue';
    import MyInputTextArea from '@/components/customComponents/FormTextArea.vue';
    import Calendar from 'primevue/calendar';
    import { homerealEstateStore } from '@/modules/realEstate/homepage/stores/home.store'
    import Button from 'primevue/button';
    import { reserveSchema } from '../schemas/reserve.schema';
    import { useForm } from 'vee-validate';
    import { useRoute } from 'vue-router';
    import { useToast } from 'primevue/usetoast';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
    const toast = useToast();
    const route = useRoute();

    const { form, state, reserveRealEstate } = homerealEstateStore();

    const visible = ref<boolean>(false);
    defineExpose({ visible });

    const emit = defineEmits<{ (e: 'onSuccess'): void; (e: 'onHide'): void }>()

    const { handleSubmit, handleReset } = useForm<any>({
        validationSchema: reserveSchema
    })

    const onSubmit = handleSubmit(async (value) => {
        form.customer_name = value.customer;
        form.customer_tel = value.phone_number;
        form.description = value.description;
        form.id = (route.params.id as string);

        await reserveRealEstate();

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
            await clearData();
            visible.value = false;
        }
    });

    const clearData = async () => {
        await handleReset();
        form.customer_name = '';
        form.customer_tel = '';
        form.id = '';
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }
</script>