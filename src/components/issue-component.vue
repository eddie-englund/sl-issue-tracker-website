<script setup lang="ts">
defineProps<{
  id: string;
  veichle: string;
  description: string;
  created: string;
}>();
</script>

<template>
  <section class="issue-wrapper">
    <p class="vehicle">{{ veichle }}</p>
    <p>{{ description }}</p>
    <p>{{ new Date(created).toLocaleString() }}</p>
  </section>
</template>

<style lang="scss" scoped>
@use "@scss/colors.scss" as c;
@use "@scss/var.scss" as f;
.issue-wrapper {
  background-color: c.$card-bg;
  min-width: 12rem;
  max-width: 35rem;
  min-height: 8rem;
  border-radius: 4px;
  padding: 1rem;
  padding-top: 0.6rem;

  p {
    margin-top: 0.6em;
    margin-bottom: 0.6rem;
  }

  .vehicle {
    color: c.$text;
    font-weight: 500;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  p:not(.vehicle) {
    color: c.$text-muted;
  }
}
</style>
