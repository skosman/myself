<script setup lang="ts">
import GithubIcon from "./icons/IconGithub.vue";
import VideoIcon from "./icons/IconVideo.vue";
defineProps<{
  project: {};
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
    <li v-for="(tech, index) in project.technology" :key="index">
      {{ tech }}
    </li>

    <a :href="project.githubUrl" target="_blank"><github-icon /></a>

    <a :href="project.demoUrl" target="_blank"> <video-icon /> </a>
  </div>
</template>

<style scoped></style>
