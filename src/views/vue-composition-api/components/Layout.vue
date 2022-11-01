<script lang="ts">
import TheDashboard from '@/templates/TheDashboard.vue';
import TheSidebarVue from '@/templates/TheSidebar.vue';
import { why_the_composition_api_children } from '@/router/why-the-composition-api-children'

export default {
  setup() { return { why_the_composition_api_children } },
  components: {
    TheDashboard,
    TheSidebarVue,
  }
};

</script>

<template>
  <TheDashboard>
    <template #sidebar>
      <TheSidebarVue :links="why_the_composition_api_children" />
    </template>
    <template #content>
      <slot name="content"></slot>
    </template>
  </TheDashboard>
</template>