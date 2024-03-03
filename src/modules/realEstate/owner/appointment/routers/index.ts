import { roleGuard } from "@/common/guards/role.guard";
import { GET_ROLES } from "@/common/utils/const";
import type { RouteRecordRaw } from "vue-router";

export const ownerAppointmentRoute: RouteRecordRaw[] = [
  {
    path: "/owner/appointment",
    name: "owner.appointment",
    component: () => import("../views/ListAppointment.vue"),
    meta: {
      label: "sidebar.appointment",
      requiredRoles: [GET_ROLES.ADMIN_OWNER, GET_ROLES.USER_OWNER],
    },
    beforeEnter: roleGuard,
  },
];
