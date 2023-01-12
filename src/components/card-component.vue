<script lang="ts" setup>
defineProps({
  vehicle: String,
  description: String,
  createdAt: String,
});
</script>

<template>
  <section class="card-container">
    <p class="card-header">{{ vehicle }}</p>
    <p class="card-text">{{ description }}</p>
    <p class="card-date">{{ createdAt }}</p>
  </section>
</template>

<style lang="scss" scoped>
.card-container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
