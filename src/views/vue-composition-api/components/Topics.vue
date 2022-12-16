<script lang="ts">
import ArrowRightCircle from "@/assets/images/icons/ArrowRightCircle.vue";
import { watchEffect } from "vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    topics: {
      type: Array,
      required: false,
    },
  },
  setup(props) {
    watchEffect(() => {
      console.log("Title", props.title);
    });
  },
  components: {
    ArrowRightCircle,
  },
};
</script>

<template>
  <div>
    <h2 class="pb-2 border-bottom">{{ title }}</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div
        v-for="(topci, index) in topics"
        :key="index"
        class="col d-flex align-items-start"
      >
        <ArrowRightCircle />
        <p>{{ topci }}</p>
      </div>
    </div>
  </div>
</template>
