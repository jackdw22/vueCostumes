import Vue from "vue";
import App from "./App.vue";
import router from "./router";
<<<<<<< Updated upstream
import mock from "./data.js"
=======
//import mock from "./data.js"
>>>>>>> Stashed changes

Vue.config.productionTip = false;

/*
let data = {
  costumes: mock,
  bag: [],
}
*/


new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
