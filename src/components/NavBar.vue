<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header id="nav-header">
    <nav>
      <h1>Sam Kosman</h1>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Experience</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

header {
  line-height: 1.5;
  max-height: 100vh;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  margin-top: 2rem;
  display: inline-flex;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
  margin-left: auto;
}

@media (min-width: 1024px) {
  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
