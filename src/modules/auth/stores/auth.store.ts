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
    state.isLoading = true
    state.errorMessage = ''

    const result = await authService.login(item)

    if (result) {
      if (result.status === 'success' && result.data) {
        state.data = result.data.user
        router.push({ name: 'dashboard' })
      } else {
        state.errorMessage = result.message ? result.message : ''
      }
    }

    state.isLoading = false
  }

  return { state, form, login }
})