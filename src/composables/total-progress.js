import { computed } from 'vue'
import { calculateCompletionPercentage, trackedActivities } from '../activities'
import { getProgressColorClass } from '../functions'
import { calculateTrackedActivitySeconds, timelineItems } from '../timeline-items'

export function useTotalProgress() {
  const colorClass = computed(() => getProgressColorClass(percentage.value))

  const percentage = computed(() =>
    calculateCompletionPercentage(totaltrackedActivitySeconds.value)
  )

  const totaltrackedActivitySeconds = computed(() => {
    return trackedActivities.value
      .map((activity) =>
        Math.min(
          calculateTrackedActivitySeconds(timelineItems.value, activity),
          activity.secondsToComplete
        )
      )
      .reduce((total, seconds) => total + seconds, 0)
  })

  return {
    colorClass,
    percentage
  }
}
