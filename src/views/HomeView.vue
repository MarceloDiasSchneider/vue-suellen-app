<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="d-flex text-center text-bg-dark">
    <div class="cover-container d-flex w-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <h3 class="float-md-start mb-0">Vue Suellen App</h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <a
            class="nav-link fw-bold py-1 px-0 active"
            aria-current="page"
            href="#"
            >Home</a
          >
          <a class="nav-link fw-bold py-1 px-0" href="#">Features</a>
          <a class="nav-link fw-bold py-1 px-0" href="#">Contact</a>
          <RouterLink
            :to="{ name: 'sing-in' }"
            class="nav-link fw-bold py-1 px-0"
          >
            Sing In
          </RouterLink>
        </nav>
      </header>

      <main class="px-3">
        <h1>Suellen is Vue.js App.</h1>
        <p class="lead">
          It's a personal project to Learn and Test Vue.js 3, Vue Router and
          Pinea. This project is connect to a Nest.js Back-End application, with
          has some protected routers, so fell free to
          <RouterLink :to="{ name: 'sing-in' }" class="text-secondary">
            Sing in</RouterLink
          >
          and explore the features
        </p>
        <p class="lead">
          <a
            href="#"
            class="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >Learn more</a
          >
        </p>
      </main>

      <footer class="mt-auto text-white-50">
        <p>
          See the project source on git hub
          <a
            href="https://github.com/MarceloDiasSchneider/vue-suellen-app"
            class="text-white"
            >GitHub</a
          >, by
          <a href="https://marceloschneider.dev.br/" class="text-white"
            >@marcelo.dias.schneider</a
          >.
        </p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
/*
 * Base structure
 */

body {
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
}

section {
  min-height: 100vh;
}

.cover-container {
  max-width: 42em;
  min-height: 100vh;
}

/*
 * Header
 */
.nav-masthead .nav-link {
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

/*
 * Globals
 */

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none;
  /* Prevent inheritance from `body` */
}
</style>
