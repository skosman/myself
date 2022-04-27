<script setup lang="ts">
import ProjectItem from "../components/ProjectItem.vue";
</script>

<template>
  <header class="view-header">
    <h1 class="title">My Projects</h1>
  </header>
  <main>
    <p>This is all the information about my projects</p>
    <ProjectItem
      github-url="https://github.com/CSC485A-Slacker/slacker"
      demo-url="https://github.com/CSC485A-Slacker/slacker"
    >
      <template #heading>Slacker</template>
      <template #date>Jan 2022 - April 2022</template>
      <template #description>An app to connect slackliners</template>
    </ProjectItem>
  </main>
</template>

<style scoped>
.title {
  text-align: center;
}
</style>
