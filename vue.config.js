module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    // development server port 8000
    port: 8080,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        ws: false,
        secure: false,
        changeOrigin: true,
      },
    },
    disableHostCheck: true,
  },
};
