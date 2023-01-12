<script lang="ts" setup>
defineProps({
  msg: String,
});

const emit = defineEmits(['close']);
</script>

<template>
  <div class="toast-container">
    <div class="indicator" aria-hidden="true"></div>
    <div class="inner-container">
      <div class="text-container">
        <p class="text-error">Error</p>
        <p class="text-msg">{{ msg }}</p>
      </div>
      <button class="close-btn" @click.prevent="emit('close')">
        <p>CLOSE</p>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/scss/colors.scss' as c;
.toast-container {
  background: c.$card;
  max-width: 24rem;
  min-width: 24rem;
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
  .text-error {
    margin: 0;
    padding: 0;
  }

  .text-container {
    margin-left: 5%;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .text-msg,
  .close-btn p {
    color: c.$text-muted;
    margin: 0;
    padding: 0;
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
