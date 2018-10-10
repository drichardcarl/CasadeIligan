// Vue
import Vue from "vue";
import App from "./App.vue";

// Router
import VueRouter from "vue-router";
import Routes from "./routes";
Vue.use(VueRouter);

// axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
Vue.prototype.$backend = axios.create({
  baseURL: "http://localhost:8082/api/v1",
  withCredentials: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  }
});

const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");

Vue.prototype.$API_URL = "http://localhost:8082/api/v1";
