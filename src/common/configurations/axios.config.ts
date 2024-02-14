// import { AuthenticationService } from '@/use-cases/authentication/authentication.service'
import type { AxiosInstance } from "axios";
import axios from "axios";
import { singleton } from "tsyringe";

@singleton()
export class AxiosApi {
  public axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: import.meta.env.VITE_APP_BASE_API_URL,
    });

    this.axios.interceptors.request.use(
      async (config: any) => {
        const session = sessionStorage.getItem("user");
        const user = JSON.parse(session as string);

        if (user) {
          if (Date.now() >= user.exp_in) {
            // const service = container.resolve(AuthenticationService)
            // await service.refreshToken()
          }
        }

        config.headers[
          "Authorization"
        ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTU5LjIyMy40Mi4yNTQvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDc4Nzc0ODAsIm5iZiI6MTcwNzg3NzQ4MCwianRpIjoiZ0l0d1NGTEpyNWhQTnBUTiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.fy2967muigbPC4w2JkRy0nnIAso-9VlnpvGXpU5Rt5I`;

        return config;
      },
      (error: any) => Promise.reject(error)
    );
  }
}
