import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutEpisode from "../components/AboutEpisode.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/episode/:id",
    component: AboutEpisode,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
