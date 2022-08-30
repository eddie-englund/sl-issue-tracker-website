<script lang="ts" setup>
import Issue from "../components/issue-component.vue";
import { issueStore } from "@/stores/issues-store";

const store = issueStore();
const data = await store.getIssues;
</script>

<template>
  <main>
    <div class="issues-container">
      <Issue
        v-for="issue in data"
        :key="issue.id"
        :id="issue.id"
        :veichle="issue.vehicle"
        :created="issue.created"
        :description="issue.description"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.issues-container {
  margin: 1rem;
  .issue-wrapper:not(:first-child) {
    margin-top: 3%;
  }
}
</style>
