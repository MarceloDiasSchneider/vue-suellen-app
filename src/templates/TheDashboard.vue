<script lang="ts">
export default {
  setup() {},
};
</script>

<template>
  <main class="d-flex flex-nowrap">
    <slot name="sidebar"></slot>
    <slot name="content"></slot>
  </main>
</template>
