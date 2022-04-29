<script setup lang="ts">
import JobItem from "@/components/JobItem.vue";
import type { Job } from "@/data/interfaces";

const article: Job = {
  name: "Full Stack Engineer Co-op",
  company: "Article",
  date: "Jan 2022 - April 2022",
  description: "An app to connect slackliners",
  technology: ["react native", "typescript", "Google Firebase", "Expo"],
};

const bevSre: Job = {
  name: "Site Reliability Engineer Intern",
  company: "Benevity",
  date: "May 2020 - Aug 2020",
  description: "Scalable day trading application",
  technology: ["python", "django", "redis", "monogdb", "docker"],
};
const bevDev: Job = {
  name: "Web Developer Intern",
  company: "Benevity",
  date: "May 2019 - Aug 2019",
  description: "Scalable day trading application",
  technology: ["python", "django", "redis", "monogdb", "docker"],
};

const jobs = [article, bevSre, bevDev];
</script>

<template>
  <div class="view-header">
    <h1 class="title">My Experience</h1>
  </div>
  <main>
    <h3 class="posttitle">Work</h3>
    <ul class="job-list">
      <li v-for="(job, index) in jobs" :key="index">
        <JobItem :job="job"> </JobItem>
      </li>
    </ul>
    <h3 class="posttitle">Volunteering</h3>
  </main>
</template>

<style scoped>
.title {
  text-align: center;
}

.job-list {
  list-style-type: none;
}
</style>
