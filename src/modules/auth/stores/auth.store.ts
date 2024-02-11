import type { UserEntity } from '../entities/user.entity'
import { AuthService } from '../services/auth.service'
import { defineStore } from 'pinia'
import { container } from 'tsyringe'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export interface AuthState {
  data: UserEntity | null
  isLoading: boolean
  errorMessage: string
}

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()
    const authService = container.resolve(AuthService)
    const state = reactive<AuthState>({
        data: null,
        isLoading: false,
        errorMessage: ''
    })
  
    const form = reactive<UserEntity>({
        email: '',
        password: '',
    });

  async function login(item: any) {
    state.isLoading = true;

    try {
        const result = await authService.login(item);
        if (result.status === 'success' && result.data) {
            localStorage.setItem('token', result.data.access_token);
            localStorage.setItem('roles', result.data.authUser.role);
            // localStorage.setItem('roles', JSON.stringify(result.data.authUser.role));
            state.errorMessage = '';

            const roleUsers = result.data.authUser.role;
            
            if (roleUsers.includes('SuperAdmin', 'User')) {
                  router.push({ name: 'customer' });
            } else if (roleUsers.includes('Admin')) {
                router.push({ name: 'owner.house' })
            }
        } else {
            state.errorMessage = result.message ? result.message : '';
        }
    } catch (error: any) {
        let responseError = '';
        if (error.response.status === 422) {
            responseError = Object.keys(error.response.data.errors)
                .map((key) => `${key}: ${error.response.data.errors[key].join(', ')}`)
                .join('; ')
        } else if (error.response.status === 401) {
            responseError = 'ອີເມວ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ.'
        } else {
            responseError = error.response.data.error;
        }
        state.errorMessage = responseError;
    }
    state.isLoading = false;
  }

  async function logout(): Promise<void> {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    
    router.push({ name: 'login' });
  }

  return { state, form, login, logout }
})