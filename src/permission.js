// import Vue from "vue";
import NProgress from "nprogress";
import router from "./router";
// 进度条
import "nprogress/nprogress.css";

const whitelist = ["/login", "/error/404", "/error/403"];
router.beforeEach((to, from, next) => {
  NProgress.start();
  // const permission = localStorage.getItem("permission");
  const AccessToken = localStorage.getItem("Access-Token");
  if (AccessToken === null && whitelist.indexOf(to.path) === -1) {
    next("/login");
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});
