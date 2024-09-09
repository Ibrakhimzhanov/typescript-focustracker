<script setup>
import ProgressItem from '../components/ProgressItem.vue'
import TheProgressEmptyState from '../components/TheProgressEmptyState.vue'
import { trackedActivities } from '../activities'
</script>
<template>
  <ul v-if="trackedActivities.length" class="divide-y">
    <ProgressItem
      v-for="(activity, index) in trackedActivities"
      :key="activity.id"
      :index="index"
      :activity="activity"
    />
  </ul>
  <TheProgressEmptyState v-else />
</template>
