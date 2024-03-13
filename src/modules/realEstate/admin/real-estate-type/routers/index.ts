import { roleGuard } from "@/common/guards/role.guard";
import type { RouteRecordRaw } from "vue-router";
import { GET_ROLES } from "@/common/utils/const";

export const realEstateTypeRoute: RouteRecordRaw[] = [
  {
    path: "/real-estate-type",
    name: "real.estate.type",
    component: () => import("../views/ListRealEstateType.vue"),
    meta: {
      label: "sidebar.real_estate_type",
      requiredRoles: [GET_ROLES.SUPER_ADMIN, GET_ROLES.ADMIN, GET_ROLES.USER],
    },
    beforeEnter: roleGuard,
  },
];
