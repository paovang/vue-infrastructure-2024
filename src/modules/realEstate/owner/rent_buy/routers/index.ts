import { roleGuard } from "@/common/guards/role.guard";
import { GET_ROLES } from "@/common/utils/const";
import type { RouteRecordRaw } from "vue-router";

export const ownerRentAndBuyRoute: RouteRecordRaw[] = [
  {
    path: "/owner/rent/buy",
    name: "owner.rent.buy",
    component: () => import("../views/ListRentAndBuy.vue"),
    meta: {
      label: "sidebar.rent_buy",
      requiredRoles: [GET_ROLES.ADMIN_OWNER, GET_ROLES.USER_OWNER],
    },
    beforeEnter: roleGuard,
  },
];
