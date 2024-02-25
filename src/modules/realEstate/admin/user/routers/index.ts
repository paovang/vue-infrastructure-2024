import { roleGuard } from "@/common/guards/role.guard";
import { GET_ROLES } from "@/common/utils/const";
import type { RouteRecordRaw } from "vue-router";

export const adminUserRoute: RouteRecordRaw[] = [
  {
    path: "/admin/user",
    name: "admin.user",
    component: () => import("../views/ListUsers.vue"),
    meta: {
      label: "sidebar.user",
      requiredRoles: [GET_ROLES.SUPER_ADMIN],
    },
    beforeEnter: roleGuard,
  },
  {
    path: "/admin/add/user",
    name: "admin.admin.user",
    component: () => import("../views/AddUser.vue"),
    meta: {
      label: "sidebar.add_user",
      requiredRoles: [GET_ROLES.SUPER_ADMIN],
    },
    beforeEnter: roleGuard,
  },
  {
    path: "/admin/edit/user/:id",
    name: "admin.edit.user",
    component: () => import("../views/EditUser.vue"),
    meta: {
      label: "sidebar.edit_user",
      requiredRoles: [GET_ROLES.SUPER_ADMIN],
    },
    beforeEnter: roleGuard,
  },
];
