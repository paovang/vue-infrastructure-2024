import { roleGuard } from "@/common/guards/role.guard";
import { GET_ROLES } from "@/common/utils/const";
import type { RouteRecordRaw } from "vue-router";

export const realEstateServiceRoute: RouteRecordRaw[] = [
  {
    path: "/real/estate/services",
    name: "real.estate.services",
    component: () => import("../views/ListRealEstateService.vue"),
    meta: {
      label: "sidebar.service",
      requiredRoles: [GET_ROLES.SUPER_ADMIN, GET_ROLES.ADMIN, GET_ROLES.USER],
    },
    beforeEnter: roleGuard,
  },
];
