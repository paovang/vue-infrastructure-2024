import type { RouteRecordRaw } from "vue-router";

export const homeRoute: RouteRecordRaw[] = [
  {
    path: "",
    name: "",
    component: () => import("../views/layout/LayoutHome.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/ListHouse.vue"),
        meta: {
          skipAuthCheck: true,
        },
      },
      {
        path: "/detail/:id",
        name: "detail.house",
        component: () => import("../views/DetailHouse.vue"),
        meta: {
          skipAuthCheck: true,
        },
      },
    ],
  },
];
