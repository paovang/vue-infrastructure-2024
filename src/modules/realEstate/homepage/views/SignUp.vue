<template>
    <div class="signup-form">
      <h2 style="font-size: 20px; font-weight: bold;">{{ $t('messages.sign_up')}}</h2>
      <Divider/>
      <br/>
      <form @submit.prevent="submitForm">
            <label>
                {{ $t('messages.country') }}
                <span class="text-red-500"> *</span>
            </label>
            <Dropdown 
                name="countries"
                v-model="formSignUp.country_id" 
                :options="countries.data.props" 
                optionLabel="name" 
                :placeholder="$t('placeholder.dropdownSelect')" 
                class="w-full" 
                optionValue="id"
                :highlightOnSelect="true" 
            />
            <my-input-text 
                style="margin-top: 20px;"
                name="name" 
                :label="$t('messages.name')" 
                required 
                :placeholder="$t('placeholder.inputText')"  
                class="h-full" 
            />
            <my-input-text 
                name="owner" 
                :label="$t('messages.owner')" 
                required 
                :placeholder="$t('placeholder.inputText')"  
                class="h-full" 
            />
            <my-input-text 
                name="address" 
                :label="$t('messages.address')" 
                required 
                :placeholder="$t('placeholder.inputText')"  
                class="h-full" 
            />
            <my-input-text 
                name="phone_number" 
                :label="$t('messages.phone_number')" 
                required 
                :placeholder="$t('placeholder.inputText')"  
                class="h-full" 
            />
            <my-input-text 
                name="email" 
                :label="$t('messages.email')" 
                required 
                :placeholder="$t('placeholder.inputText')"  
                class="h-full" 
            />
            <my-input-password 
                name="password"
                :label="$t('messages.password')" 
                :placeholder="$t('placeholder.inputText')"  
            />
            <my-input-password 
                style="margin-top: 20px;"
                name="password_confirmation"
                :label="$t('messages.confirm_password')" 
                :placeholder="$t('placeholder.inputText')"  
            />
            <br/>
            <Divider/>
            <br/>
            <Button
                class="w-full surface-500 border-none"
                type="submit"
                :label="$t('button.sign_up')"
                :loading="state.btnLoading"
            />
      </form>
    </div>
  </template>
  
<script setup lang="ts">
    import MyInputText from '@/components/customComponents/FormInputText.vue';
    import Divider from 'primevue/divider';
    import MyInputPassword from '@/components/customComponents/FormInputPassword.vue';
    import Button from 'primevue/button';
    import { useI18n } from 'vue-i18n';
    import { useForm } from 'vee-validate'
    import { signUpSchema } from '../schemas/sign-up.schema';
    import { homerealEstateStore } from '../stores/home.store';
    import { onMounted } from 'vue';
    import Dropdown from 'primevue/dropdown';
    import { useToast } from 'primevue/usetoast';

    const { formSignUp, countries, getAllData, state, register } = homerealEstateStore();

    const { t } = useI18n();
    const toast = useToast();

    const translatedErrorMessages = {
        name: t('placeholder.inputText'),
        owner: t('placeholder.inputText'),
        address: t('placeholder.inputText'),
        phone_number: t('placeholder.inputText'),
        email: t('placeholder.inputText'),
        password: t('placeholder.inputText'),
        password_confirmation: t('placeholder.inputText'),
    }
    const { handleSubmit, handleReset } = useForm<any>({
        validationSchema: signUpSchema(translatedErrorMessages)
    })

    onMounted(async() => {
        await getAllData();
        formSignUp.country_id = countries.data.props.length > 0 ? countries.data.props[0].id : null;
    })

    const submitForm = handleSubmit(async (value: any) => {
        formSignUp.name = value.name;
        formSignUp.owner = value.owner;
        formSignUp.address = value.address;
        formSignUp.email = value.email;
        formSignUp.phone_number = value.phone_number;
        formSignUp.password = value.password;
        formSignUp.password_confirmation = value.password_confirmation;

        await register();

        if (state.error) {
            await showWarningValidateBackend();
        } else {
            await showToastSuccess();
            await handleReset();
            await getAllData();
            formSignUp.country_id = countries.data.props.length > 0 ? countries.data.props[0].id : null;
        }
    });

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.error}`, life: 3000 });
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.successfully'), life: 3000 });
    }
</script>
  
<style scoped>
  @import 'bulma/css/bulma.css';

  .signup-form {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
  