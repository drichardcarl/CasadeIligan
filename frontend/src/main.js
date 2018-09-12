// Vue
import Vue from "vue";
import App from "./App.vue";

// Router
import VueRouter from "vue-router";
import Routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

// Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// Font-Awesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);
Vue.component("font-awesome-icon", FontAwesomeIcon);
dom.watch();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
