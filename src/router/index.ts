import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/vue-composition-api",
      name: "vue-composition-api",
      // component: () => import("@/views/vue-composition-api/MainView.vue"),
      children: [
        {
          path: "/why-the-composition-api",
          name: "why-the-composition-api",
          component: () => import("@/views/vue-composition-api/WhyTheCompositionApi.vue"),
        },
      ],
    },
    {
      path: "/auth",
      name: "auth",
      // component: () => import("@/views/auth/CompositionApiSetup.vue"),
      children: [
        {
          path: "/sing-in",
          name: "sing-in",
          component: () => import("@/views/auth/SignIn.vue"),
        },
      ],
    },
  ],
});

export default router;
