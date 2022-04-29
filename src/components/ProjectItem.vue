<script setup lang="ts">
import GithubIcon from "./icons/IconGithub.vue";
import VideoIcon from "./icons/IconVideo.vue";
import type { Project } from ".././data/interfaces";
defineProps<{
  project: Project;
}>();
</script>

<template>
  <div class="item">
    <h3>{{ project.name }}</h3>
    <h4>
      {{ project.date }}
    </h4>
    <p>
      {{ project.description }}
    </p>
    <ul class="tech-list">
      <li v-for="(tech, index) in project.technology" :key="index">
        {{ tech }}
      </li>
    </ul>

    <a :href="project.githubUrl" target="_blank"><github-icon /></a>

    <a :href="project.demoUrl" target="_blank"> <video-icon /> </a>
  </div>
</template>

<style scoped>
.tech-list {
  list-style-type: none;
}
</style>
