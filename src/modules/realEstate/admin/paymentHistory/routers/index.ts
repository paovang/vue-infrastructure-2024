import { roleGuard } from "@/common/guards/role.guard";
import type { RouteRecordRaw } from "vue-router";

export const adminPaymentHistoryRoute: RouteRecordRaw[] = [
  {
    path: "/admin/payment/history",
    name: "admin.payment.history",
    component: () => import("../views/ListPaymentHistory.vue"),
    meta: {
      label: "sidebar.payment_history",
      requiredRoles: ["SuperAdmin"],
    },
    beforeEnter: roleGuard,
  },
];
