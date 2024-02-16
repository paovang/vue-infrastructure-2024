import { roleGuard } from "@/common/guards/role.guard";
import type { RouteRecordRaw } from "vue-router";

export const paymentServiceHouseRoute: RouteRecordRaw[] = [
  {
    path: "/owner/payment/service",
    name: "owner.payment.service",
    component: () => import("../views/ListPaymentService.vue"),
    meta: {
      label: "sidebar.payment_service",
      requiredRoles: ["Admin"],
    },
    beforeEnter: roleGuard,
  },
];
