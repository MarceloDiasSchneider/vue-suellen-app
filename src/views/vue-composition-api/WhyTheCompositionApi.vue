<script lang="ts">
import Layout from '@/views/vue-composition-api/components/Layout.vue'
import Topics from '@/views/vue-composition-api/components/Topics.vue';

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
    Topics,
  }
};

</script>

<template>
  <Layout>
    <template #content>
      <div class="container px-4 py-5" id="hanging-icons">
        <Topics title="Why the composition api?" :topics="reasons" />
      </div>
    </template>
  </Layout>
</template>