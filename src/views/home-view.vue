<script setup lang="ts">
import { getIssues } from '@/api';
import { useIssueStore } from '@/stores/issue-store';
import { isRight, isLeft } from 'fp-ts/lib/Either';
import { onMounted } from 'vue';
import ErrorComponent from '@/components/error-component.vue';
import cardComponent from '@/components/card-component.vue';

const store = useIssueStore();
onMounted(async () => {
  store.issues = await getIssues();
});
</script>

<template>
  <main>
    <div class="cards-container" v-if="isRight(store.issues)">
      <card-component
        v-for="issue in store.issues.right.data"
        :key="issue.id"
        :vehicle="issue.vehicle"
        :description="issue.description"
        :created-at="issue.created"
      />
    </div>
    <div class="error-container" v-else-if="isLeft(store.issues)">
      <error-component class="toast" :msg="store.issues.left[0]" />
    </div>
    <div v-else>
      <p>Something went so wrong that you should contact us ASAP!</p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  min-width: 100%;
}

.error-container {
  .toast {
    margin: 0 auto;
  }
}

@media only screen and (max-width: 720px) {
  .error-container {
    margin: 1rem;
    max-width: 80vw;
  }
}

.cards-container {
  min-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
}
</style>
