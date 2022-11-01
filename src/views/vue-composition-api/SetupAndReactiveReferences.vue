<script lang="ts">
import Layout from '@/views/vue-composition-api/components/Layout.vue'
import ArrowRightCircle from '@/assets/images/icons/ArrowRightCircle.vue'

export default {
  setup() {
    const infos = [
      "Composition Api is Additive.",
      "All previous components syntax are still valid.",
      "This is a advenced optional syntax.",
    ];
    const whenUseCompositionAPi = [
      "When we care about Type script suport",
      "When we have a large component",
      "Need to reuse code across other components",
      "Our team prefer the alternative syntax",
    ];
    const setup_executions_before = [
      "Compornets",
      "Props",
      "Data",
      "Methods",
      "Computed Properties",
      "Lifecycle methods",
      "Doesn't have access to \"this\"",
    ];
    const setup_arguments = [
      { Props: ["Data passed to components"] },
      {
        Context: [
          "Context.attrs",
          "Context.slots",
          "Context.parent",
          "Context.root",
          "Context.emit"]
      },
    ];
    const reactive_references = [
      "use \"import { ref } form 'vue';\" instead data();",
      "With the composition API we can declare reactive objects that aren't associated with a component.",
      "setup () { return { \"Returns the variables and functions that template will need\" } }",
      "Is more verbose, but it also makes our component more maintainable",
      "We can contral what gets exposed",
      "We can trace where a property is defined",
    ];

    return { infos, whenUseCompositionAPi, setup_executions_before, setup_arguments, reactive_references, }
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
        <h2 class="pb-2 border-bottom">Setup & Reactive References</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div v-for="info, index in infos" :key="index" class="col d-flex align-items-start">
            <ArrowRightCircle />
            <p>{{ info }}</p>
          </div>
        </div>
        <h2 class="pb-2 border-bottom">When use Composition APi?</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div v-for="reason, index in whenUseCompositionAPi" :key="index" class="col d-flex align-items-start">
            <ArrowRightCircle />
            <p>{{ reason }}</p>
          </div>
        </div>
        <h2 class="pb-2 border-bottom">setup() {} are exceuter before the:</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div v-for="execution, index in setup_executions_before" :key="index" class="col d-flex align-items-start">
            <ArrowRightCircle />
            <p>{{ execution }}</p>
          </div>
        </div>
        <h2 class="pb-2 border-bottom">setup( "accept tow arguments" ) {}:</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div v-for="argument, index in setup_arguments" :key="index" class="col d-flex align-items-start">
            <ArrowRightCircle />
            <pre>{{ argument }}</pre>
          </div>
        </div>
        <h2 class="pb-2 border-bottom">Reactive references</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div v-for="argument, index in reactive_references" :key="index" class="col d-flex align-items-start">
            <ArrowRightCircle />
            <p>{{ argument }}</p>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>