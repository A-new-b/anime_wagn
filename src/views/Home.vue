<template>
  <div style="display: flex;flex-direction: row;justify-content: center;width: 100%">
    <div>
      <v-img
        width="70%"
        :src="`/api/file?file=test.gif`"
        lazy-src="/api/file?file=test.png"
      ></v-img>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { notify } from "../components/notification";
// eslint-disable-next-line no-unused-vars
import { getCurrentTime } from "../utils/index";
export default {
  name: "Home",
  data() {
    return {
      errorBtn: true,
      dialogTrigger: false,
      //权限
      permission: "",
    };
  },
  mounted() {
    this.permission = localStorage.getItem("Access-Token");
  },
  components: {},
  methods: {
    switchDialogTrigger() {
      this.dialogTrigger = !this.dialogTrigger;
    },
  },
};
</script>
