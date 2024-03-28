import { adminCustomerRoute } from "../modules/realEstate/rentHouse/customer/routers/index";
import { userRoute } from "../modules/users/router/index.route";
import { adminAddressRoute } from "../modules/realEstate/address/router/address.route";
import { createRouter, createWebHistory } from "vue-router";
import { authRoute } from "@/modules/auth/routers/index";
import { homeRoute } from "@/modules/realEstate/homepage/routers/index";
import { ownerHouseRoute } from "@/modules/realEstate/owner/house/routers/index";
import { authGuard } from "@/common/guards/auth.guard";
import { adminRealEstateServiceRoute } from "@/modules/realEstate/rentHouse/memberServices/routers";
import { ownerPaymentServiceHouseRoute } from "@/modules/realEstate/owner/paymentService/routers";
import { adminPaymentHistoryRoute } from "@/modules/realEstate/admin/paymentHistory/routers";
import { adminUserRoute } from "@/modules/realEstate/admin/user/routers";
import { ownerAppointmentRoute } from "@/modules/realEstate/owner/appointment/routers";
import { ownerRentAndBuyRoute } from "@/modules/realEstate/owner/rent_buy/routers";
import { ownerUserRoute } from "@/modules/realEstate/owner/user/routers";
import { adminRealEstateTypeRoute } from "@/modules/realEstate/admin/real-estate-type/routers";
import { adminFooterRoute } from "@/modules/realEstate/admin/footer/routers";
import { adminDashboardRoute } from "@/modules/realEstate/admin/dashboard/routers";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      component: () => import("@/components/layouts/AppLayout.vue"),
      children: [
        ...userRoute,
        ...adminCustomerRoute,
        ...adminUserRoute,
        ...adminAddressRoute,
        ...adminRealEstateServiceRoute,
        ...adminRealEstateTypeRoute,
        ...adminFooterRoute,
        ...adminPaymentHistoryRoute,
        ...adminDashboardRoute,
        ...ownerHouseRoute,
        ...ownerAppointmentRoute,
        ...ownerRentAndBuyRoute,
        ...ownerPaymentServiceHouseRoute,
        ...ownerUserRoute,
      ],
    },
    ...authRoute,
    ...homeRoute,
  ],
});

authGuard(router);

export default router;
