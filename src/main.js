import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "@/pages/Home.vue";
import Checkout from "@/pages/Checkout.vue";
import Blogs from "@/pages/Blogs.vue";
import About from "@/pages/About.vue";
import Info from "@/pages/Info.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import NotFound from "@/pages/NotFound.vue";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase.init";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "HomeA", component: Home },
    {
      path: "/checkout",
      name: "CheckoutA",
      component: Checkout,
      meta: { requiresAuth: true },
    },
    { path: "/blogs", name: "BlogsA", component: Blogs },
    { path: "/about", name: "AboutA", component: About },
    { path: "/info", name: "infoA", component: Info },
    { path: "/login", name: "LoginA", component: Login },
    { path: "/register", name: "RegisterA", component: Register },
    { path: "/:catchAll(.*)", name: "NotFound", component: NotFound },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faCheck,
  faPhone,
  faEnvelope,
  faLocationDot,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
AOS.init();

library.add(faCheck, faPhone, faEnvelope, faLocationDot, faCopyright);

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
