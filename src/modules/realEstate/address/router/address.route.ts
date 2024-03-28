import { roleGuard } from "@/common/guards/role.guard";
import type { RouteRecordRaw } from "vue-router";
import { GET_ROLES } from "@/common/utils/const";

export const adminAddressRoute: RouteRecordRaw[] = [
  {
    path: "/admin/country",
    name: "country",
    component: () => import("../views/ListCountry.vue"),
    meta: {
      label: "sidebar.country",
      requiredRoles: [GET_ROLES.SUPER_ADMIN, GET_ROLES.ADMIN, GET_ROLES.USER],
    },
    beforeEnter: roleGuard,
  },
  {
    path: "/admin/province",
    name: "province",
    component: () => import("../views/ListProvince.vue"),
    meta: {
      label: "sidebar.province",
      requiredRoles: [GET_ROLES.SUPER_ADMIN, GET_ROLES.ADMIN, GET_ROLES.USER],
    },
    beforeEnter: roleGuard,
  },
  {
    path: "/admin/district",
    name: "district",
    component: () => import("../views/ListDistrict.vue"),
    meta: {
      label: "sidebar.district",
      requiredRoles: [GET_ROLES.SUPER_ADMIN, GET_ROLES.ADMIN, GET_ROLES.USER],
    },
    beforeEnter: roleGuard,
  },
];
