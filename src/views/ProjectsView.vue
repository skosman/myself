<script setup lang="ts">
import ProjectItem from "../components/ProjectItem.vue";
import type { Project } from ".././data/interfaces";

const slacker: Project = {
  name: "Slacker",
  date: "Jan 2022 - April 2022",
  description: "An app to connect slackliners",
  technology: ["react native", "typescript", "Google Firebase", "Expo"],
  githubUrl: "https://github.com/CSC485A-Slacker/slacker",
  demoUrl: "https://github.com/CSC485A-Slacker/slacker",
};

const trader: Project = {
  name: "Day Trader",
  date: "Jan 2021 - April 2021",
  description: "Scalable day trading application",
  technology: ["python", "django", "redis", "monogdb", "docker"],
  githubUrl: "https://github.com/CSC485A-Slacker/slacker",
  demoUrl: "https://github.com/CSC485A-Slacker/slacker",
};

const projects = [slacker, trader];
</script>

<template>
  <header class="view-header">
    <h1 class="title">My Projects</h1>
  </header>
  <main>
    <ul class="project-list">
      <li v-for="(project, index) in projects" :key="index">
        <ProjectItem :project="project"> </ProjectItem>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.title {
  text-align: center;
}

.project-list {
  list-style-type: none;
}
</style>
