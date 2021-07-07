<template>
  <div
    style="
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      min-height: 200px;
    "
  >
    <v-dialog v-model="dialogTrigger" max-width="400px">
      <v-card :loading="dialog_loading">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>
        <v-card-title> 油画风转换 </v-card-title>
        <div style="display: flex; flex-direction: row">
          <div style="margin: 2%">
            <v-img
              :src="card_image"
              lazy-src="/api/file?file=demo.png"
              style="width: 128px"
              :contain="true"
            >
            </v-img>
          </div>
          <div style="display: flex; flex-direction: row; flex-wrap: wrap">
            <v-btn
              @click="style_click(0)"
              style="margin: 2%; color: white"
              v-bind:style="{
                backgroundImage:
                  'url(/api/file?file=button/' + style_image[0] + ')',
              }"
            >
              星空</v-btn
            >
            <v-btn
              @click="style_click(1)"
              style="margin: 2%"
              v-bind:style="{
                backgroundImage:
                  'url(/api/file?file=button/' + style_image[1] + ')',
              }"
            >
              夜风</v-btn
            >
            <v-btn
              @click="style_click(2)"
              style="margin: 2%"
              v-bind:style="{
                backgroundImage:
                  'url(/api/file?file=button/' + style_image[2] + ')',
              }"
              >植株</v-btn
            >
            <v-btn
              @click="style_click(3)"
              style="margin: 2%; color: white"
              v-bind:style="{
                backgroundImage:
                  'url(/api/file?file=button/' + style_image[3] + ')',
              }"
              >黎明</v-btn
            >
            <v-btn
              style="margin: 2%; color: white"
              v-bind:style="{
                backgroundImage:
                  'url(/api/file?file=button/' + style_image[4] + ')',
              }"
              @click="style_click(4)"
            >
              带帽子的女人</v-btn
            >
          </div>
        </div>
        <v-card-actions>
          <v-btn text color="primary" @click="switchDialogTrigger">
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div>
      <v-card :width="width" :loading="loading">
        <v-card-title>
          生成画廊 <v-spacer></v-spacer>
          <v-btn color="green" @click="initialize">
            <v-icon>mdi-cached</v-icon>
          </v-btn></v-card-title>
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-row style="margin: 5%">
          <v-col
            v-for="path in path_list"
            :key="path_list.indexOf(path)"
            class="d-flex child-flex"
          >
            <v-card @click="image_click(path)" :hover="true" outlined>
              <v-img
                :src="`/api/file?file=${path.substring(9)}`"
                lazy-src="/api/file?file=demo.png"
                style="width: 64px"
                :contain="true"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
// import { notify } from "../components/notification";
import axios from "axios";

export default {
  created() {
    this.initialize();
  },
  data() {
    return {
      path_list: [],
      loading: true,
      dialogTrigger: false,
      card_image: "",
      style_image: [
        "sky.jpg",
        "vincent-van-gogh-85799_300.jpg",
        "painting-20401_300.jpg",
        "ivan-alvazovsky-91987_300.jpg",
        "woman.png",
      ],
      button_image: [],

      dialog_loading: false,
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 800;
        case "xl":
          return 800;
      }
    },
  },
  methods: {
    initialize() {
      this.loading = true;
      axios.get("/api/generate").then((res) => {
        // console.log(res);
        console.log(res.data.path_list);
        this.path_list = res.data.path_list;
        this.loading = false;
      });
    },
    image_click(path) {
      this.card_image = "/api/file?file=" + path.substring(9);
      this.switchDialogTrigger();
    },
    switchDialogTrigger() {
      this.dialogTrigger = !this.dialogTrigger;
    },
    style_click(num) {
      this.dialog_loading = true;
      let request_path =
        "/api/style" +
        "?path=" +
        this.card_image.substring(15) +
        "&style=" +
        this.style_image[num];
      axios.get(request_path).then((res) => {
        // console.log(res);
        console.log(res.data.path);
        this.card_image = "/api/file?file=" + res.data.path.substring(9);
        this.dialog_loading = false;
      });
    },
  },
};
</script>
