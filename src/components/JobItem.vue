<script setup lang="ts">
import type { Job } from ".././data/interfaces";
defineProps<{
  job: Job;
}>();
</script>

<template>
  <div class="item">
    <div class="details">
      <h3>{{ job.name }}</h3>
      <h4>
        {{ job.date }}
      </h4>
      <p>
        {{ job.description }}
      </p>
      <ul class="tech-list">
        <li v-for="(tech, index) in job.technology" :key="index">
          {{ tech }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
