<template>
  <v-container fluid fill-height>
    <notification></notification>
    <v-layout>
      <v-card>
        <v-img
          src="/api/file?file=background_pc.jpg"
          lazy-src="/api/file?file=background_pc.jpg"
          :width="screenWidth"
          :height="screenHeight"
        >
          <v-card-title
            style="
              display: flex;
              flex-direction: row;
              align-items: center;
              color: white;
            "
            class="text-h4"
          >
            油画风动漫头像自动生成
          </v-card-title>

          <div
            style="
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
            "
          >
            <!--                <div class="rainbow">Dream</div>-->
          </div>
        </v-img>
      </v-card>
      <v-footer
        style="
          width: 100%;
          position: fixed;
          bottom: 0;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0);
        "
      >
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 250px;
            background: rgba(255, 255, 255, 0.5);
            margin-bottom: 5%;
          "
        >
          <v-btn
            style="
              font-size: large;
              color: white;
              background-image: linear-gradient(to bottom right,greenyellow,deepskyblue);
            "
            @click="Login"
          >
            开始查看
          </v-btn>
        </div>
      </v-footer>
    </v-layout>
  </v-container>
</template>

<script>
// import { URL } from "../api/baseURL";
import notification from "../components/notification.vue";
import { notify } from "../components/notification";

export default {
  name: "LoginLayout",
  components: { notification },
  data() {
    return {
      show: false,
      username: "",
      password: "",
      messageshow: true,
      yzm: "",
      type: "",
      // img: `${URL}GetVerifyCode`,
      screenWidth: "",
      screenHeight: "",
      dialog: false,
      //对话框信息部分
      rules: [(value) => !!value || "不许为空"],
      name: "Hello",
    };
  },
  computed: {
    width: function () {
      return this.screenWidth * 0.82;
    },
  },
  created() {
    // this.codechange();
  },
  watch: {
    $route() {
      // this.codechange();
    },
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    window.onresize = () =>
      (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
      })();
  },
  methods: {
    confirm() {
      this.dialog = true;
    },
    Login() {
      localStorage.setItem("Access-Token", this.name);
      // localStorage.setItem("permission", "3");
      this.$router.push("/image");
      notify("success", "欢迎登录");
      notify(
        "waring",
        "因服务器容量原因，自动生成的文件仅会保留10分钟，请注意时间"
      );
    },
    changeImg() {
      return this.screenWidth / this.screenHeight + 0.04;
    },
  },
};
</script>

<style scoped>
.backgroud {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loginpanel {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.75);
}
.rainbow {
  background-image: -webkit-linear-gradient(
    left,
    #147b96,
    #e6d205 25%,
    #147b96 50%,
    #e6d205 75%,
    #147b96
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-background-size: 200% 100%;
  -webkit-animation: maskedAnimation 4s infinite linear;
  font-style: italic;
  font-size: 60px;
}
</style>
