import { roleGuard } from "@/common/guards/role.guard";
import { GET_ROLES } from "@/common/utils/const";
import type { RouteRecordRaw } from "vue-router";

export const ownerUserRoute: RouteRecordRaw[] = [
  {
    path: "/owner/user",
    name: "owner.user",
    component: () => import("../views/ListUsers.vue"),
    meta: {
      label: "sidebar.user",
      requiredRoles: [
        GET_ROLES.ADMIN_OWNER,
        GET_ROLES.ADMIN,
        GET_ROLES.USER_OWNER,
      ],
    },
    beforeEnter: roleGuard,
  },
  {
    path: "/owner/add/user",
    name: "owner.add.user",
    component: () => import("../views/AddUser.vue"),
    meta: {
      label: "sidebar.add_user",
      requiredRoles: [
        GET_ROLES.ADMIN_OWNER,
        GET_ROLES.ADMIN,
        GET_ROLES.USER_OWNER,
      ],
    },
    beforeEnter: roleGuard,
  },
  {
    path: "/owner/edit/user/:id",
    name: "owner.edit.user",
    component: () => import("../views/EditUser.vue"),
    meta: {
      label: "sidebar.edit_user",
      requiredRoles: [
        GET_ROLES.ADMIN_OWNER,
        GET_ROLES.ADMIN,
        GET_ROLES.USER_OWNER,
      ],
    },
    beforeEnter: roleGuard,
  },
];
