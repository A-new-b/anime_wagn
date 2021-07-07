import Vue from "vue";
import VueRouter from "vue-router";
import { constantRouterMap, asyncRouterMap } from "./routerConfig";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap.concat(asyncRouterMap),
});

export default router;
