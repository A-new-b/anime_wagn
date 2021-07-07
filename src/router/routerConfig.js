import BasicLayout from "../Layouts/BasicLayout";
import LoginLayout from "../Layouts/LoginLayout";

export const asyncRouterMap = [
  {
    path: "/",
    name: "Basic",
    component: BasicLayout,
    redirect: "/login",
    children: [
      {
        path: "/home",
        name: "机制展示",
        component: () => import("../views/Home"),
        meta: {
          permission: ["1", "2", "3", "4", "5"],
          icon: "home",
          group: false,
        },
      },
      {
        path: "/image",
        name: "图像画廊",
        component: () => import("../views/image"),
        meta: {
          permission: ["1", "2", "3", "4", "5"],
          icon: "image",
          group: false,
        },
      },
      {
        path: "/train",
        name: "训练过程",
        component: () => import("../views/loss"),
        meta: {
          permission: ["1", "2", "3", "4", "5"],
          icon: "assignment",
          group: false,
        },
      },
    ],
  },
];

export const constantRouterMap = [
  {
    path: "/error",
    component: BasicLayout,
    children: [
      {
        path: "/error/404",
        component: () => import("../views/error/404"),
        meta: {
          permission: "all",
        },
      },
      {
        path: "/error/403",
        component: () => import("../views/error/403"),
        meta: {
          permission: "all",
        },
      },
    ],
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: LoginLayout,
    meta: {
      permission: "all",
    },
  },
];
