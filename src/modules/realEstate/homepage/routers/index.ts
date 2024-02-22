import type { RouteRecordRaw } from "vue-router";

export const homeRoute: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/layout/LayoutHome.vue"),
    children: [
      {
        path: "",
        name: "house",
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
