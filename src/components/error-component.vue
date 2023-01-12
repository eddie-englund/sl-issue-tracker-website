<script lang="ts" setup>
defineProps({
  msg: String,
  error: { type: String },
});
</script>

<template>
  <div class="toast-container">
    <div class="indicator" aria-hidden="true"></div>
    <div class="inner-container">
      <div class="text-container">
        <h3 class="text-error">Error</h3>
        <p class="text-msg">{{ msg }}</p>
        <p class="text-msg text-info">
          Reload the website and if the error persists, please contact the owner
          of the site
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/scss/colors.scss' as c;
@use '@/scss/fonts.scss' as f;

.toast-container {
  background: c.$card;
  max-width: 30rem;
  min-width: 24rem;
  min-height: 8rem;
  display: flex;
  border-radius: 4px;

  .indicator {
    width: 1rem;
    min-height: 100%;
    background-color: c.$error;
    border-radius: 4px 0px 0px 4px;
  }

  .text-error {
    color: c.$error;
  }

  .text-msg,
  .text-error-msg,
  .text-error {
    margin: 0;
    padding: 0;
  }

  .text-container {
    margin-left: 5%;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .text-msg {
    color: c.$text-muted;
    margin: 0;
    padding: 0;
  }

  .text-info {
    @include f.extra-light;
    margin-top: 5%;
  }

  .close-btn {
    border: none;
    min-width: 5rem;
    max-width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    cursor: pointer;
  }

  .inner-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
