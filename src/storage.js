import { activities, initializeActivities } from './activities'
import { LOCAL_STORAGE_KEY } from './constants'
import { today } from './time'
import { startTimelineItemTimer, stopTimelineItemTimer } from './timeline-item-timer'
import { activeTimelineItem, initilizeTimileItems, timelineItems } from './timeline-items'

export function syncState(shouldLoad = true) {
  shouldLoad ? loadState() : saveState()

  if (activeTimelineItem.value) {
    shouldLoad ? startTimelineItemTimer() : stopTimelineItemTimer()
  }
}

function loadState() {
  const state = loadFromLocalStorage()

  initializeActivities(state)
  initilizeTimileItems(state)
}

function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '{}')
}

function saveState() {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      lastActiveAt: today()
    })
  )
}
