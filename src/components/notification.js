import store from "../store";

export function notify(Mtype, message) {
  store.commit({
    type: "alert",
    Mtype,
    message,
    showmessage: true,
  });
  setTimeout(() => {
    store.commit("removeAlert");
  }, 4000);
}
