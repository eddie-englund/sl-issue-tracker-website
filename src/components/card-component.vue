<script lang="ts" setup>
defineProps({
  vehicle: String,
  description: String,
  createdAt: Date,
});
</script>

<template>
  <section class="card-container">
    <p class="card-header">{{ vehicle }}</p>
    <p class="card-text">{{ description }}</p>
    <p class="card-date">{{ createdAt?.toDateString() }}</p>
  </section>
</template>

<style lang="scss" scoped>
@use '@/scss/colors.scss' as c;
@use '@/scss/fonts.scss' as f;
.card-container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: c.$card;
  max-width: 40rem;
  border-radius: 4px;

  p {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .card-header {
    text-transform: capitalize;
    @include f.semi-bold;
  }

  .card-text {
    color: c.$text-secondary;
  }

  .card-date {
    color: c.$text-muted;
  }
}
</style>
