<script lang="ts">
import Layout from '@/views/vue-composition-api/components/Layout.vue'

export default {
  setup() {
    const reasons = [
      "Solve limitations of Vue 2.",
      "Readability of components.",
      "Code reuse patterns",
      "Has TypeScript Suport",
      "I can use Composition Functions outside of setep",
      "Code can now be organized by logical concerns",
      "We can avoid to use Mixins, Mixin Factories or Scoped Slots",
      "We can use Composition Functions, wich are lesscode, familiar functions, extremely flexible and tooling friendly",
      "We can still use the regular syntag with vue 3",
    ];

    return { reasons }
  },
  components: {
    Layout,
  }
};

</script>

<template>
  <Layout>
    <template #content>
      <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom">Why the composition api?</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div v-for="reason, index in reasons" :key="index" class="col d-flex align-items-start">
            <div
              class="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </div>
            <div>
              <p>{{ reason }}</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>