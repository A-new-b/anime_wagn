import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    type: "success",
    message: "",
    showmessage: false,
    file_upload: 0,
  },
  mutations: {
    alert(state, payload) {
      state.message = payload.message;
      state.type = payload.Mtype;
      state.showmessage = payload.showmessage;
    },
    removeAlert(state) {
      state.showmessage = false;
    },
    process_change(state, payload) {
      state.file_upload = payload.upload;
    },
  },
  actions: {},
});
// const store=Vuex.Store;
export default store;
