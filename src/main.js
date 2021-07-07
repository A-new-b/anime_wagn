import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 权限管理
import "./permission";

import VueVideoPlayer from "vue-video-player";
// require videojs style
import "video.js/dist/video-js.css";

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(
  VueVideoPlayer /* {
  options: global default options,
  events: global videojs events
} */
);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
