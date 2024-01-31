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

        config.headers['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMjA2LjE4OS4xOTAuNDcvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDY3MDIxMzcsImV4cCI6MTcwNjcwNTczNywibmJmIjoxNzA2NzAyMTM3LCJqdGkiOiJ3ZFdzc2R3MXFOc0U2cGtOIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.wYmr8ivVrgo7Z5sVYD4T6S-T92DIvUPHdy37wy2PxNU`;

        return config
      },
      (error: any) => Promise.reject(error)
    )
  }
}