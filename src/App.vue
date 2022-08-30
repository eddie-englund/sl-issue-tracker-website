<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">SL issue tracker</RouterLink>
        <p>
          Stockholms Lokaltrafik has constant issues, so here is a list I update
          whenever I find issues with the service.
        </p>
      </nav>
    </div>
  </header>

  <Suspense>
    <template #default><RouterView /></template>
    <template #fallback><h1>...loading</h1></template>
  </Suspense>
</template>

<style lang="scss">
@use "@scss/var.scss" as f;

#app {
  margin-top: 2%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

nav {
  min-height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;

  a {
    font-size: f.$header3;
    font-weight: 700;
  }

  p {
    width: 60%;
    text-align: center;
  }
}
</style>
