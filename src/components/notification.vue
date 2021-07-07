<template>
  <v-snackbar :value="showmessage" :color="type">
    {{ message }}

    <template v-slot:action="{ attrs }">
      <v-btn dark text v-bind="attrs" @click="close()">
        <v-icon>close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "notification",
  created() {},
  computed: {
    type() {
      return this.$store.state.type;
    },
    showmessage() {
      return this.$store.state.showmessage;
    },
    message() {
      let { message } = this.$store.state;
      if (message.length > 25) {
        message = `${message.substring(0, 25)}..`;
      }
      return message;
    },
  },
  methods: {
    close() {
      this.$store.commit("removeAlert");
    },
  },
};
</script>

<style scoped></style>
