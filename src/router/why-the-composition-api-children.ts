import type { RouteRecordRaw } from "vue-router";

export const why_the_composition_api_children: Array<RouteRecordRaw> = [
  {
    path: "/why-the-composition-api",
    name: "why-the-composition-api",
    component: () =>
      import("@/views/vue-composition-api/WhyTheCompositionApi.vue"),
  },
  {
    path: "/setup-and-reactive-references",
    name: "setup-and-reactive-references",
    component: () =>
      import("@/views/vue-composition-api/SetupAndReactiveReferences.vue"),
  },
];
