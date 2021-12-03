import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hat from "../views/Hat.vue"
import Costumes from "../views/Costumes.vue"
import Checkout from "../views/Checkout.vue"
import Admin from "../views/Admin.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/hats",
    name: "Hats",
    component: Hat,
  },
  {
    path: "/costumes",
    name: "Costumes",
    component: Costumes,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
