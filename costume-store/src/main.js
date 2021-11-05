import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./mock-data.js"

Vue.config.productionTip = false;


let data = {
  costumes: mock,
  bag: [],
}


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
