import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import BootstrapVue from "bootstrap-vue";
// import App from './App.vue'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App).use(router).mount("#app");
// createApp(App).use(router).use(BootstrapVue).mount("#app");
