<template>
  <div
    class="flex align-items-center justify-content-center min-h-screen lg:grid lg:nested-grid lg:m-0"
  >
    <div
      class="col-8 min-h-screen hidden lg:block backgroundImage bg-cover bg-center bg-no-repeat"
    />
    <div class="col-4 flex flex-column align-items-center">
      <div class="col-12 flex justify-content-center flex-column align-items-center">
        <div
          class="flex flex-column border-1 border-100 border-round-md p-5 shadow-1 lg:border-none lg:shadow-none"
        >
          <div class="flex flex-column align-items-center">
            <img src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/1286_bird-01.png" style="width: 5rem" />
            <span class="font-bold text-3xl">UK LAOS</span>
          </div>
          <form @submit.prevent="loginUser()" class="mt-3">
            <div class="flex flex-column gap-3 mb-3">
                <div>
                    <span class="p-input-icon-left">
                    <my-input-text
                        name="email"
                        label="ອີເມວ"
                        class="w-18rem"
                        placeholder="ກະລຸນາປ້ອນອີເມວກ່ອນ..."
                    />
                    </span>
                </div>
              <div>
                <my-input-password 
                    style="width: 100% !important;"
                    name="password"
                    label="ລະຫັດຜ່ານ"
                    placeholder="ກະລຸນາປ້ອນກ່ອນ..." 
                />
              </div>
            </div>
            <div>
              <Button
                class="w-full surface-500 border-none"
                type="submit"
                label="ເຂົ້າສູ່ລະບົບ"
                :loading="state.isLoading"
              />
            </div>
          </form>
        </div>
        <span class="white-space-nowrap font-medium ml-2 text-color"
          >&#9400;2023 Uk Laos | All Rights Reserved</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import MyInputText from '@/components/customComponents/FormInputText.vue'
    import MyInputPassword from '@/components/customComponents/FormInputPassword.vue'
    import Button from 'primevue/button'
    import { useForm } from 'vee-validate';
    import { loginSchema } from '../schema/login.shema'
    import { useAuthStore } from '../stores/auth.store'
    import { useToast } from "primevue/usetoast";

    const { form, state, login } = useAuthStore()
    const toast = useToast();
    const { handleSubmit, handleReset } = useForm<any>({
        validationSchema: loginSchema
    })

    const loginUser = handleSubmit(async (value) => {
        await login(value);

        if (state.errorMessage) {
            showWarningValidateBackend();
        } else {
            showToastSuccess();
            handleReset();
        }
    })

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: 'ສຳເລັດເເລ້ວ', detail: 'ຍີນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບ.', life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: 'ເເຈ້ງເຕືອນ', detail: `${state.errorMessage}`, life: 3000 });
    }

</script>

<style scoped>
    .backgroundImage {
        background: url('https://www.journeyera.com/wp-content/uploads/2022/01/luxury-5-star-hotels-kathmandu-thamel-251085752.jpg');
    }
    /* .p-input-icon-right > .p-inputtext {
        width: 100% !important;
    } */
</style>