<script setup lang="ts">
import { getIssues } from '@/api';
import { useIssueStore } from '@/stores/issue-store';
import { isRight, isLeft } from 'fp-ts/lib/Either';
import { onMounted } from 'vue';
import toastComponent from '@/components/toast-component.vue';

const store = useIssueStore();
onMounted(async () => {
  store.issues = await getIssues();
});
</script>

<template>
  <main>
    <div v-if="isRight(store.issues)">
      {{ store.issues.right }}
    </div>
    <toast-component
      class="toast"
      v-else-if="isLeft(store.issues)"
      :msg="store.issues.left[0]"
    />
    <div v-else>
      <p>Something went so wrong that you should contact us ASAP!</p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.toast {
  position: absolute;
  right: 5rem;
  bottom: 10rem;
}
</style>
