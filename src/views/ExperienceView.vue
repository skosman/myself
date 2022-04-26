<script setup lang="ts">
import JobItem from "@/components/JobItem.vue";
</script>

<template>
  <div class="experience">
    <div class="view-header">
      <h1 class="title">My Experience</h1>
    </div>
    <main>
      <h3 class="posttitle">Work</h3>
      <JobItem>
        <template #heading>Full Stack Engineer Co-op @ <a>Article</a></template>
        <template #date>May 2021 - Dec 2021</template>
        <ul>
          <li>
            Led a project to set delivery features based on zip codes in turn
            allowing Article to target high density customer areas while
            reducing delivery route efficiencies.
          </li>
          <li>
            Automated and created self-service tool to retrieve order AWS
            Cloudwatch logs using AWS SDK for Java for internal teams to aid in
            their customer support, saving coworkers 5 minutes per order.
          </li>
          <li>
            Assisted in the integration between two Spring Boot microservices
            using Kafka to automate return scheduling, saving Article return’s
            team 65 hours per week.
          </li>
          <li>
            Founded and managed the co-op project that enabled co-ops the
            opportunity to independently design, implement, and deploy an
            application.
          </li>
        </ul>
        <template #tech>Java</template>
      </JobItem>

      <JobItem>
        <template #heading
          >Site Reliability Engineer Intern @ <a>Benevity</a></template
        >
        <template #date>May 2020 - Aug 2020</template>
        <ul>
          <li>
            Used New Relic Query Language, React, and Node.js to create a
            customized Customer Journey monitoring application providing
            valuable insight into user actions and site performance.
          </li>
          <li>
            Integrated two internal applications using AWS Lambda, Boto3,
            Terraform, and jQuery reducing search times for greater user
            efficiency and decreasing API calls by 50%.
          </li>
          <li>
            Took on role as Operations Release Coordinator for a downtime
            release, requiring thorough planning, effective management of team
            members, organization of services, which ultimately lead to a highly
            successful release.
          </li>
        </ul>
        <template #tech>React</template>
      </JobItem>

      <JobItem>
        <template #heading>Web Developer Intern @ <a>Benevity</a></template>
        <template #date>May 2019 - Aug 2019</template>
        <ul>
          <li>
            Worked within a scrum team to develop an internal charity onboarding
            process using Vue resulting in an increased number of charities
            registered with Benevity.
          </li>
          <li>
            Created unit, integration, and automated user interface tests using
            Jest, JUnit, and Selenium strengthening my understanding of software
            testing methodologies.
          </li>
          <li>
            Completed a successful proof of concept for migrating an existing
            site to a microservice architecture on AWS using CodeDeploy, API
            Gateway, Lambda, and DynamoDB.
          </li>
        </ul>
        <template #tech>Javascript</template>
      </JobItem>
      <h3 class="posttitle">Volunteering</h3>
    </main>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
}
</style>
