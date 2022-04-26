<script setup lang="ts"></script>

<template>
  <div class="home-header">
    <header>
      <h3 class="pretitle">Hello, my name is Sam</h3>
      <!-- add animation for typing and make it change -->
      <h1 class="title">I write code</h1>
      <p class="posttitle">
        I'm a software engineering student at the University of Victoria. I'm
        I'm finishing up my last year and open to work, so hit me up!
      </p>
    </header>
  </div>
</template>

<style scoped>
.home-header {
  margin: 4rem 0;
}

.pretitle {
  font-size: 1.1875rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
}

.title {
  font-size: 5.875rem;
  font-weight: 500;
}

.posttitle {
  font-size: 2rem;
}

</style>
