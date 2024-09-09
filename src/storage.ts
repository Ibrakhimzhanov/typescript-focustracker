import { activities, initializeActivities } from './activities'
import { LOCAL_STORAGE_KEY } from './constants'
import { today } from './time'
import { startTimelineItemTimer, stopTimelineItemTimer } from './timeline-item-timer'
import { activeTimelineItem, initilizeTimileItems, timelineItems } from './timeline-items'
import { State } from './types'

export function syncState(shouldLoad = true): void {
  shouldLoad ? loadState() : saveState()

  if (activeTimelineItem.value) {
    shouldLoad ? startTimelineItemTimer() : stopTimelineItemTimer()
  }
}

function loadState(): void {
  const state = loadFromLocalStorage()

  initializeActivities(state)
  initilizeTimileItems(state)
}

function loadFromLocalStorage(): State {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '{}')
}

function saveState(): void {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      lastActiveAt: today()
    })
  )
}
