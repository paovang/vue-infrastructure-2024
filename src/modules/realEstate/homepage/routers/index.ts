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
      {
        path: "/sign-up",
        name: "sign.up",
        component: () => import("../views/SignUp.vue"),
        meta: {
          skipAuthCheck: true,
        },
      },
      {
        path: "/confirm/sign-up",
        name: "confirm.sign.up",
        component: () => import("../views/Confirm-SignUp.vue"),
        meta: {
          skipAuthCheck: true,
        },
      },
      {
        path: "/about/us",
        name: "about.us",
        component: () => import("../views/About-Us.vue"),
        meta: {
          skipAuthCheck: true,
        },
      },
      {
        path: "/sign-in",
        name: "sign.in",
        component: () => import("../views/SignIn.vue"),
        meta: {
          skipAuthCheck: true,
        },
      },
    ],
  },
];
