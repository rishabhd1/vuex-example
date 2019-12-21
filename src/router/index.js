import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Packs from "../views/Packs.vue";
import Update from "../views/Update.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/user",
    name: "user",
    component: User
  },
  {
    path: "/packs",
    name: "packs",
    component: Packs
  },
  {
    path: "/update",
    name: "update",
    component: Update
  }
];

const router = new VueRouter({
  routes
});

export default router;
