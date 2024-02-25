import { roleGuard } from "@/common/guards/role.guard";
import { GET_ROLES } from "@/common/utils/const";
import type { RouteRecordRaw } from "vue-router";

export const paymentServiceHouseRoute: RouteRecordRaw[] = [
  {
    path: "/owner/payment/service",
    name: "owner.payment.service",
    component: () => import("../views/ListPaymentService.vue"),
    meta: {
      label: "sidebar.payment_service",
      requiredRoles: [GET_ROLES.ADMIN_OWNER],
    },
    beforeEnter: roleGuard,
  },
];
