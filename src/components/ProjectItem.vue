<script setup lang="ts">
import GithubIcon from "./icons/IconGithub.vue";
import VideoIcon from "./icons/IconVideo.vue";
defineProps<{
  githubUrl: string;
  demoUrl: string;
}>();
</script>

<template>
  <div class="item">
    <h3>
      <slot name="heading"></slot>
    </h3>
    <h4>
      <slot name="date"></slot>
    </h4>
    <p>
      <slot name="description"></slot>
    </p>
    <a :href="githubUrl" target="_blank"><github-icon /></a>

    <a :href="demoUrl" target="_blank"> <video-icon /> </a>
    <p>
      <slot name="tech"></slot>
    </p>
  </div>
</template>

<style scoped></style>
