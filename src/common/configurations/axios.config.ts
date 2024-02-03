// import { AuthenticationService } from '@/use-cases/authentication/authentication.service'
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { singleton } from 'tsyringe'

@singleton()
export class AxiosApi {
  public axios: AxiosInstance
  constructor() {
    this.axios = axios.create({
      baseURL: import.meta.env.VITE_APP_BASE_API_URL
    });

    this.axios.interceptors.request.use(
      async (config: any) => {
        const session = sessionStorage.getItem('user')
        const user = JSON.parse(session as string)

        if (user) {
          if (Date.now() >= user.exp_in) {
            // const service = container.resolve(AuthenticationService)
            // await service.refreshToken()
          }
        }

        config.headers['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMjA2LjE4OS4xOTAuNDcvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDY3NjI1NzQsIm5iZiI6MTcwNjc2MjU3NCwianRpIjoiWWpjblo1ZllWcTNKVUFKbSIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0._WMlyEAsi_s6r8tjpc79nghkeeV7dkgRgR9RUC8QUYY`;

        return config
      },
      (error: any) => Promise.reject(error)
    )
  }
}