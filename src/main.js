import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

const app = createApp(App);
app.use(router);
app.use(FloatingVue, {
  themes: {
    tooltip: {
      placement: "top", // default placement
      triggers: ["hover"], // default event trigger
      customClass: "global-tooltip", // default custom class for tooltips
      delay: 100, // delay in ms before showing tooltip
    },
  },
});

app.mount("#app");
