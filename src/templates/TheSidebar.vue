<script lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import type { RouteRecordSingleView } from "vue-router";

export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const publishedBooksMessage = computed(() => {
      return props.links.map((RouteRecord: RouteRecordSingleView) => {
        const NewRouteRecord: RouteRecordSingleView = RouteRecord;
        NewRouteRecord.link =
          RouteRecord.name.charAt(0).toUpperCase() + RouteRecord.name.slice(1);
        NewRouteRecord.link = NewRouteRecord.link.replaceAll("-", " ");
        console.log(RouteRecord);
        return NewRouteRecord;
      });
    });

    return { publishedBooksMessage };
  },
};
</script>

<template>
  <div
    class="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark sticky-top"
    style="width: 280px"
  >
    <code>
      {{ publishedBooksMessage }}
    </code>
    <RouterLink
      :to="{ name: 'why-the-composition-api' }"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <span class="fs-4">Vue 3 Composition API</span>
    </RouterLink>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item" v-for="(link, index) in links" :key="index">
        <RouterLink :to="{ name: link.name }" class="nav-link text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-bar-right me-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
            />
          </svg>
          {{ link.name }}
        </RouterLink>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a
        href="#"
        class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://avatars.githubusercontent.com/u/64045251?v=4"
          alt=""
          width="32"
          height="32"
          class="rounded-circle me-2"
        />
        <strong>Marcelo Schneider</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li>
          <RouterLink :to="{ name: 'home' }" class="dropdown-item"
            >Sing out</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100vh;
}
</style>
