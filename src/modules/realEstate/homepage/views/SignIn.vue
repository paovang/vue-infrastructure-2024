<template>
    <div class="login-container">
        <form class="login-form" @submit.prevent="loginUser()">
            <h2 style="margin-top: -10px; text-align: center">{{ $t('messages.welcome_to_login') }}</h2>
            <Divider style="border: 1px solid #3736362f; margin-top: 10px"/>
            <br/>
            <div class="input-group">
                <my-input-text
                    name="email"
                    :label="$t('messages.email')"
                    class="w-18rem"
                    :placeholder="$t('placeholder.inputText')" 
                    style="width: 100% !important"
                />
            </div>
            <div class="input-group" style="margin-top: -10px;">
                <div class="password-input-container">
                  <my-input-text-password
                      :type="showPassword"
                      name="password"
                      :label="$t('messages.password')"
                      class="w-18rem"
                      required
                      :placeholder="$t('placeholder.inputText')"
                      style="width: 100% !important" 
                  />
                  <span class="toggle-password" @click="togglePasswordVisibility">
                    <i :class="['pi', showPassword ? 'pi-eye-slash' : 'pi-eye']"></i>
                  </span>
                </div>
            </div>
            <button>{{ $t('messages.sign_in') }}</button>
            <div class="bottom-text">
                <p>{{ $t('messages.not_account') }}? <a @click="goToSignUp">{{ $t('messages.sign_up') }}</a></p>
                <p><a>{{ $t('messages.forgot_password') }}?</a></p>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import Divider from 'primevue/divider';
    import MyInputText from '@/components/customComponents/FormInputText.vue'
    import MyInputTextPassword from '@/components/customComponents/FormInputPass.vue'
    import { ref } from 'vue';
    import { useForm } from 'vee-validate';
    import { loginSchema } from '@/modules/auth/schema/login.shema';
    import { useAuthStore } from '@/modules/auth/stores/auth.store';
    import { useToast } from 'primevue/usetoast';
    import { useI18n } from 'vue-i18n';
    import { useRouter } from 'vue-router';

    const toast = useToast();
    const router = useRouter();
    const { t } = useI18n();

    const { form, state, login } = useAuthStore()

    const { handleSubmit, handleReset } = useForm<any>({
        validationSchema: loginSchema
    })

    const loginUser = handleSubmit(async (value) => {
      if (!value.email || !value.password) {
        await checkEmailPassword();
        return true;
      }

      await login(value);

      if (state.errorMessage) {
        showWarningValidateBackend();
      } else {
        showToastSuccess();
        handleReset();
      }
    })


    const goToSignUp = async () => {
      router.push({ name: 'sign.up'});
    }

    const showToastSuccess = () => {
        toast.add({ severity: 'success', summary: t('toast.summary.success'), detail: t('toast.detail.login_success'), life: 3000 });
    }

    const checkEmailPassword = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: t('toast.detail.check_email_password'), life: 3000 });
    }

    const showWarningValidateBackend = () => {
        toast.add({ severity: 'error', summary: t('toast.summary.error'), detail: `${state.errorMessage}`, life: 3000 });
    }


    const showPassword = ref(false);
    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    }
</script>

<style scoped>
.password-input-container {
    position: relative;
}

.password-input {
    padding-right: 30px; /* Adjust as needed based on icon size */
}

.toggle-password {
    position: absolute;
    top: 68%;
    right: 8px; /* Adjust as needed */
    transform: translateY(-50%);
    cursor: pointer;
}


body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.login-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 400px;
  width: 90%;
  margin: 0 auto;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-form h1 {
  margin-bottom: 10px;
  color: #333;
}

.login-form p {
  margin-bottom: 20px;
  color: #777;
}

button {
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #0e0e0f;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.bottom-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: #777;
}

.bottom-text p {
  margin-bottom: 10px;
}

.bottom-text a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.bottom-text a:hover {
  color: #0056b3;
  cursor: pointer;
}

/* Responsive */
@media screen and (max-width: 600px) {
  .login-container {
    width: 100%;
    border-radius: 0;
    padding: 0;
    box-shadow: none;
    margin-top: 10px;
  }
}
</style>