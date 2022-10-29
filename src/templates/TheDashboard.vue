<script lang="ts">
export default {
  setup() { },
};
</script>

<template>
  <div class="h-100">
    <main class="d-flex flex-nowrap h-100">
      <slot name="sidebar"></slot>
      <slot name="content"></slot>
    </main>
  </div>
</template>