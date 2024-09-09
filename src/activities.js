import { computed, ref } from 'vue'
import { HUNDRED_PERCENT } from './constants'

export const activities = ref([])

export const trackedActivities = computed(() =>
  activities.value.filter(({ secondsToComplete }) => secondsToComplete)
)

export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function calculateActivityCompletionPercentage(
  { secondsToComplete },
  trackedActivitySeconds
) {
  return Math.floor((trackedActivitySeconds * HUNDRED_PERCENT) / secondsToComplete)
}

export function calculateCompletionPercentage(totaltrackedActivitySeconds) {
  return Math.floor(
    (totaltrackedActivitySeconds * HUNDRED_PERCENT) / totalActivitySecondsToComplete.value
  )
}

const totalActivitySecondsToComplete = computed(() => {
  return trackedActivities.value
    .map(({ secondsToComplete }) => secondsToComplete)
    .reduce((total, seconds) => total + seconds, 0)
})

export function updateActivity(activity, fields) {
  return Object.assign(activity, fields)
}

export function initializeActivities(state) {
  activities.value = state.activities || []
}

export function createActivity(activity) {
  activities.value.push(activity)
}

function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({
    value: activity.id,
    label: activity.name
  }))
}
