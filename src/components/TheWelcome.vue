<script setup lang="ts">
import JobItem from './JobItem.vue'
</script>

<template>
  <JobItem>
    <template #heading>Article Full Stack Co-op</template>

    Vue’s
    <a target="_blank" href="https://vuejs.org/">official documentation</a>
    provides you with all information you need to get started.
  </JobItem>

  <JobItem>
    <template #heading>Benevity SRE Intern</template>

More instructions are available in <code>README.md</code>.
  </JobItem>

  <JobItem>
    <template #heading>Benevity Web Developer Intern</template>

    Get official tools and libraries for your project:
    <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>,
    <a target="_blank" href="https://router.vuejs.org/">Vue Router</a>,
    <a target="_blank" href="https://test-utils.vuejs.org/">Vue Test Utils</a>, and
    <a target="_blank" href="https://github.com/vuejs/devtools">Vue Dev Tools</a>. If you need more
    resources, we suggest paying
    <a target="_blank" href="https://github.com/vuejs/awesome-vue">Awesome Vue</a>
    a visit.
  </JobItem>
</template>
