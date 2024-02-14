// import { roleGuard } from "@/common/guards/role.guard";
import type { RouteRecordRaw } from "vue-router";

export const ownerHouseRoute: RouteRecordRaw[] = [
  {
    path: "/owner/house",
    name: "owner.house",
    component: () => import("../views/ListHouse.vue"),
    meta: {
      label: "sidebar.house",
      requiredRoles: ["Admin"],
    },
    // beforeEnter: roleGuard,
  },
  {
    path: "/owner/add/house",
    name: "owner.add.house",
    component: () => import("../views/AddHouse.vue"),
    meta: {
      label: "sidebar.add_house",
      requiredRoles: ["Admin"],
    },
    // beforeEnter: roleGuard,
  },
  {
    path: "/owner/edit/house/:id",
    name: "owner.edit.house",
    component: () => import("../views/EditHouse.vue"),
    meta: {
      label: "sidebar.edit_house",
      requiredRoles: ["Admin"],
    },
    // beforeEnter: roleGuard,
  },
];
