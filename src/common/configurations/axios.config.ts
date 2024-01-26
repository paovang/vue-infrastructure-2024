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

        config.headers['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTg4LjE2Ni4yNDUuMTMvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDMyNjA3NjIsImV4cCI6MTcwMzg2NTU2MiwibmJmIjoxNzAzMjYwNzYyLCJqdGkiOiJBc0F0eDBpUnZMMmhCdjhWIiwic3ViIjoiOCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.b-wJsxaZEDf_7awKm4yVeeynhdX2CRMJcadxe5JBMb4`;

        return config
      },
      (error: any) => Promise.reject(error)
    )
  }
}