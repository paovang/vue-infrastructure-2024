import { roleGuard } from "@/common/guards/role.guard";
import { GET_ROLES } from "@/common/utils/const";
import type { RouteRecordRaw } from "vue-router";

export const customerRoute: RouteRecordRaw[] = [
  {
    path: "/customer",
    name: "customer",
    component: () => import("../views/ListCustomer.vue"),
    meta: {
      label: "sidebar.customer",
      requiredRoles: [GET_ROLES.SUPER_ADMIN, GET_ROLES.ADMIN, GET_ROLES.USER],
    },
    beforeEnter: roleGuard,
  },
];
