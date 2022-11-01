<script lang="ts">
import Layout from '@/views/vue-composition-api/components/Layout.vue'
import ArrowRightCircle from '@/assets/images/icons/ArrowRightCircle.vue'

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
    ArrowRightCircle,
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
            <ArrowRightCircle />
            <p>{{ reason }}</p>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>