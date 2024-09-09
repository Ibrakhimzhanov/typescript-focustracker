<script setup>
import { activitySelectOptions } from '../activities'
import { updateTimelineItem } from '../timeline-items'
import { isTimelineItemValid } from '../validators'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10 capitalize">
    <BaseSelect
      placeholder="Rest"
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      @select="updateTimelineItem(timelineItem, { activityId: $event })"
    />
    <TimelineStopwatch :timeline-item="timelineItem" />
    <TimelineHour :hour="timelineItem.hour" />
  </li>
</template>
