<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import TheTimelineIndicator from '@/components/TheTimelineIndicator.vue'
import { onActivated } from 'vue'
import {
  scrollToHour,
  timelineItems,
  timelineItemRefs,
  scrollToCurrentHour
} from '../timeline-items'

onActivated(scrollToCurrentHour)

</script>
<template>
  <div class="relative mt-7"> 
    <TheTimelineIndicator />
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
        @scroll-to-hour="scrollToHour(timelineItem.hour)"
      />
    </ul>
  </div>
</template>
