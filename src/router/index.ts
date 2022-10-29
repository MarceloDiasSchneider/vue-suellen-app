import { createRouter, createWebHistory } from "vue-router";
import { why_the_composition_api_children } from "@/router/why-the-composition-api-children.ts";
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
      path: "/#",
      name: "vue-composition-api",
      // component: () => import("@/views/vue-composition-api/MainView.vue"),
      children: why_the_composition_api_children,
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
