<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h3>SL ISSUE TRACKER</h3>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
  <RouterView class="router-view" />
  <p class="notice">
    Note that this website is in no way shape or form
    <br />affiliated with Stockholms Lokaltrafik (SL)
  </p>
</template>

<style lang="scss">
@use '@/scss/colors' as c;
@use '@/scss/fonts' as f;

body,
body::before,
body::after {
  margin: 0;
  padding: 0;
}

body {
  background-color: c.$bg;
}

header {
  text-align: center;
  margin-top: 2%;

  nav {
    display: flex;
    gap: 4.2rem;
    justify-content: center;
  }
}

.notice {
  text-align: center;
  @include f.extra-light;
  color: c.$text-muted;
}

.router-view {
  margin-top: 5%;
  min-height: 60vh;
}
</style>
