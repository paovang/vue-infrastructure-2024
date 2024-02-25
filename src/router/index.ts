import { customerRoute } from "../modules/realEstate/rentHouse/customer/routers/index";
import { userRoute } from "../modules/users/router/index.route";
import { addressRoute } from "../modules/realEstate/address/router/address.route";
import { createRouter, createWebHistory } from "vue-router";
import { authRoute } from "@/modules/auth/routers/index";
import { homeRoute } from "@/modules/realEstate/homepage/routers/index";
import { ownerHouseRoute } from "@/modules/realEstate/owner/house/routers/index";
import { authGuard } from "@/common/guards/auth.guard";
import { realEstateServiceRoute } from "@/modules/realEstate/rentHouse/memberServices/routers";
import { paymentServiceHouseRoute } from "@/modules/realEstate/owner/paymentService/routers";
import { adminPaymentHistoryRoute } from "@/modules/realEstate/admin/paymentHistory/routers";
import { adminUserRoute } from "@/modules/realEstate/admin/user/routers";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      component: () => import("@/components/layouts/AppLayout.vue"),
      children: [
        ...userRoute,
        ...customerRoute,
        ...addressRoute,
        ...realEstateServiceRoute,
        ...ownerHouseRoute,
        ...paymentServiceHouseRoute,
        ...adminPaymentHistoryRoute,
        ...adminUserRoute,
      ],
    },
    ...authRoute,
    ...homeRoute,
  ],
});

authGuard(router);

export default router;
