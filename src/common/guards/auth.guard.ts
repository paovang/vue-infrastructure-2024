import type { Router } from "vue-router";
import { GET_ROLES } from "../utils/const";

export function authGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem("token");
    const roles = localStorage.getItem("roles");
    console.log(from);

    if (to.meta.skipAuthCheck) {
      next();
    } else {
      if (token) {
        if (to.name === "login") {
          if (
            Array.isArray(roles) &&
            roles?.some((role: any) =>
              [GET_ROLES.SUPER_ADMIN, GET_ROLES.ADMIN, GET_ROLES.USER].includes(
                role
              )
            )
          ) {
            next({ name: "customer" });
          } else {
            next({ name: "owner.house" });
          }
        } else {
          next();
        }
      } else {
        if (to.name !== "login") {
          next({ name: "login" });
        } else {
          next();
        }
      }
    }
  });
}
