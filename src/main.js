import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "@/pages/Home.vue";
import Checkout from "@/pages/Checkout.vue";
import Blogs from "@/pages/Blogs.vue";
import About from "@/pages/About.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "HomeA", component: Home },
    { path: "/checkout", name: "CheckoutA", component: Checkout },
    { path: "/blogs", name: "BlogsA", component: Blogs },
    { path: "/about", name: "AboutA", component: About },
    { path: "/login", name: "LoginA", component: Login },
    { path: "/register", name: "RegisterA", component: Register },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
