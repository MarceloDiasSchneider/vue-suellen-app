<script lang="ts">
import Layout from '@/views/vue-composition-api/components/Layout.vue'
import Topics from '@/views/vue-composition-api/components/Topics.vue'

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
      "We can control what gets exposed",
      "We can trace where a property is defined",
    ];

    return { infos, whenUseCompositionAPi, setup_executions_before, setup_arguments, reactive_references, }
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
        <Topics title="Setup & Reactive References" :topics="infos" />
        <Topics title="When use Composition APi?" :topics="whenUseCompositionAPi" />
        <Topics title="setup() {} are exceuter before the:" :topics="setup_executions_before" />
        <Topics title="setup( 'accept tow arguments' ) {}:" :topics="setup_arguments" />
        <Topics title="Reactive references" :topics="reactive_references" />
      </div>
    </template>
  </Layout>
</template>