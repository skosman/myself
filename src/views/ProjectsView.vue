<script setup lang="ts">
import ProjectItem from "../components/ProjectItem.vue";

const slacker = {
  name: "Slacker",
  date: "Jan 2022 - April 2022",
  description: "An app to connect slackliners",
  technology: ["react native", "typescript", "Google Firebase", "Expo"],
  githubUrl: "https://github.com/CSC485A-Slacker/slacker",
  demoUrl: "https://github.com/CSC485A-Slacker/slacker",
};
</script>

<template>
  <header class="view-header">
    <h1 class="title">My Projects</h1>
  </header>
  <main>
    <ProjectItem :project="slacker"> </ProjectItem>
  </main>
</template>

<style scoped>
.title {
  text-align: center;
}
</style>
